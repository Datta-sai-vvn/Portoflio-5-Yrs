import { motion } from 'framer-motion';
import { Download, BookOpen, FolderGit2, Mail } from 'lucide-react';
import profileImg from '../assets/Profile.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-gray-50 dark:bg-dark transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-primary font-semibold text-lg tracking-wide">Hello, I'm</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                            Veera Venkata <span className="text-primary">Naga</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
                            Software AI Engineer
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                            Building and shipping production-grade full-stack systems and AI-powered applications (RAG, LLM fine-tuning, NLP, OCR) on AWS & Azure.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="px-8 py-3 bg-primary text-white dark:text-black rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                <Download size={20} /> View Resume
                            </a>
                            <a
                                href="/study-hub"
                                className="px-8 py-3 bg-white dark:bg-secondary text-primary dark:text-primary border-2 border-primary/50 dark:border-primary/50 rounded-full font-bold shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-md transition-all transform hover:-translate-y-1 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-zinc-800"
                            >
                                <BookOpen size={20} /> Study Hub
                            </a>
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-gray-900 dark:bg-gray-750 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                <FolderGit2 size={20} /> Projects
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
                            >
                                <Mail size={20} /> Contact Me
                            </button>
                        </div>

                        <div className="pt-8 flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> 5+ Years Experience
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span> MSCS @ UIC (3.8 GPA)
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Photo & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Decorative circle/shape behind */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-400/20 dark:from-zinc-800 dark:to-zinc-900/50 rounded-full blur-2xl animate-pulse"></div>

                            {/* Photo Placeholder */}
                            <div className="absolute inset-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                                <img src={profileImg} alt="Veera Venkata Naga" className="w-full h-full object-cover object-[center_20%]" />
                            </div>
                            {/* Floating Stats Card Removed */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
