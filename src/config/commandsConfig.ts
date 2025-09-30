export interface CommandCategory {
  name: string;
  icon: string;
  commands: CommandInfo[];
}

export interface CommandInfo {
  command: string;
  description: string;
  example?: string;
}

export const commandCategories: CommandCategory[] = [
  {
    name: "🐳 DevOps Tools",
    icon: "🐳",
    commands: [
      { command: "docker ps", description: "List running containers" },
      { command: "docker images", description: "List Docker images" },
      { command: "kubectl get pods", description: "List Kubernetes pods" },
      { command: "aws s3 ls", description: "List S3 buckets" },
      { command: "terraform plan", description: "Show infrastructure changes" },
      { command: "jenkins status", description: "Show Jenkins jobs" },
      {
        command: "gcloud storage ls",
        description: "List Google Cloud Storage buckets",
      },
    ],
  },
  {
    name: "💻 System Monitoring",
    icon: "💻",
    commands: [
      { command: "top", description: "Process monitor" },
      { command: "ps aux", description: "List all processes" },
      { command: "df -h", description: "Disk usage" },
      { command: "free -m", description: "Memory usage" },
      { command: "netstat -tulpn", description: "Network connections" },
      { command: "uptime", description: "System uptime" },
    ],
  },
  {
    name: "🌐 Network Tools",
    icon: "🌐",
    commands: [
      { command: "ping <host>", description: "Test connectivity" },
      { command: "curl <url>", description: "HTTP requests" },
      { command: "nslookup <domain>", description: "DNS lookup" },
      { command: "traceroute <host>", description: "Network path" },
    ],
  },
  {
    name: "👨‍💻 Portfolio",
    icon: "👨‍💻",
    commands: [
      { command: "about", description: "About me" },
      { command: "skills", description: "Technical skills" },
      { command: "experience", description: "Work experience" },
      { command: "projects", description: "My projects" },
      { command: "certifications", description: "Certifications" },
      { command: "contact", description: "Contact information" },
    ],
  },
  {
    name: "🛠️ Basic Unix",
    icon: "🛠️",
    commands: [
      { command: "ls", description: "List directory contents" },
      { command: "pwd", description: "Print working directory" },
      { command: "whoami", description: "Print current user" },
      { command: "date", description: "Print current date" },
      { command: "uname", description: "Print system information" },
      { command: "tail", description: "Output the last part of files" },
      { command: "grep", description: "Search for patterns in files" },
    ],
  },
  {
    name: "🎉 Fun Commands",
    icon: "🎉",
    commands: [
      { command: "fortune", description: "Print a random fortune" },
      {
        command: "cowsay <message>",
        description: "Display a message in a speech bubble",
      },
    ],
  },
];

export const proTips = [
  "Use ↑↓ arrow keys to navigate command history",
  "Press Tab for command autocompletion",
  "Type 'clear' to clear the terminal",
  "All commands show realistic DevOps outputs and scenarios",
];
