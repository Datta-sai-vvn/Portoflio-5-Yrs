import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Layers, Cpu, Cloud, Database } from 'lucide-react';
import { Brain } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    techStack: string[];
    points: string[];
    description: string;
    icon: any;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "RAG-Powered Research Assistant",
        category: "AI / NLP / Vector Search",
        techStack: ["Python", "FastAPI", "Hugging Face", "Vector Search", "React", "Embeddings"],
        description: "A complete Retrieval-Augmented Generation system designed for academic literature search, grounding LLMs in custom document corpora.",
        points: [
            "Built a RAG pipeline grounding an LLM in a custom corpus using embeddings, chunking, and vector search.",
            "Served it via a FastAPI backend and React UI, returning source-cited, evaluation-validated answers."
        ],
        icon: Cpu
    },
    {
        id: 2,
        title: "Fine-Tuned Transformer for Text Classification",
        category: "Machine Learning / Deep Learning",
        techStack: ["Python", "PyTorch", "Hugging Face", "scikit-learn", "pandas", "LoRA"],
        description: "Parameter-efficient fine-tuning of transformer models for high-accuracy text classification and evaluation.",
        points: [
            "Fine-tuned a transformer with LoRA on a labeled dataset, reaching 92% F1 over scikit-learn baselines.",
            "Tracked experiments and model evaluation metrics with pandas, comparing accuracy, F1, and latency across sizes."
        ],
        icon: Brain
    },
    {
        id: 3,
        title: "Distributed Microservices Platform",
        category: "Backend / Microservices / DevOps",
        techStack: ["Node.js", "NestJS", "REST APIs", "Docker", "Kubernetes", "Redis"],
        description: "High-throughput and fault-tolerant microservices backend built to sustain high concurrent traffic.",
        points: [
            "Designed fault-tolerant microservices with REST APIs and Redis caching, using retries, timeouts, and health checks.",
            "Deployed the services on Kubernetes with autoscaling and Docker, holding low latency under high-concurrency load."
        ],
        icon: Layers
    },
    {
        id: 4,
        title: "Cloud-Native Data Pipeline",
        category: "Data Engineering / Cloud",
        techStack: ["Python", "AWS", "Docker", "CI/CD", "PostgreSQL"],
        description: "Automated, scalable ETL data pipelines for ingestion, validation, and storage of high-volume records.",
        points: [
            "Built a cloud-native data pipeline transforming 10K+ records through validated, scheduled runs into PostgreSQL.",
            "Containerized each stage with Docker and automated build, test, and deployment through CI/CD on AWS."
        ],
        icon: Cloud
    },
    {
        id: 5,
        title: "Full-Stack Analytics Dashboard",
        category: "Full-Stack Web Development",
        techStack: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "JWT"],
        description: "Comprehensive analytics portal featuring secure role-based access control and live data visualization.",
        points: [
            "Built a full-stack dashboard with a React frontend and Node.js/Express REST APIs over PostgreSQL.",
            "Added JWT authentication and role-based access, then containerized the app with Docker."
        ],
        icon: Database
    }
];

const ProjectCard = ({ project }: { project: Project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const ProjectIcon = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-[#18181b] dark:bg-[#121214] rounded-2xl border-2 border-zinc-800 hover:border-primary p-6 md:p-8 relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.02)]"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-zinc-900 rounded-xl text-primary border border-zinc-800">
                        <ProjectIcon size={24} />
                    </div>
                    <div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white mt-0.5">{project.title}</h3>
                    </div>
                </div>
            </div>

            <p className="text-gray-300 mb-6 text-base leading-relaxed">
                {project.description}
            </p>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-zinc-800 pt-6 mt-6"
                    >
                        <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Key Details</h4>
                        <ul className="space-y-3 mb-6">
                            {project.points.map((point, idx) => (
                                <li key={idx} className="text-gray-300 text-sm md:text-base flex items-start gap-2">
                                    <span className="text-primary mt-1 text-base leading-none">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-zinc-900 text-gray-200 rounded-full text-xs md:text-sm border border-zinc-850 hover:border-primary transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-primary font-semibold hover:text-zinc-400 transition-colors text-sm"
                >
                    {isExpanded ? (
                        <>
                            Show Less <ChevronUp size={18} />
                        </>
                    ) : (
                        <>
                            View Details <ChevronDown size={18} />
                        </>
                    )}
                </button>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#0c0c0e] text-white relative overflow-hidden">
            {/* Background radial gradient */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-radial from-zinc-900 to-black opacity-50 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
                    <p className="text-gray-450 text-lg max-w-2xl mx-auto">
                        A showcase of full-stack engineering, microservices architectures, AI systems, and cloud pipelines.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
