import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import uicLogo from '../assets/UIC.jpg';
import alstomLogo from '../assets/Alstom.jpg';
import eyLogo from '../assets/EY.jpg';

const Experience = () => {
    const experiences = [
        {
            role: "Software AI Engineer",
            company: "Hitachi Rail",
            logo: "/Hitachi Rail.webp",
            location: "San Francisco, CA",
            date: "June 2025 – Present",
            desc: "AI-Driven Asset Monitoring & Cloud Telemetry Ingestion",
            points: [
                "Led the design and delivery of an AI-driven asset-monitoring service for rail operators, cutting unplanned maintenance downtime by 30% by turning live sensor data into early failure predictions surfaced through a React portal.",
                "Scaled the microservices backend in Python and FastAPI on Kubernetes to ingest telemetry from thousands of train and trackside sensors, sustaining real-time processing as data volume grew 4x.",
                "Integrated a RAG-based GenAI assistant that let maintenance engineers query manuals and historical work orders in plain language, cutting average troubleshooting lookup time by 40% across field teams.",
                "Migrated a legacy monolithic service to cloud-native microservices on AWS, shrinking release cycles from weeks to days by splitting components into Docker containers and automating builds through CI/CD pipelines.",
                "Productionized machine learning models through a repeatable MLOps workflow, cutting false-positive maintenance alerts by 22% by automating retraining, monitoring for model drift, and validating each release before rollout.",
                "Mentored a team of four engineers through code reviews and design sessions, lifting delivery quality and consistency by establishing shared standards for testing, API design, and model evaluation across the team.",
                "Delivered real-time operational dashboards in React that gave operators a single view of fleet health, helping crews act on emerging issues up to a day sooner by translating model outputs into prioritized alerts.",
                "Reduced cloud infrastructure costs by roughly a quarter by profiling workloads, right-sizing Kubernetes resources, and caching expensive model inferences, holding latency within the platform’s real-time targets."
            ]
        },
        {
            role: "AI Software Engineer - Graduate Assistant",
            company: "University of Illinois Chicago",
            logo: uicLogo,
            location: "Chicago, IL",
            date: "Jan 2025 – June 2025",
            desc: "Faculty-Led RAG Systems & LLM Fine-Tuning",
            points: [
                "Prototyped a RAG-based research assistant for a faculty-led study, cutting literature-search time from hours to minutes by grounding an LLM in the lab’s own corpus through a Python backend and lightweight React interface.",
                "Fine-tuned open-source LLMs on the lab’s domain data using parameter-efficient LoRA, lifting answer accuracy over the base model by 18% through careful prompt design and evaluation against a held-out test set.",
                "Designed a human-in-the-loop review workflow that let researchers correct uncertain model outputs, steadily improving training-data quality by routing low-confidence predictions back to domain experts before each retraining round.",
                "Benchmarked the RAG pipeline against the baseline LLM across controlled experiments, sharpening retrieval precision by tuning vector embeddings, chunk size, and re-ranking, then documenting results for weekly research reviews.",
                "Analyzed model behavior and surfaced it through a React dashboard, turning raw LLM outputs and eval metrics into clear, interactive views that shaped the project’s direction and fed into a draft research paper.",
                "Presented findings and live demos to the faculty advisor and a 12-person research group, securing buy-in for the next phase by translating RAG and fine-tuning results into plain takeaways the lab could act on."
            ]
        },
        {
            role: "Software Engineer II",
            company: "Alstom Transportation",
            logo: alstomLogo,
            location: "Bangalore, India",
            date: "Aug 2022 – Aug 2024",
            desc: "AI Contract Management Platform & Document Pipeline Automation",
            points: [
                "Architected iSenS, an AI-powered contract management platform that replaced Alstom’s manual review process, cutting average contract review time by 40% through a React workspace backed by Python and FastAPI services.",
                "Automated the document-ingestion pipeline that converted scanned, inconsistent contracts into clean structured text using OCR with OpenCV and Tesseract in Python, clearing hours of manual data entry across 3,000+ legacy documents.",
                "Developed the clause-extraction layer with NLP that automatically tagged obligations, renewal dates, and parties in each contract, helping reviewers surface risky terms sooner and trimming manual clause review by roughly 30%.",
                "Implemented source-linked search over the full contract corpus with ElasticSearch and document chunking, cutting the time reviewers spent hunting for the right clause nearly in half by returning ranked, traceable passages.",
                "Deployed iSenS to production on AWS with FastAPI services containerized in Docker, S3 storage, and CloudWatch logging, keeping the platform stable for daily reviewer use while shipping updates through CI/CD.",
                "Debugged issues spanning the React frontend, REST API layer, and PostgreSQL storage using centralized logs and monitoring, cutting production defects by 25% and steadily improving reliability release over release.",
                "Optimized PostgreSQL queries and indexing as the contract corpus grew into the tens of thousands, keeping median search response under a second by reworking slow joins and caching the most frequent lookups.",
                "Collaborated with legal and contract domain experts to shape the platform’s data schemas and review workflows, lifting clause-extraction accuracy to roughly 90% by aligning iSenS with how teams reviewed contracts day to day."
            ]
        },
        {
            role: "Software Engineer",
            company: "Ernst & Young",
            logo: eyLogo,
            location: "Chennai, India",
            date: "July 2020 – Aug 2022",
            desc: "Full-Stack Development & Agile Product Delivery",
            points: [
                "Drove end-to-end delivery of full-stack features across React frontends and Node.js REST services for client engagements, accelerating feature turnaround by 30% by streamlining a disciplined biweekly Agile release cadence with the team.",
                "Engineered RESTful APIs with Express over SQL data stores to serve client-facing modules, lifting reliability across 10+ services by standardizing request/response contracts, validation, and consistent error handling across endpoints.",
                "Overhauled sluggish reporting queries in SQL that backed high-traffic client dashboards, cutting page load time by 35% by rewriting nested joins with CTEs and adding targeted indexes on frequently filtered hot columns.",
                "Consolidated fragmented, duplicated UI into a library of reusable React components, speeding feature delivery by 20% by centralizing state management, prop contracts, and enforcing responsive layout patterns across screens.",
                "Hardened recurring backend automation written in Python, raising job reliability to 92% by layering in unit tests, schema checks, and input validation that caught malformed data before it reached downstream pipeline stages.",
                "Streamlined releases through CI/CD pipelines spanning multiple environments, shrinking deployment cycles by 45% by automating build, test, and deploy stages on Git-based workflows backed by mandatory peer code reviews.",
                "Containerized backend and frontend services with Docker, trimming local environment setup time by 50% by standardizing dependency versions and dev parity across the team’s machines and onboarding engineers faster.",
                "Partnered with product owners and cross-functional stakeholders across Agile ceremonies, reducing mid-sprint rework by 25% by translating ambiguous business requirements into clearly scoped, testable, and documented engineering tickets."
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
