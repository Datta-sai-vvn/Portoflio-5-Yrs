import { motion } from 'framer-motion';
import { Brain, Database, Cloud, Code, Server, Layout, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="w-8 h-8 text-primary" />,
            skills: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"],
            desc: "Core programming languages used for application logic, scripting, and analysis."
        },
        {
            title: "AI / Machine Learning",
            icon: <Brain className="w-8 h-8 text-primary" />,
            skills: ["LLMs", "RAG", "Fine-tuning (LoRA)", "Embeddings", "Vector Search", "NLP", "Human-in-the-Loop", "scikit-learn", "PyTorch", "Hugging Face", "pandas", "NumPy", "OpenCV/OCR"],
            desc: "Designing, fine-tuning, and implementing intelligent systems and RAG pipelines.",
            highlight: true
        },
        {
            title: "Backend Development",
            icon: <Server className="w-8 h-8 text-primary" />,
            skills: ["Node.js", "Express", "NestJS", "FastAPI", "REST APIs", "GraphQL", "Microservices", "WebSockets"],
            desc: "Building scalable, high-performance APIs and microservices."
        },
        {
            title: "Frontend Development",
            icon: <Layout className="w-8 h-8 text-primary" />,
            skills: ["React", "Redux", "Tailwind", "HTML5", "CSS3", "Responsive Design", "Jest"],
            desc: "Crafting responsive, dynamic, and state-managed user interfaces."
        },
        {
            title: "Databases & Vector Storage",
            icon: <Database className="w-8 h-8 text-primary" />,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch", "Vector DBs"],
            desc: "Designing data schemas, query optimization, and vector search storage."
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud className="w-8 h-8 text-primary" />,
            skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Terraform", "MLOps", "CloudWatch"],
            desc: "Deploying services containerized in Kubernetes, managed through automated CI/CD."
        },
        {
            title: "Systems & Networking",
            icon: <Globe className="w-8 h-8 text-primary" />,
            skills: ["CloudFront", "Nginx", "Caching", "Cache Invalidation", "Load Balancing", "System Design"],
            desc: "Optimizing traffic routing, system caching, and architectural design."
        },
        {
            title: "Engineering Practices",
            icon: <GitBranch className="w-8 h-8 text-primary" />,
            skills: ["Git", "GitHub Actions", "Postman", "Agile/Scrum", "Unit Testing", "Code Reviews"],
            desc: "Applying software development workflows, code quality, and testing standards."
        }
    ];

    return (
        <section id="skills" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for end-to-end data science, from raw data processing to model deployment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`p-6 rounded-xl border ${category.highlight ? 'border-primary/50 bg-gray-800' : 'border-gray-800 bg-gray-900'} hover:border-primary transition-all group`}
                        >
                            <div className="mb-4 p-3 bg-gray-800 rounded-lg inline-block group-hover:bg-gray-700 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{category.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;
