import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Database, Brain, Network, BarChart, FileText, Code, Bot, Search, Clock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VirtualPDFViewer from './VirtualPDFViewer';
import { ChevronLeft } from 'lucide-react'; // Add ChevronLeft for the back button

// Import PDF Files
import MathsPDF from '../assets/Hand-Written Notes/Maths.PDF';
import MLPDF from '../assets/Hand-Written Notes/ML.PDF';
import DLPDF from '../assets/Hand-Written Notes/DL.PDF';
import NLPPDF from '../assets/Hand-Written Notes/NLP.PDF';
import SQLPDF from '../assets/Hand-Written Notes/SQL.PDF';

interface CourseNode {
    id: string;
    title: string;
    description: string;
    icon: any;
    color: string;
    file?: string;
    topics: string[];
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Coming Soon';
}

const courses: CourseNode[] = [
    {
        id: 'maths',
        title: "Mathematics for ML",
        description: "Everything from Linear Algebra to Calculus & Statistics required for mastering AI.",
        icon: BarChart,
        color: "bg-blue-500",
        file: MathsPDF,
        topics: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
        level: 'Intermediate'
    },
    {
        id: 'sql',
        title: "SQL & Databases",
        description: "Master data manipulation, complex joins, and database design for Data Science.",
        icon: Database,
        color: "bg-orange-500",
        file: SQLPDF,
        topics: ["Joins", "Aggregations", "Normalization", "Window Functions"],
        level: 'Beginner'
    },
    {
        id: 'ml',
        title: "Machine Learning",
        description: "Core algorithms, supervised & unsupervised learning, and model evaluation metrics.",
        icon: Brain,
        color: "bg-green-500",
        file: MLPDF,
        topics: ["Regression", "Classification", "Clustering", "Ensemble Methods"],
        level: 'Intermediate'
    },
    {
        id: 'dl',
        title: "Deep Learning",
        description: "Neural Networks back-to-front. CNNs, RNNs, and optimization techniques.",
        icon: Network,
        color: "bg-purple-500",
        file: DLPDF,
        topics: ["Neural Networks", "Backpropagation", "CNNs", "RNNs"],
        level: 'Advanced'
    },
    {
        id: 'nlp',
        title: "NLP Specialization",
        description: "Natural Language Processing from basics to Transformers and LLMs.",
        icon: FileText,
        color: "bg-pink-500",
        file: NLPPDF,
        topics: ["Embeddings", "RNNs/LSTMs", "Transformers", "BERT/GPT"],
        level: 'Advanced'
    },
    // Coming Soon Modules
    {
        id: 'dsa',
        title: "DSA (Neetcode 150)",
        description: "Data Structures & Algorithms mastery. Solving the top 150 problems for coding interviews.",
        icon: Code,
        color: "bg-gray-500",
        topics: ["Arrays & Hashing", "Trees", "Graphs", "DP"],
        level: 'Coming Soon'
    },
    {
        id: 'rag',
        title: "RAG Architectures",
        description: "Retrieval-Augmented Generation systems, Vector Databases, and context-aware LLMs.",
        icon: Search,
        color: "bg-indigo-500",
        topics: ["Vector DBs", "Embeddings", "Retrieval", "LangChain"],
        level: 'Coming Soon'
    },
    {
        id: 'agentic',
        title: "Agentic AI",
        description: "Building autonomous AI agents using frameworks like CrewAI, AutoGen, and LangGraph.",
        icon: Bot,
        color: "bg-teal-500",
        topics: ["Agents", "Tools", "Planning", "Multi-Agent Systems"],
        level: 'Coming Soon'
    }
];

const StudyHub = () => {
    const [selectedCourse, setSelectedCourse] = useState<CourseNode | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link to="/" className="text-primary hover:underline flex items-center gap-1 mb-6 inline-block">
                        &larr; Back to Portfolio
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <GraduationCap size={40} className="text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Study Hub
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            My personal handwritten notes covering the complete Data Science & AI curriculum.
                            Click on any module to start learning.
                        </p>
                    </motion.div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={course.file ? { y: -5 } : {}}
                            onClick={() => course.file && setSelectedCourse(course)}
                            className={`bg-white dark:bg-secondary rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden group ${course.file ? 'cursor-pointer hover:shadow-xl' : 'opacity-80'}`}
                        >
                            <div className={`h-2 ${course.color}`} />
                            <div className="p-8">
                                <div className={`w-14 h-14 rounded-xl ${course.color} bg-opacity-10 flex items-center justify-center mb-6 ${course.file ? 'group-hover:scale-110' : ''} transition-transform`}>
                                    <course.icon size={28} className={course.color.replace('bg-', 'text-')} />
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                        {course.title}
                                    </h3>
                                    <span className={`text-xs px-2 py-1 rounded-full border ${course.level === 'Beginner' ? 'border-green-200 text-green-700 bg-green-50' :
                                        course.level === 'Intermediate' ? 'border-yellow-200 text-yellow-700 bg-yellow-50' :
                                            course.level === 'Advanced' ? 'border-red-200 text-red-700 bg-red-50' :
                                                'border-gray-200 text-gray-700 bg-gray-100'
                                        }`}>
                                        {course.level}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {course.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {course.topics.map((topic, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-dark rounded-md text-gray-600 dark:text-gray-300">
                                            #{topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={`p-4 flex justify-between items-center border-t transition-colors duration-300 ${course.file ? 'bg-white dark:bg-secondary border-gray-100 dark:border-gray-800 hover:bg-orange-50 dark:hover:bg-orange-900/10' : 'bg-gray-50 dark:bg-dark/50 border-gray-100 dark:border-gray-800 text-gray-500'}`}>
                                <span className={`text-sm font-bold flex items-center gap-2 ${course.file ? 'text-primary' : ''}`}>
                                    {course.file ? <BookOpen size={18} /> : <Clock size={16} />}
                                    {course.file ? "View Notes" : "Coming Soon"}
                                </span>
                                {course.file && (
                                    <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">
                                        &rarr;
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Connect / CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mt-24 text-center px-4"
            >
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-3xl border border-primary/20 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Let's Connect & Collaborate!
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Have doubts on these topics? Interested in collaborating on <span className="text-primary font-semibold">AI Research</span> or Projects?
                        Or have any exciting <span className="text-primary font-semibold">openings</span>?
                        I'm always open to discussing new ideas and opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            <Bot size={24} />
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* PDF Viewer - Full Screen Overlay */}
            {/* PDF Viewer - Full Screen Overlay */}
            {selectedCourse && selectedCourse.file && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col h-screen"
                >
                    {/* Header / Toolbar */}
                    <div className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md z-10 shrink-0">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors text-gray-300 hover:text-white"
                                title="Close Viewer"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <div>
                                <h2 className="text-lg font-bold truncate max-w-[200px] md:max-w-md">{selectedCourse.title}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto bg-gray-900">
                        <VirtualPDFViewer
                            file={selectedCourse.file!}
                        />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default StudyHub;
