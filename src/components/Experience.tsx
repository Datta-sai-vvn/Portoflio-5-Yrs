import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import alstomLogo from '../assets/Alstom.jpg';
import eyLogo from '../assets/EY.jpg';

const Experience = () => {
    const experiences = [
        {
            role: "Data Engineer",
            company: "State Farm",
            logo: "/statefarm.png",
            location: "Chicago, IL",
            date: "Jan 2025 – Present",
            desc: "Medallion Lakehouse Engineering & RAG-Ready Data Layers",
            points: [
                "Operationalized production-grade ELT pipelines into a medallion (Bronze/Silver/Gold) lakehouse, expanding analytics-ready coverage by 40% by modularizing Python ingestion across 15+ sources into Snowflake.",
                "Architected RAG-ready data layers for GenAI underwriting assistants, cutting research time from hours to minutes by generating embeddings served through vector search wired into LLM frameworks.",
                "Engineered fraud-detection and risk-scoring feature pipelines for P&C claims, lifting model precision by 18% via standardized Python/SQL features and production ModelOps with data science.",
                "Embedded LLM capabilities in the data layer with Snowflake Cortex and AWS Bedrock, accelerating insight delivery by 30% by automating classification and summarization of unstructured claims text.",
                "Built modular dbt models and macros across a multi-repo dbt Cloud project, cutting transformation defects by 25% by enforcing schema-evolution standards, documentation, and automated tests.",
                "Instrumented observability with metrics, alerting, and SLAs/SLOs across 50+ pipelines, raising availability to 99.9% via automated monitoring on CloudWatch and CloudTrail.",
                "Accelerated delivery by 35% by adopting AI-assisted development tools (GitHub Copilot, Cursor, Claude/OpenAI APIs) to generate code and optimize heavy Snowflake queries.",
                "Hardened data governance with RBAC and compliance guardrails, eliminating unauthorized-access findings by securing environments through IAM and secure CI/CD workflows."
            ]
        },
        {
            role: "Data Engineer",
            company: "Alstom Transportation",
            logo: alstomLogo,
            location: "Bangalore, India",
            date: "Aug 2022 – Aug 2024",
            desc: "Cloud Data Lakes, Real-Time Ingestion, and Star Schema Marts",
            points: [
                "Architected scalable ETL/ELT pipelines on AWS Glue, Step Functions, and Apache Hudi, consolidating 20+ sources into an S3 data lake and cutting ingestion runtime by 45%.",
                "Scaled processing of 50M+ daily records by tuning Apache Spark (PySpark) through partitioning, caching, and Parquet compaction, lowering compute cost by 30%.",
                "Owned metadata and schema discovery with AWS Glue Data Catalog and Crawlers, improving dataset discoverability by 40% via standardized naming conventions and documentation.",
                "Modeled curated marts in Amazon Redshift with star schemas and tuned sort/dist keys, improving BI query performance by 50% for analytics and reporting teams.",
                "Containerized workloads on AWS ECS/ECR and codified infrastructure with Terraform, shrinking new-pipeline setup from days to hours through reusable modules.",
                "Engineered real-time ingestion with Kafka and Kinesis streaming 100K+ events/min, enabling sub-second downstream availability via exactly-once processing.",
                "Established secure CI/CD with automated testing, version control, and code reviews, cutting production defects by 35% by enforcing engineering standards across the team.",
                "Implemented monitoring, logging, and alerting on CloudWatch, cutting mean-time-to-detect failures by 40% via SLA-backed health checks on critical pipelines."
            ]
        },
        {
            role: "Data Engineer",
            company: "Ernst and Young",
            logo: eyLogo,
            location: "Chennai, India",
            date: "Jun 2019 – Aug 2022",
            desc: "Enterprise ETL Solutions & Database Optimization",
            points: [
                "Delivered ETL/ELT solutions across client engagements, raising reporting accuracy by 30% by integrating disparate sources into governed warehouses with robust standardization.",
                "Built Azure Data Factory and Synapse pipelines in client environments, enabling scalable cloud processing of 10M+ records via dependency-aware orchestration.",
                "Wrote performant SQL across PostgreSQL, MySQL, and Apache Hive to reconcile large datasets, raising data-quality scores by 25% through validated transformations.",
                "Designed star-schema dimensional models and curated layers, reducing ad-hoc query turnaround by 35% by simplifying self-service reporting structures.",
                "Developed Power BI dashboards and reports, speeding stakeholder decisions by 40% by translating raw data into clear, actionable visualizations.",
                "Built early predictive models (regression/classification) with scikit-learn and pandas, improving forecast accuracy by 15% through targeted feature engineering.",
                "Automated recurring workflows with Python and Airflow, eliminating 20+ hours of manual effort weekly via scheduled, validated pipeline runs.",
                "Partnered with cross-functional stakeholders to convert business rules into tested transformations, ensuring maintainability by documenting logic and lineage in Git."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-secondary transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Professional Journey</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-800 z-10 flex items-center justify-center shadow-lg mt-8 md:mt-0">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                                    <div className="p-6 bg-gray-50 dark:bg-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-left group">
                                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                                            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-white p-2 rounded-lg border border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                                <div className="hidden w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 font-bold text-xl rounded-md">
                                                    {exp.company.charAt(0)}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                                                <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                                        </div>

                                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc pl-4">
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="leading-relaxed">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
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
export default Experience;
