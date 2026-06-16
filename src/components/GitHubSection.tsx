import { motion } from 'framer-motion';
import { Github, Star, GitFork, Book } from 'lucide-react';
import { useGitHub } from '../hooks/useGitHub';

const GitHubSection = () => {
    const { user, repos, loading, error } = useGitHub('Datta-sai-vvn');

    if (loading) {
        return (
            <section id="github" className="py-20 bg-white dark:bg-secondary">
                <div className="max-w-7xl mx-auto px-4 text-center">Loading GitHub stats...</div>
            </section>
        );
    }

    if (error || !user) {
        return null;
    }

    // Calculate total stars
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    return (
        <section id="github" className="py-20 bg-white dark:bg-secondary transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                        <Github size={36} className="text-primary" /> GitHub Activity
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Check out my open source contributions</p>
                </motion.div>

                {/* Profile Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 dark:bg-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center"
                    >
                        <h3 className="text-4xl font-bold text-primary mb-2">{user.public_repos}</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">Public Repositories</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 dark:bg-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center"
                    >
                        <h3 className="text-4xl font-bold text-primary mb-2">{user.followers}</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">Followers</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 dark:bg-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center"
                    >
                        <h3 className="text-4xl font-bold text-primary mb-2">{totalStars}+</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">Total Stars</p>
                    </motion.div>
                </div>

                {/* Repos Grid */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Repositories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {repos.map((repo, i) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 dark:bg-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <Book size={20} className="text-primary" />
                                    <span className="text-xs font-semibold text-gray-500 border border-gray-300 dark:border-gray-600 px-2 py-1 rounded-full">{repo.language || 'Code'}</span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">{repo.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                    {repo.description || 'No description available'}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                                <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contribution Activity</h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm inline-block bg-white p-4">
                        <img src={`https://ghchart.rshah.org/FF6B35/${'Datta-sai-vvn'}`} alt="GitHub Contribution Graph" className="min-w-[600px]" />
                    </div>
                </div>

            </div>
        </section>
    );
};
export default GitHubSection;
