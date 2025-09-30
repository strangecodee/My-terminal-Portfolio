import { useState, useEffect } from "react"; // Note: This is for potential hook usage, but functions are standalone

const GITHUB_API_BASE = "https://api.github.com";
const CACHE_KEY = "github_stats_cache";
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in ms

// Fetch user repositories from GitHub API
export async function fetchUserRepos(username: string): Promise<any[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated&order=desc`
    );
    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error;
  }
}

// Get GitHub stats with caching
export async function getGitHubStats(
  username: string
): Promise<{ totalRepos: number; totalStars: number }> {
  // Check cache
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_EXPIRY) {
      return data;
    }
  }

  try {
    const repos = await fetchUserRepos(username);
    const totalRepos = repos.length;
    const totalStars = repos.reduce(
      (sum: number, repo: any) => sum + (repo.stargazers_count || 0),
      0
    );

    const stats = { totalRepos, totalStars };

    // Cache the result
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data: stats,
        timestamp: Date.now(),
      })
    );

    return stats;
  } catch (error) {
    console.error("Error getting GitHub stats:", error);
    // Return fallback or throw; for now, throw to handle in component
    throw error;
  }
}

// Optional: Hook for easy use in components
export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<{
    totalRepos: number;
    totalStars: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);
        const data = await getGitHubStats(username);
        setStats(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch GitHub stats"
        );
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [username]);

  return { stats, loading, error };
}
