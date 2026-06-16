import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ZoomIn, ZoomOut } from 'lucide-react';
import { motion } from 'framer-motion';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

interface PDFViewerProps {
    file: string;
    title: string;
    onClose: () => void;
}

const PDFViewer = ({ file, title, onClose }: PDFViewerProps) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [scale, setScale] = useState<number>(1.0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col h-screen"
        >
            {/* Header / Toolbar */}
            <div className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-700 rounded-full transition-colors text-gray-300 hover:text-white"
                        title="Close Viewer"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <div>
                        <h2 className="text-lg font-bold">{title}</h2>
                        <p className="text-xs text-gray-400">
                            {numPages > 0 ? `${numPages} Pages` : 'Loading...'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-gray-700/50 rounded-lg p-1">
                    <button
                        onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
                        className="p-2 hover:bg-gray-600 rounded-md"
                        title="Zoom Out"
                    >
                        <ZoomOut size={18} />
                    </button>
                    <span className="text-xs font-mono w-12 text-center">{Math.round(scale * 100)}%</span>
                    <button
                        onClick={() => setScale(s => Math.min(2.5, s + 0.1))}
                        className="p-2 hover:bg-gray-600 rounded-md"
                        title="Zoom In"
                    >
                        <ZoomIn size={18} />
                    </button>
                </div>
            </div>

            {/* Document Render Area */}
            <div className="flex-1 overflow-auto bg-gray-900 p-4 md:p-8">
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="flex items-center justify-center h-64 text-white">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mr-3"></div>
                            Loading Document...
                        </div>
                    }
                    error={
                        <div className="text-red-400 p-8 text-center bg-gray-800 rounded-xl">
                            <p>Failed to load PDF.</p>
                            <p className="text-sm mt-2 opacity-70">Please check internet connection or file path.</p>
                        </div>
                    }
                    className="flex flex-col items-center gap-6"
                >
                    {Array.from(new Array(numPages), (_, index) => (
                        <div key={`page_${index + 1}`} className="shadow-2xl">
                            <Page
                                pageNumber={index + 1}
                                scale={scale}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                className="bg-white"
                                loading={
                                    <div className="bg-white h-[800px] w-[600px] flex items-center justify-center text-gray-400">
                                        Loading Page {index + 1}...
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </Document>
            </div>
        </motion.div>
    );
};

export default PDFViewer;
