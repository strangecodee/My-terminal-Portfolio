export interface TerminalState {
  currentDirectory: string;
  commandHistory: string[];
  outputHistory: CommandOutput[];
  isProcessingCommand: boolean;
  theme: "light" | "dark";
  soundEnabled: boolean;
  currentHistoryIndex: number;
}

export interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: Date;
  executionTime?: number;
}

export interface CommandResult {
  success: boolean;
  output: React.ReactNode;
  executionTime: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  github?: string;
  demo?: string;
  imageUrl?: string;
  status: "completed" | "in-progress" | "planned";
  startDate: string;
  endDate?: string;
}

export interface GitHubStats {
  user: {
    name: string;
    bio: string;
    publicRepos: number;
    followers: number;
    following: number;
    createdAt: string;
  };
  repositories: {
    total: number;
    totalStars: number;
    totalForks: number;
    languages: Array<{
      name: string;
      percentage: number;
      color: string;
    }>;
    topRepos: Array<{
      name: string;
      description: string;
      stars: number;
      language: string;
    }>;
  };
  activity: Array<{
    type: string;
    repo: string;
    date: string;
  }>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SystemInfo {
  os: string;
  shell: string;
  user: string;
  hostname: string;
  uptime: string;
  skills: string[];
  experience: Array<{
    company: string;
    position: string;
    duration: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  contact: {
    email: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}
