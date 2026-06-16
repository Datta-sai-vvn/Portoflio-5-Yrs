import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText, CheckCircle, Search } from 'lucide-react';

const Certification = () => {
    const certification = {
        title: "Microsoft Certified: Azure AI Engineer Associate",
        issuer: "Microsoft",
        date: "Feb 2026",
        credentialId: "237E973316A0BAC1",
        credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/DattaSaiVVN-9435/237E973316A0BAC1?sharingId",
        logo: "/Microsoft Certification/Microsoft_Certified_Azure_AI_Engineer_Associate.png", // Assuming a standard path or generic placeholder if not available
        bgColor: "bg-[#00A4EF]", // Microsoft Blue
        documents: [
            {
                name: "Main Certificate",
                path: "/Microsoft Certification/Azure AI Associate Certificate.pdf",
                icon: <Award size={18} />
            },
            {
                name: "Pre-Prep Document",
                path: "/Microsoft Certification/Pre-Prep UDEMY Certification.pdf",
                icon: <FileText size={18} />
            },
            {
                name: "Exam Report",
                path: "/Microsoft Certification/Report.pdf",
                icon: <Search size={18} />
            }
        ],
        skills: ["Azure OpenAI", "RAG", "Azure AI Search", "NLP", "Computer Vision", "Document Intelligence", "OCR"],
        bullets: [
            "Validated expertise in generative AI on Azure OpenAI with prompt engineering and RAG via Azure AI Search.",
            "Proficient in NLP and computer vision using Azure AI Language, Document Intelligence, and OCR knowledge mining.",
            "Skilled in securing and monitoring Azure AI workloads via managed identities, Key Vault, and Responsible AI controls."
        ]
    };

    return (
        <section id="certification" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Certification</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-light flex items-center justify-center gap-2">
                        <Award className="text-primary" size={24} />
                        Professional Credentials
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </motion.div>

                {/* Certification Card */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl bg-gray-50 dark:bg-secondary rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row"
                    >
                        {/* Left Side - Visuals */}
                        <div className="md:w-1/3 bg-gradient-to-br from-zinc-800 to-zinc-950 p-8 flex flex-col items-center justify-center text-white text-center">
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-2xl overflow-hidden p-6">
                                <img
                                    src="/Microsoft Certification/microsoft-icon-logo-symbol-free-png (1).png"
                                    alt="Microsoft Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Microsoft Certified</h3>
                            <p className="text-blue-100 text-sm">Azure AI Engineer Associate</p>
                        </div>

                        {/* Right Side - Details */}
                        <div className="md:w-2/3 p-8 md:p-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                        {certification.title}
                                    </h3>
                                    <p className="text-primary font-medium">{certification.issuer}</p>
                                </div>
                                <a
                                    href={certification.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-sm"
                                    title="Verify Credential"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Credential ID</p>
                                    <p className="text-gray-800 dark:text-gray-200 font-mono text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg inline-block">
                                        {certification.credentialId}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Issued Date</p>
                                    <p className="text-gray-800 dark:text-gray-200">{certification.date}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3">Key Skills Validated</p>
                                <div className="flex flex-wrap gap-2">
                                    {certification.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-900/30">
                                            <CheckCircle size={10} className="inline mr-1" /> {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3">Certification Highlights</p>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc pl-4">
                                    {certification.bullets.map((bullet, idx) => (
                                        <li key={idx} className="leading-relaxed">{bullet}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3">Supporting Documents</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {certification.documents.map((doc, idx) => (
                                        <a
                                            key={idx}
                                            href={doc.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition-all shadow-sm group"
                                        >
                                            <span className="text-gray-400 group-hover:text-primary transition-colors">{doc.icon}</span>
                                            <span className="font-medium">{doc.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certification;
