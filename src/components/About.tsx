import { motion } from 'framer-motion';
import { Briefcase, Microscope, Cloud } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Briefcase size={24} className="text-white dark:text-black" />,
            title: "Professional",
            desc: "5+ years in Full-Stack & AI Engineering",
            color: "bg-black dark:bg-white"
        },
        {
            icon: <Microscope size={24} className="text-white dark:text-black" />,
            title: "Research",
            desc: "AI/ML, NLP & RAG Systems",
            color: "bg-black dark:bg-white"
        },
        {
            icon: <Cloud size={24} className="text-white dark:text-black" />,
            title: "Cloud",
            desc: "AWS, Azure containerized apps",
            color: "bg-black dark:bg-white"
        }
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-secondary transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <span className="font-bold text-gray-900 dark:text-white">Software AI Engineer</span> with over <span className="font-semibold text-primary">5+ years of hands-on experience</span> building and shipping production-grade full-stack systems with React, Node.js, and Python, focused on scalable backend and frontend services.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            I am adept at designing RESTful APIs, cloud-native engineering on AWS/Azure, and building AI-powered applications spanning RAG pipelines, LLM fine-tuning (LoRA), NLP, and OCR. I am passionate about turning complex datasets and AI technologies into reliable, high-performance software systems.
                        </p>
                    </motion.div>

                    {/* Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-1"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-gray-50 dark:bg-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
