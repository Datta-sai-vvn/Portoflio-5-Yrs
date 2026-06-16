import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, BookOpen, Star, GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Master of Science in Computer Science",
            shortDegree: "MS in Computer Science",
            institution: "University of Illinois Chicago",
            shortName: "UIC",
            location: "Chicago, Illinois, USA",
            duration: "August 2024 - May 2026 (Expected)",
            status: "In Progress",
            current: true,
            gpa: "3.80",
            gpaScale: "4.0",
            logo: {
                url: "https://logo.clearbit.com/uic.edu",
                fallback: "UIC",
                color: "#001E62" // UIC Navy Blue
            },
            relevantCoursework: [
                "Data Science",
                "AI Engineering",
                "Machine Learning",
                "Data Mining",
                "Big Data",
                "System Engineering",
                "Advanced Algorithms",
                "Agentic AI"
            ],
            keyHighlights: [
                "Building Data Service Administrator",
                "Focus: ML, Medical Imaging, Data Science",
                "Active in ML research projects and academic publications"
            ]
        },
        {
            id: 2,
            degree: "Bachelor of Technology in Computer Science",
            shortDegree: "B.Tech in Computer Science",
            institution: "SRM Institute of Science and Technology",
            shortName: "SRM University",
            location: "Chennai, Tamil Nadu, India",
            duration: "July 2018 - May 2022",
            status: "Completed",
            current: false,
            gpa: "8.90",
            gpaScale: "10.0",
            logo: {
                url: "https://logo.clearbit.com/srmist.edu.in",
                fallback: "SRM",
                color: "#003366" // SRM Blue
            },
            relevantCoursework: [
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Operating Systems",
                "Computer Networks",
                "Software Engineering",
                "Object-Oriented Programming",
                "Web Technologies",
                "Artificial Intelligence"
            ],
            keyHighlights: [
                "Graduated with Distinction (CGPA: 8.90/10)",
                "Strong foundation in CS fundamentals and programming",
                "Completed multiple projects in web development and ML"
            ]
        }
    ];

    return (
        <section id="education" className="py-20 bg-gray-50/50 dark:bg-dark/50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-light flex items-center justify-center gap-2">
                        <GraduationCap className="text-primary" size={24} />
                        Academic Journey
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </motion.div>

                {/* Timeline */}
                <div className="relative pl-8 md:pl-0">

                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-orange-400/50 rounded-full hidden md:block"></div>
                    <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-orange-400/50 rounded-full md:hidden"></div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-2 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 shadow-lg mt-8 md:mt-0
                      ${edu.current
                                        ? 'bg-white border-green-500 shadow-[0_0_0_4px_rgba(16,185,129,0.2)] animate-pulse'
                                        : 'bg-white border-primary shadow-[0_0_0_4px_rgba(255,107,53,0.2)]'
                                    }
                  `}></div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                                    <div className={`
                        relative bg-white dark:bg-secondary rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300
                        border-l-4 ${edu.current ? 'border-green-500' : 'border-primary'}
                    `}>

                                        {/* Card Header */}
                                        <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
                                            {/* Logo */}
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md overflow-hidden"
                                                    style={{ backgroundColor: edu.logo.color }}>
                                                    <img
                                                        src={edu.logo.url}
                                                        alt={edu.institution}
                                                        className="w-full h-full object-contain bg-white"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).style.display = 'none';
                                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                        }}
                                                    />
                                                    <span className="hidden">{edu.logo.fallback}</span>
                                                </div>
                                            </div>

                                            <div className="flex-grow">
                                                {/* Status Badge */}
                                                <div className={`
                                    inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2
                                    ${edu.current
                                                        ? 'bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                                        : 'bg-indigo-100 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800'}
                                `}>
                                                    {edu.current ? '🎓 In Progress' : '✓ Completed'}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                                                    {edu.degree}
                                                </h3>
                                                <div className="text-gray-600 dark:text-gray-300 font-medium">
                                                    {edu.institution}
                                                </div>
                                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                                                    <MapPin size={14} className="mr-1" />
                                                    {edu.location}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 my-4"></div>

                                        {/* Info Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
                                                    <Award size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-semibold">
                                                        {edu.gpaScale === "10.0" ? "CGPA" : "GPA"}
                                                    </div>
                                                    <div className={`font-bold text-lg ${parseFloat(edu.gpa) >= (edu.gpaScale === "10.0" ? 8.5 : 3.7) ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                                                        {edu.gpa} <span className="text-sm text-gray-400 font-normal">/ {edu.gpaScale}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
                                                    <Calendar size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-semibold">Duration</div>
                                                    <div className="font-bold text-gray-900 dark:text-white text-sm">
                                                        {edu.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Coursework */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-3">
                                                <BookOpen size={16} className="text-primary" />
                                                Relevant Coursework
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.relevantCoursework.map((course, i) => (
                                                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors duration-200 cursor-default border border-gray-200 dark:border-gray-700 hover:border-primary">
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-3">
                                                <Star size={16} className="text-yellow-500" />
                                                Key Highlights
                                            </h4>
                                            <ul className="space-y-2">
                                                {edu.keyHighlights.map((highlight, i) => (
                                                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                                        <span className="text-primary font-bold mt-0.5">•</span>
                                                        <span className="leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
