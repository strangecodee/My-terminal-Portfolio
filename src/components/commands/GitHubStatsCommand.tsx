import React from "react";
import type { GitHubStats } from "../../types/terminal";

interface GitHubStatsCommandProps {
  stats: GitHubStats;
}

export const GitHubStatsCommand: React.FC<GitHubStatsCommandProps> = ({
  stats,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getLanguageBar = (percentage: number) => {
    const filled = Math.round(percentage / 2); // Scale to 50 chars max
    const empty = 50 - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  };

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded-sm">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          📊 GitHub Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-teal-400 mb-3">
              👤 Profile Overview
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-gray-400">Name:</span> {stats.user.name}
              </div>
              <div>
                <span className="text-gray-400">Bio:</span> {stats.user.bio}
              </div>
              <div>
                <span className="text-gray-400">Member since:</span>{" "}
                {formatDate(stats.user.createdAt)}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-teal-400 mb-3">
              📈 Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {stats.user.publicRepos}
                </div>
                <div className="text-sm text-gray-400">Public Repos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {stats.repositories.totalStars}
                </div>
                <div className="text-sm text-gray-400">Total Stars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {stats.user.followers}
                </div>
                <div className="text-sm text-gray-400">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {stats.repositories.totalForks}
                </div>
                <div className="text-sm text-gray-400">Total Forks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-4">
          💻 Language Distribution
        </h3>
        <div className="space-y-3">
          {stats.repositories.languages.map((lang, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-teal-400">{lang.name}</span>
                <span className="text-gray-400">{lang.percentage}%</span>
              </div>
              <div className="font-mono text-xs">
                <span style={{ color: lang.color }}>
                  {getLanguageBar(lang.percentage)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-4">
          ⭐ Top Repositories
        </h3>
        <div className="space-y-3">
          {stats.repositories.topRepos.map((repo, index) => (
            <div key={index} className="border-l-2 border-teal-400 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-teal-400 font-semibold">{repo.name}</span>
                <span className="text-yellow-400">⭐ {repo.stars}</span>
                <span className="text-gray-400">• {repo.language}</span>
              </div>
              <div className="text-gray-300 text-sm">{repo.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-4">
          🚀 Recent Activity
        </h3>
        <div className="space-y-2">
          {stats.activity.map((activity, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-gray-400">{formatDate(activity.date)}</span>
              <span className="text-green-400">•</span>
              <span className="text-gray-300">
                {activity.type === "PushEvent" && "📤 Pushed to"}
                {activity.type === "CreateEvent" && "🆕 Created"}
                {activity.type === "PullRequestEvent" && "🔀 Pull request in"}
                {activity.type === "IssuesEvent" && "🐛 Issue in"}
              </span>
              <span className="text-teal-400">{activity.repo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          📊 Repository Analytics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-green-400">
              {stats.repositories.total}
            </div>
            <div className="text-sm text-gray-400">Total Repos</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-yellow-400">
              {stats.repositories.totalStars}
            </div>
            <div className="text-sm text-gray-400">Stars Earned</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-400">
              {stats.repositories.totalForks}
            </div>
            <div className="text-sm text-gray-400">Forks Created</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-purple-400">
              {stats.repositories.languages.length}
            </div>
            <div className="text-sm text-gray-400">Languages Used</div>
          </div>
        </div>
      </div>

      <div className="text-gray-400">
        📅 Last updated: {new Date().toLocaleString()}
        <br />
        💡 Use 'projects' to see detailed project information or 'about' for
        more personal details.
      </div>
    </div>
  );
};
