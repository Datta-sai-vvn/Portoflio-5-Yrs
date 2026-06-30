import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Cpu, Cloud, Database } from 'lucide-react';
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
        title: "GenAI Knowledge Assistant (RAG)",
        category: "GenAI / LLM / Vector Search",
        techStack: ["Python", "LangChain", "FlowiseAI", "Pinecone", "FastAPI", "Docker"],
        description: "Grounded an LLM in a private corpus via embeddings and vector search, returning source-cited answers.",
        points: [
            "Grounded an LLM in a private corpus via embeddings and vector search, returning source-cited answers.",
            "Orchestrated retrieval in FlowiseAI and containerized with Docker, cutting answer latency by 40%."
        ],
        icon: Brain
    },
    {
        id: 2,
        title: "Fraud Detection & Risk Modeling Platform",
        category: "AI / Machine Learning / MLOps",
        techStack: ["Python", "scikit-learn", "Snowflake", "SHAP", "Airflow"],
        description: "Trained classification models on Snowflake features to identify high-risk P&C claims with automated retraining.",
        points: [
            "Trained classification models on Snowflake features, flagging high-risk transactions at 0.92 AUC.",
            "Automated retraining and model monitoring in Airflow with SHAP explainability and drift checks."
        ],
        icon: Cpu
    },
    {
        id: 3,
        title: "Cloud-Native Medallion Lakehouse",
        category: "Data Platform / Cloud Infrastructure",
        techStack: ["AWS Glue", "Apache Hudi", "Redshift", "dbt", "Terraform"],
        description: "Built a Bronze/Silver/Gold medallion lakehouse on S3 with Glue, Hudi upserts, and Redshift marts.",
        points: [
            "Built a Bronze/Silver/Gold lakehouse on S3 with Glue and Hudi upserts, serving Redshift marts via dbt.",
            "Provisioned infrastructure with Terraform and automated tests and deploys through CI/CD."
        ],
        icon: Cloud
    },
    {
        id: 4,
        title: "Real-Time Streaming Analytics Pipeline",
        category: "Data Engineering / Streaming",
        techStack: ["Kafka", "Spark Structured Streaming", "Snowflake", "Power BI"],
        description: "Streamed Kafka events through Spark Structured Streaming into Snowflake with real-time BI reporting.",
        points: [
            "Streamed Kafka events through Spark Structured Streaming into Snowflake with sub-minute freshness.",
            "Surfaced live KPIs in Power BI with windowed, exactly-once aggregations for near real-time monitoring."
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
                        A showcase of cloud data warehousing, real-time streaming analytics, medallion lakehouses, and AI-powered data layers.
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
