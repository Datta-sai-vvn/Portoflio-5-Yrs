import { BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FloatingStudyButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Hide button if we are already on the Study Hub page
    const isStudyHub = location.pathname === '/study-hub';

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isStudyHub) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="/study-hub"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-8 right-8 z-40 bg-primary text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(255,107,53,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,53,0.23)] hover:bg-orange-600 transition-all group flex items-center justify-center"
                    aria-label="Go to Study Hub"
                >
                    <BookOpen size={24} />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-semibold">
                        Study Notes
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default FloatingStudyButton;
