import React from "react";

export const HelpCommand: React.FC = () => {
  const commands = [
    {
      command: "about",
      description: "Display system information and personal profile",
      usage: "about",
    },
    {
      command: "skills",
      description: "Show detailed technical skills and proficiency levels",
      usage: "skills",
    },
    {
      command: "experience",
      description: "Display professional experience and achievements",
      usage: "experience",
    },
    {
      command: "certifications",
      description: "Show AWS and GCP certifications with details",
      usage: "certifications",
    },
    {
      command: "projects",
      description: "List all DevOps and cloud projects",
      usage: "projects",
    },
    {
      command: "project",
      description: "Show detailed information about a specific project",
      usage: "project <id|name>",
    },
    {
      command: "github-stats",
      description: "Display GitHub statistics and repository activity",
      usage: "github-stats",
    },
    {
      command: "contact",
      description: "Open interactive contact form",
      usage: "contact",
    },
    {
      command: "download",
      description: "Download resume with progress indicator",
      usage: "download resume",
    },
    {
      command: "theme",
      description: "Switch between light and dark themes",
      usage: "theme <light|dark>",
    },
    {
      command: "clear",
      description: "Clear the terminal screen",
      usage: "clear",
    },
    {
      command: "help",
      description: "Show this help message",
      usage: "help",
    },
  ];

  const devopsCommands = [
    {
      command: "docker ps",
      description: "Show running containers (simulated)",
    },
    {
      command: "kubectl get pods",
      description: "List Kubernetes pods (simulated)",
    },
    { command: "aws s3 ls", description: "List S3 buckets (simulated)" },
    {
      command: "terraform plan",
      description: "Show Terraform execution plan (simulated)",
    },
    {
      command: "jenkins build",
      description: "Trigger Jenkins build (simulated)",
    },
    { command: "docker", description: "Show Docker ASCII art" },
    { command: "kubernetes", description: "Show Kubernetes ASCII art" },
    { command: "aws", description: "Show AWS ASCII art" },
    { command: "terraform", description: "Show Terraform ASCII art" },
    { command: "jenkins", description: "Show Jenkins ASCII art" },
  ];

  const funCommands = [
    { command: "whoami", description: "Find out who you are" },
    { command: "pwd", description: "Print working directory" },
    { command: "ls -la", description: "List directory contents" },
    { command: "cat", description: "Display file contents" },
    { command: "date", description: "Display current date and time" },
    { command: "uname -a", description: "Display system information" },
    { command: "ps aux", description: "Display running processes" },
    { command: "fortune", description: "Display a random DevOps fortune" },
    { command: "cowsay hello", description: "Make a cow say something" },
  ];

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          📖 Available Commands - Anurag's DevOps Portfolio
        </h2>

        <div className="space-y-3">
          {commands.map((cmd, index) => (
            <div key={index} className="border-l-2 border-teal-400 pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-teal-400 font-bold min-w-0 sm:min-w-[140px]">
                  {cmd.usage}
                </code>
                <span className="text-gray-300 flex-1">{cmd.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-4">
          ⚙️ DevOps Commands & Tools
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {devopsCommands.map((cmd, index) => (
            <div key={index} className="flex items-center gap-3">
              <code className="text-teal-400 font-bold min-w-[120px] text-sm">
                {cmd.command}
              </code>
              <span className="text-gray-300 text-sm">{cmd.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-4">
          🎮 Fun Commands & Easter Eggs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {funCommands.map((cmd, index) => (
            <div key={index} className="flex items-center gap-3">
              <code className="text-teal-400 font-bold min-w-[100px] text-sm">
                {cmd.command}
              </code>
              <span className="text-gray-300 text-sm">{cmd.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          ⌨️ Keyboard Shortcuts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">↑ / ↓ Arrow Keys</span>
            <span className="text-gray-300">Navigate command history</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tab</span>
            <span className="text-gray-300">Autocomplete commands</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Ctrl + L</span>
            <span className="text-gray-300">
              Clear screen (same as 'clear')
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Ctrl + C</span>
            <span className="text-gray-300">Cancel current input</span>
          </div>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          💡 Quick Start Guide
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-teal-400">•</span>
            <span>
              Start with <code className="text-teal-400">about</code> to learn
              about Anurag's DevOps background
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">•</span>
            <span>
              Use <code className="text-teal-400">skills</code> to see technical
              expertise and proficiency levels
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">•</span>
            <span>
              Check <code className="text-teal-400">certifications</code> for
              AWS and GCP credentials
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">•</span>
            <span>
              Explore <code className="text-teal-400">projects</code> to see
              real DevOps implementations
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">•</span>
            <span>
              Try DevOps commands like{" "}
              <code className="text-teal-400">docker ps</code> or{" "}
              <code className="text-teal-400">kubectl get pods</code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">•</span>
            <span>
              Use <code className="text-teal-400">contact</code> to get in touch
              for job opportunities
            </span>
          </li>
        </ul>
      </div>

      <div className="text-gray-400">
        🚀 Ready to explore? This portfolio showcases Anurag's DevOps expertise
        and AWS/GCP cloud skills!
      </div>
    </div>
  );
};
