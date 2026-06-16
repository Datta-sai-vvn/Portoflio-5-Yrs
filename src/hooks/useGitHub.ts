import { useState, useEffect } from 'react';
import axios from 'axios';

interface GitHubUser {
    login: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
    bio: string;
    location: string;
}

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

export const useGitHub = (username: string) => {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [userRes, reposRes] = await Promise.all([
                    axios.get(`https://api.github.com/users/${username}`),
                    axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
                ]);
                setUser(userRes.data);
                setRepos(reposRes.data);
            } catch (err: any) {
                setError('Failed to fetch GitHub data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchData();
        }
    }, [username]);

    return { user, repos, loading, error };
};
