import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitPullRequest, ExternalLink, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Zap } from 'lucide-react';

const OpenSource = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const contribution = {
        project: "UW Data Mosaic (uwdata)",
        module: "mosaic-core",
        year: "2026",
        title: "Latest-Only Query Stream Scheduling",
        prLink: "https://github.com/uwdata/mosaic/pull/967#issuecomment-3872181712",
        description: "Contributed to UW Data Mosaic by implementing latest-only query stream scheduling in the Coordinator/QueryManager. This optimization prunes stale requests during bursty UI interactions (like brushing or dragging) to significantly improve time-to-latest-result.",
        problem: "Interactive UI interactions (brush/drag/slider) can enqueue many similar queries quickly. With Mosaic's previous request queueing, these requests were executed serially and couldn't be cancelled server-side. This caused \"stale query storms\" where the system spent 7.6s+ executing obsolete queries, increasing latency for the user's actual latest intent.",
        solution: "Implemented a 'latest-only' scheduling strategy at the Coordinator layer. When enabled, the system increments a per-stream generation counter, prunes older queued requests for the same stream before they reach the connector, and suppresses stale results when responses arrive. This reduces wasted work without requiring complex server-side cancellation.",
        evidence: "Reproduced backlog showed blasting 30 heavy queries yielded ~7.6s tail latency due to serial execution. With latest-only enabled, only the latest request resolves; stale requests are pruned/suppressed, reducing tail latency substantially to near-instantaneous levels for the end user.",
        files: [
            "packages/mosaic/core/src/types.ts",
            "packages/mosaic/core/src/Coordinator.ts",
            "packages/mosaic/core/src/QueryManager.ts",
            "packages/mosaic/core/test/querymanager-latest-only.test.ts"
        ]
    };

    return (
        <section id="opensource" className="py-20 bg-gray-50 dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                        <GitPullRequest size={36} className="text-primary" /> Open Source Contributions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Contributing to the tools that power modern Data Science and Analytics.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-[#1C2532] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-700 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        {contribution.project} <span className="text-gray-400 font-normal text-lg">/ {contribution.module}</span>
                                    </h3>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800">
                                            Merged PR
                                        </span>
                                        <span className="text-sm text-gray-500">{contribution.year}</span>
                                    </div>
                                </div>
                                <a
                                    href={contribution.prLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-primary hover:text-white transition-all font-medium text-sm flex items-center gap-2"
                                >
                                    <ExternalLink size={16} /> View PR
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 bg-gray-50/50 dark:bg-[#232E3E]/50">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                {contribution.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {contribution.description}
                            </p>

                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="flex items-center gap-2 text-primary font-semibold hover:text-orange-600 transition-colors text-sm mb-6"
                            >
                                {isExpanded ? (
                                    <>Hide Technical Details <ChevronUp size={16} /></>
                                ) : (
                                    <>View Technical Details <ChevronDown size={16} /></>
                                )}
                            </button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-100 dark:border-red-900/20">
                                                <h5 className="font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                                                    <AlertCircle size={18} /> The Problem
                                                </h5>
                                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    {contribution.problem}
                                                </p>
                                            </div>
                                            <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-xl border border-green-100 dark:border-green-900/20">
                                                <h5 className="font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                                                    <Zap size={18} /> The Solution
                                                </h5>
                                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    {contribution.solution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-white dark:bg-dark p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                            <h5 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                                <CheckCircle2 size={18} className="text-primary" /> Validation & Evidence
                                            </h5>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {contribution.evidence}
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Modified Core Files</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {contribution.files.map((file, i) => (
                                                    <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-mono border border-gray-300 dark:border-gray-700">
                                                        {file}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
