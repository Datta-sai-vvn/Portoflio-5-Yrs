import { Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 dark:bg-secondary p-8 rounded-2xl">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-2">VVN</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Veera Venkata Naga (Datta Sai VVN). All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="/resume.pdf" target="_blank" className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">Resume</a>

                        <a href="https://www.linkedin.com/in/vvnds" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"><Linkedin size={20} /></a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white dark:bg-dark rounded-full shadow-md hover:shadow-lg transition-all text-primary hover:scale-110"
                        aria-label="Back to Top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
