import { motion } from 'framer-motion';
import { Code, Cloud, Server, Cpu, Database, Brain, Sparkles, BarChart2, Terminal, ShieldCheck } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="w-8 h-8 text-primary" />,
            skills: ["Python", "SQL", "R", "Scala", "Bash"],
            desc: "Core programming and scripting languages for data manipulation and systems automation."
        },
        {
            title: "AWS Cloud",
            icon: <Cloud className="w-8 h-8 text-primary" />,
            skills: ["S3", "Glue", "Redshift", "EMR", "Step Functions", "Lambda", "EC2", "ECS/ECR", "IAM", "CloudWatch", "CloudTrail", "Lake Formation", "Bedrock", "SageMaker"],
            desc: "Deploying and managing data infrastructure, storage, security, and compute on AWS.",
            highlight: true
        },
        {
            title: "Azure / GCP",
            icon: <Server className="w-8 h-8 text-primary" />,
            skills: ["Azure ML", "Azure OpenAI", "Data Factory", "Synapse", "GCP BigQuery", "Vertex AI"],
            desc: "Implementing cloud data analytics, pipeline orchestration, and ML services on Azure & GCP."
        },
        {
            title: "Data Engineering",
            icon: <Cpu className="w-8 h-8 text-primary" />,
            skills: ["Apache Spark/PySpark", "Airflow", "dbt (Cloud, Macros)", "Apache Hudi", "Kafka", "ETL/ELT", "Medallion (Bronze/Silver/Gold)"],
            desc: "Building high-performance pipelines, streaming datasets, and lakehouse architectures.",
            highlight: true
        },
        {
            title: "Data Warehouses",
            icon: <Database className="w-8 h-8 text-primary" />,
            skills: ["Snowflake (Cortex, Time Travel, Zero-Copy Cloning, RBAC)", "Redshift", "BigQuery", "Databricks (Delta Lake)"],
            desc: "Modeling curated data marts, tuning query performance, and scaling enterprise storage."
        },
        {
            title: "Databases",
            icon: <Database className="w-8 h-8 text-primary" />,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Apache Hive", "Redis", "Vector DBs (FAISS, Pinecone, Chroma)"],
            desc: "Relational, NoSQL, and vector storage engines for transaction, cache, and semantic lookup."
        },
        {
            title: "AI / Machine Learning",
            icon: <Brain className="w-8 h-8 text-primary" />,
            skills: ["scikit-learn", "PyTorch", "pandas", "NumPy", "Regression", "Classification", "Clustering", "Time Series", "NLP", "Feature Engineering", "SHAP"],
            desc: "Designing predictive models, feature scoring, and model interpretability frameworks."
        },
        {
            title: "GenAI & LLM",
            icon: <Sparkles className="w-8 h-8 text-primary" />,
            skills: ["RAG", "LLM Fine-tuning (LoRA)", "Embeddings", "Vector Search", "Prompt Engineering", "LangChain", "OpenAI/Azure OpenAI", "Claude API"],
            desc: "Engineering intelligent agent frameworks, vector index retrieval, and LLM orchestration.",
            highlight: true
        },
        {
            title: "BI & Visualization",
            icon: <BarChart2 className="w-8 h-8 text-primary" />,
            skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"],
            desc: "Building dashboards and analytics reporting to surface operational trends."
        },
        {
            title: "DevOps",
            icon: <Terminal className="w-8 h-8 text-primary" />,
            skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Jenkins", "GitHub Actions", "Git"],
            desc: "Containerizing services, orchestrating workloads, and automating continuous delivery."
        },
        {
            title: "Practices",
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            skills: ["Data Governance", "Data Quality", "Compliance", "MLOps/ModelOps", "AI-Assisted Dev", "Agile/Scrum", "Jira/Confluence"],
            desc: "Implementing data governance compliance, schema evolution, and ModelOps observability."
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
                        A comprehensive toolkit for end-to-end data engineering, pipeline design, and AI-powered data platform operations.
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
