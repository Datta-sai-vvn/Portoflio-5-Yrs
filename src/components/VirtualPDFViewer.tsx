import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './VirtualPDFViewer.css';

// Set worker using local import for stability
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface VirtualPDFViewerProps {
    file: string;
}

const VirtualPDFViewer: React.FC<VirtualPDFViewerProps> = ({ file }) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set([1]));
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const pageRefs = useRef<Map<number, HTMLDivElement>>(new Map());

    // Detect mobile for text layer optimization only
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        // Remove aggressive resize listener to prevent state thrashing
        // window.addEventListener('resize', checkMobile); 
        // return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Get container width
    useEffect(() => {
        if (containerRef.current) {
            const updateWidth = () => {
                setContainerWidth(containerRef.current?.clientWidth || 0);
            };

            updateWidth();
            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
        }
    }, [containerRef.current]);

    // Intersection Observer for virtualization
    useEffect(() => {
        if (numPages === 0) return;

        const observerOptions = {
            root: null, // Always use viewport as root, most reliable on mobile
            rootMargin: '100% 0px 100% 0px', // Use percentage for better mobile scaling (1 screen height above/below)
            threshold: 0
        };

        // Create observer
        const observer = new IntersectionObserver((entries) => {
            setVisiblePages(prev => {
                const newVisiblePages = new Set(prev);
                let hasChanges = false;

                // 1. Identify currently intersecting pages
                const intersectingPages: number[] = [];
                entries.forEach((entry) => {
                    const pageNum = parseInt(entry.target.getAttribute('data-page-number') || '0');
                    if (entry.isIntersecting) {
                        intersectingPages.push(pageNum);
                        if (!newVisiblePages.has(pageNum)) {
                            newVisiblePages.add(pageNum);
                            hasChanges = true;
                        }
                    }
                });

                // 2. Unload pages if we have a clear "active view" anchor
                if (intersectingPages.length > 0) {
                    const minActive = Math.min(...intersectingPages);
                    const maxActive = Math.max(...intersectingPages);

                    // Buffer: Keep 3 pages around the view
                    const BUFFER = 3;
                    const safeMin = minActive - BUFFER;
                    const safeMax = maxActive + BUFFER;

                    // Cleanup pages outside buffer
                    Array.from(newVisiblePages).forEach(p => {
                        if (p < safeMin || p > safeMax) {
                            newVisiblePages.delete(p);
                            hasChanges = true;
                        }
                    });
                }
                // Fallback: If scrolling fast and no intersection event fires for a moment, keep previous pages.
                // Do NOT unload if intersectingPages is empty (could mean user is scrolling between placeholders).

                return hasChanges ? newVisiblePages : prev;
            });
        }, observerOptions);

        // Observe all page placeholders
        pageRefs.current.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [numPages]);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setError(null);
    };

    const onDocumentLoadError = (error: Error) => {
        console.error('PDF Load Error:', error);
        setError('Failed to load PDF.');
    };

    return (
        <div ref={containerRef} className="virtual-pdf-viewer">
            {error && (
                <div className="pdf-error">
                    <p>{error}</p>
                </div>
            )}

            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                    <div className="pdf-loading">
                        <div className="spinner"></div>
                        <p>Loading PDF...</p>
                    </div>
                }
            >
                {Array.from(new Array(numPages), (_, index) => {
                    const pageNumber = index + 1;
                    const isVisible = visiblePages.has(pageNumber);

                    // Dynamic height based on aspect ratio approximation (A4 ~ 1.414)
                    // If containerWidth is unknown, default to 800px height.
                    const estimatedHeight = containerWidth ? containerWidth * 1.4 : 800;

                    return (
                        <div
                            key={pageNumber}
                            ref={(el) => {
                                if (el) pageRefs.current.set(pageNumber, el);
                            }}
                            data-page-number={pageNumber}
                            className="page-container"
                            style={{
                                // On mobile, keeping the height consistent is crucial to prevent scroll jumping
                                minHeight: isVisible ? 'auto' : `${estimatedHeight}px`
                            }}
                        >
                            {isVisible ? (
                                <Page
                                    pageNumber={pageNumber}
                                    width={containerWidth ? Math.min(containerWidth - 20, 800) : undefined}
                                    loading={
                                        <div
                                            className="page-loading"
                                            style={{ height: estimatedHeight }}
                                        >
                                            Loading page {pageNumber}...
                                        </div>
                                    }
                                    renderTextLayer={!isMobile} // Optimize for mobile perf
                                    renderAnnotationLayer={false}
                                />
                            ) : (
                                <div
                                    className="page-placeholder"
                                    style={{ height: estimatedHeight }}
                                >
                                    <p>Page {pageNumber}</p>
                                </div>
                            )}
                            <div className="page-number">Page {pageNumber} of {numPages}</div>
                        </div>
                    );
                })}
            </Document>
        </div>
    );
};

export default VirtualPDFViewer;
