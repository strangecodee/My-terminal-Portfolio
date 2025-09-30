import React from "react";

export const HelpCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-blue-400 font-semibold">📚 Available Commands</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm">
        <div>
          <h4 className="text-green-400 font-semibold mb-2">System Commands</h4>
          <ul className="space-y-1">
            <li>
              <span className="text-cyan-400">top</span> - Show system processes
            </li>
            <li>
              <span className="text-cyan-400">ps aux</span> - List all processes
            </li>
            <li>
              <span className="text-cyan-400">df -h</span> - Show disk usage
            </li>
            <li>
              <span className="text-cyan-400">free -m</span> - Show memory usage
            </li>
            <li>
              <span className="text-cyan-400">netstat -tulpn</span> - Show
              network connections
            </li>
            <li>
              <span className="text-cyan-400">uptime</span> - Show system uptime
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">DevOps Tools</h4>
          <ul className="space-y-1">
            <li>
              <span className="text-cyan-400">docker ps</span> - List containers
            </li>
            <li>
              <span className="text-cyan-400">kubectl get pods</span> - List
              pods
            </li>
            <li>
              <span className="text-cyan-400">terraform plan</span> - Plan
              infrastructure changes
            </li>
            <li>
              <span className="text-cyan-400">jenkins status</span> - Show
              Jenkins jobs
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-purple-400 font-semibold mb-2">Portfolio</h4>
          <ul className="space-y-1">
            <li>
              <span className="text-cyan-400">about</span> - About me
            </li>
            <li>
              <span className="text-cyan-400">skills</span> - Technical skills
            </li>
            <li>
              <span className="text-cyan-400">projects</span> - Featured
              projects
            </li>
            <li>
              <span className="text-cyan-400">experience</span> - Work
              experience
            </li>
            <li>
              <span className="text-cyan-400">contact</span> - Contact
              information
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-yellow-400 font-semibold mb-2">
            Fun & Utilities
          </h4>
          <ul className="space-y-1">
            <li>
              <span className="text-cyan-400">joke</span> - Random DevOps joke
            </li>
            <li>
              <span className="text-cyan-400">weather</span> - Current weather
            </li>
            <li>
              <span className="text-cyan-400">date</span> - Current date and
              time
            </li>
            <li>
              <span className="text-cyan-400">whoami</span> - Current user
            </li>
            <li>
              <span className="text-cyan-400">clear</span> - Clear terminal
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Type any command to get started!
    </div>
  </div>
);

export const ClearCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-green-400 font-semibold">🧹 Terminal Cleared</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="text-gray-300 text-center py-4">
        Terminal history has been cleared.
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 Fresh start!</div>
  </div>
);

export const HistoryCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-orange-400 font-semibold">📜 Command History</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>1 help</div>
        <div>2 about</div>
        <div>3 skills</div>
        <div>4 docker ps</div>
        <div>5 kubectl get pods</div>
        <div>6 terraform plan</div>
        <div>7 top</div>
        <div>8 ping google.com</div>
        <div>9 joke</div>
        <div>10 weather</div>
        <div>11 history</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Use ↑↓ arrows to navigate history
    </div>
  </div>
);

export const DateCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-cyan-400 font-semibold">📅 Current Date & Time</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-lg text-gray-300 text-center py-2">
        {new Date().toLocaleString()}
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Time flies when you're coding!
    </div>
  </div>
);

export const WhoamiCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-purple-400 font-semibold">👤 Current User</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-gray-300 text-center py-2">
        devops-engineer
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 Welcome to the terminal!</div>
  </div>
);

export const PwdCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-green-400 font-semibold">📂 Current Directory</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-gray-300 text-center py-2">
        /home/devops-engineer/portfolio
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 You're in the right place!</div>
  </div>
);

export const LsCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-blue-400 font-semibold">📁 Directory Contents</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs text-gray-300 space-y-1">
        <div className="text-gray-400">total 12</div>
        <div className="text-blue-400">
          drwxr-xr-x 2 user user 4096 Sep 20 14:30{" "}
          <span className="text-blue-300">src/</span>
        </div>
        <div className="text-blue-400">
          drwxr-xr-x 2 user user 4096 Sep 20 14:30{" "}
          <span className="text-blue-300">public/</span>
        </div>
        <div className="text-green-400">
          -rw-r--r-- 1 user user 234 Sep 20 14:30{" "}
          <span className="text-green-300">package.json</span>
        </div>
        <div className="text-green-400">
          -rw-r--r-- 1 user user 1024 Sep 20 14:30{" "}
          <span className="text-green-300">README.md</span>
        </div>
        <div className="text-yellow-400">
          -rw-r--r-- 1 user user 512 Sep 20 14:30{" "}
          <span className="text-yellow-300">Dockerfile</span>
        </div>
        <div className="text-red-400">
          -rw-r--r-- 1 user user 128 Sep 20 14:30{" "}
          <span className="text-red-300">.gitignore</span>
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 Portfolio project files</div>
  </div>
);
