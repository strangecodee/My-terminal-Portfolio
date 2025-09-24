import React from "react";
import type { CommandResult } from "../types/terminal";

// Import DevOps command components
import {
  DockerPsCommand,
  DockerImagesCommand,
  DockerLogsCommand,
  DockerBuildCommand,
} from "./commands/DockerCommands";
import {
  KubectlGetPodsCommand,
  KubectlGetServicesCommand,
  KubectlGetDeploymentsCommand,
  KubectlDescribePodCommand,
  KubectlApplyCommand,
} from "./commands/KubernetesCommands";
import {
  AwsS3LsCommand,
  AwsEc2DescribeInstancesCommand,
  AwsLambdaListFunctionsCommand,
  AwsIamListUsersCommand,
  AwsCloudFormationListStacksCommand,
} from "./commands/AwsCommands";
import {
  TerraformPlanCommand,
  TerraformApplyCommand,
  TerraformDestroyCommand,
  TerraformStateListCommand,
  TerraformValidateCommand,
  TerraformShowConfigCommand,
} from "./commands/TerraformCommands";
import {
  TopCommand,
  PsAuxCommand,
  DfCommand,
  FreeCommand,
  NetstatCommand,
  TailLogsCommand,
} from "./commands/SystemCommands";
import {
  PingCommand,
  CurlCommand,
  WgetCommand,
  NslookupCommand,
  TracerouteCommand,
} from "./commands/NetworkCommands";
import {
  JenkinsBuildCommand,
  JenkinsStatusCommand,
  JenkinsLogsCommand,
} from "./commands/JenkinsCommands";

// Import existing portfolio data
import { portfolioData, asciiArt } from "../data/mockData";

export class CommandProcessor {
  async processCommand(command: string): Promise<CommandResult> {
    const startTime = Date.now();
    const [cmd, ...args] = command.toLowerCase().split(" ");

    try {
      let output: React.ReactNode = null;

      switch (cmd) {
        // DevOps - Docker Commands
        case "docker":
          output = this.handleDockerCommand(args);
          break;

        // DevOps - Kubernetes Commands
        case "kubectl":
          output = this.handleKubectlCommand(args);
          break;

        // DevOps - AWS Commands
        case "aws":
          output = this.handleAwsCommand(args);
          break;

        // DevOps - Terraform Commands
        case "terraform":
          output = this.handleTerraformCommand(args);
          break;

        // DevOps - Jenkins Commands
        case "jenkins":
          output = this.handleJenkinsCommand(args);
          break;

        // System Monitoring Commands
        case "top":
          output = <TopCommand />;
          break;
        case "htop":
          output = (
            <div className="space-y-3">
              <div className="text-teal-400 font-semibold">
                📊 Enhanced Process Viewer (htop)
              </div>
              <div className="text-yellow-400">
                htop is not installed. Showing top instead:
              </div>
              <TopCommand />
            </div>
          );
          break;
        case "ps":
          if (args.includes("aux")) {
            output = <PsAuxCommand />;
          } else {
            output = <PsAuxCommand />;
          }
          break;
        case "df":
          output = <DfCommand />;
          break;
        case "free":
          output = <FreeCommand />;
          break;
        case "netstat":
          output = <NetstatCommand />;
          break;

        // Network Commands
        case "ping":
          output = <PingCommand host={args[0]} />;
          break;
        case "curl":
          output = <CurlCommand url={args[0]} />;
          break;
        case "wget":
          output = <WgetCommand url={args[0]} />;
          break;
        case "nslookup":
          output = <NslookupCommand domain={args[0]} />;
          break;
        case "traceroute":
          output = <TracerouteCommand host={args[0]} />;
          break;

        // Log Commands
        case "tail":
          if (args.includes("-f")) {
            const logFile = args[args.length - 1];
            output = <TailLogsCommand logFile={logFile} />;
          } else {
            output = <TailLogsCommand logFile={args[args.length - 1]} />;
          }
          break;
        case "grep":
          output = this.handleGrepCommand(args);
          break;

        // Basic Unix Commands
        case "ls":
          output = this.handleLsCommand(args);
          break;
        case "pwd":
          output = (
            <div className="text-cyan-400">/home/anurag/devops-portfolio</div>
          );
          break;
        case "whoami":
          output = <div className="text-green-400">anurag</div>;
          break;
        case "date":
          output = (
            <div className="text-yellow-400">{new Date().toString()}</div>
          );
          break;
        case "uname":
          if (args.includes("-a")) {
            output = (
              <div className="text-blue-400">
                Linux devops-server 5.15.0-78-generic #85-Ubuntu SMP Fri Jul 7
                15:25:09 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux
              </div>
            );
          } else {
            output = <div className="text-blue-400">Linux</div>;
          }
          break;

        // Portfolio Commands (existing)
        case "welcome":
          output = this.getWelcomeOutput();
          break;
        case "help":
          output = this.getHelpOutput();
          break;
        case "about":
          output = this.getAboutOutput();
          break;
        case "skills":
          output = this.getSkillsOutput();
          break;
        case "experience":
          output = this.getExperienceOutput();
          break;
        case "projects":
          output = this.getProjectsOutput();
          break;
        case "project":
          output = this.getProjectDetails(args[0]);
          break;
        case "certifications":
          output = this.getCertificationsOutput();
          break;
        case "contact":
          output = this.getContactOutput();
          break;
        case "github-stats":
          output = this.getGithubStatsOutput();
          break;
        case "download":
          output = this.getDownloadOutput();
          break;

        // Fun Commands
        case "fortune":
          output = this.getFortuneOutput();
          break;
        case "cowsay":
          output = this.getCowsayOutput(args.join(" "));
          break;

        default:
          output = (
            <div className="text-red-400">
              <div className="flex items-center gap-2 mb-2">
                <span>❌</span>
                <span>
                  Command not found:{" "}
                  <code className="text-yellow-400">{cmd}</code>
                </span>
              </div>
              <div className="text-gray-400 text-sm">
                💡 Type <code className="text-teal-400">'help'</code> to see
                available commands
              </div>
            </div>
          );
      }

      const executionTime = Date.now() - startTime;
      return { output, executionTime, success: true };
    } catch (error) {
      const executionTime = Date.now() - startTime;
      return {
        output: (
          <div className="text-red-400">
            <div className="flex items-center gap-2">
              <span>💥</span>
              <span>
                Error executing command:{" "}
                {error instanceof Error ? error.message : "Unknown error"}
              </span>
            </div>
          </div>
        ),
        executionTime,
        success: false,
      };
    }
  }

  private handleDockerCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    switch (subCommand) {
      case "ps": {
        return <DockerPsCommand />;
      }
      case "images": {
        return <DockerImagesCommand />;
      }
      case "logs": {
        return <DockerLogsCommand container={args[1]} />;
      }
      case "build": {
        const imageTag = args.find((arg) => arg.startsWith("-t"))
          ? args[args.indexOf("-t") + 1]
          : "my-app:latest";
        return <DockerBuildCommand image={imageTag} />;
      }
      case "exec":
        return (
          <div className="space-y-2">
            <div className="text-teal-400 font-semibold">🔧 Docker Exec</div>
            <div className="text-yellow-400">
              Entering container: {args[2] || "web-server"}
            </div>
            <div className="text-gray-400">
              root@{(args[2] || "web-server").substring(0, 12)}:/app#{" "}
            </div>
            <div className="text-gray-500 text-sm">
              💡 Interactive shell session started
            </div>
          </div>
        );
      case "run":
        return (
          <div className="space-y-2">
            <div className="text-teal-400 font-semibold">🚀 Docker Run</div>
            <div className="text-green-400">
              Container started: {Math.random().toString(36).substring(2, 15)}
            </div>
            <div className="text-gray-500 text-sm">
              💡 Use <code className="text-teal-400">docker ps</code> to see
              running containers
            </div>
          </div>
        );
      case "version":
        return (
          <div className="space-y-1 text-sm">
            <div className="text-blue-400">
              Docker version 24.0.5, build ced0996
            </div>
            <div className="text-gray-300">API version: 1.43</div>
            <div className="text-gray-300">Go version: go1.20.6</div>
            <div className="text-gray-300">Built: Fri Jul 21 20:35:18 2023</div>
          </div>
        );
      default:
        return (
          <div className="text-red-400">
            Unknown docker command: {subCommand}
            <div className="text-gray-400 text-sm mt-1">
              Available: ps, images, logs, build, exec, run, version
            </div>
          </div>
        );
    }
  }

  private handleKubectlCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    switch (subCommand) {
      case "get":
        const resource = args[1];
        switch (resource) {
          case "pods":
            return <KubectlGetPodsCommand />;
          case "services":
          case "svc":
            return <KubectlGetServicesCommand />;
          case "deployments":
          case "deploy":
            return <KubectlGetDeploymentsCommand />;
          default:
            return (
              <div className="text-red-400">Unknown resource: {resource}</div>
            );
        }
      case "describe":
        const describeResource = args[1];
        const resourceName = args[2];
        if (describeResource === "pod") {
          return <KubectlDescribePodCommand podName={resourceName} />;
        }
        return (
          <div className="text-yellow-400">
            Describe {describeResource} {resourceName} - Feature coming soon
          </div>
        );
      case "apply":
        return <KubectlApplyCommand manifest={args[2]} />;
      case "logs":
        const podName = args[1] || "frontend-deployment-7d4b8c9f6-x8k2m";
        return (
          <div className="space-y-2">
            <div className="text-teal-400 font-semibold">
              📋 Pod Logs: {podName}
            </div>
            <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
              <div className="font-mono text-xs space-y-1 text-gray-300">
                <div>
                  2023-09-20 14:30:15 [INFO] Application started on port 80
                </div>
                <div>
                  2023-09-20 14:30:16 [INFO] Health check endpoint ready
                </div>
                <div>
                  2023-09-20 14:30:17 [INFO] Serving static files from
                  /usr/share/nginx/html
                </div>
              </div>
            </div>
          </div>
        );
      case "version":
        return (
          <div className="space-y-1 text-sm">
            <div className="text-blue-400">Client Version: v1.28.2</div>
            <div className="text-green-400">Server Version: v1.27.3</div>
          </div>
        );
      default:
        return (
          <div className="text-red-400">
            Unknown kubectl command: {subCommand}
            <div className="text-gray-400 text-sm mt-1">
              Available: get, describe, apply, logs, version
            </div>
          </div>
        );
    }
  }

  private handleAwsCommand(args: string[]): React.ReactNode {
    const service = args[0];
    const subCommand = args[1];

    switch (service) {
      case "s3":
        if (subCommand === "ls") {
          return <AwsS3LsCommand />;
        }
        break;
      case "ec2":
        if (subCommand === "describe-instances") {
          return <AwsEc2DescribeInstancesCommand />;
        }
        break;
      case "lambda":
        if (subCommand === "list-functions") {
          return <AwsLambdaListFunctionsCommand />;
        }
        break;
      case "iam":
        if (subCommand === "list-users") {
          return <AwsIamListUsersCommand />;
        }
        break;
      case "cloudformation":
        if (subCommand === "list-stacks") {
          return <AwsCloudFormationListStacksCommand />;
        }
        break;
      case "--version":
        return (
          <div className="space-y-1 text-sm">
            <div className="text-blue-400">aws-cli/2.13.25 Python/3.11.5</div>
            <div className="text-gray-300">
              Linux/5.15.0-78-generic exe/x86_64.ubuntu.22
            </div>
          </div>
        );
    }

    return (
      <div className="text-red-400">
        Unknown AWS command: {service} {subCommand}
        <div className="text-gray-400 text-sm mt-1">
          Available: s3 ls, ec2 describe-instances, lambda list-functions, iam
          list-users
        </div>
      </div>
    );
  }

  private handleTerraformCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    switch (subCommand) {
      case "plan":
        return <TerraformPlanCommand />;
      case "apply":
        return <TerraformApplyCommand />;
      case "destroy":
        return <TerraformDestroyCommand />;
      case "state":
        if (args[1] === "list") {
          return <TerraformStateListCommand />;
        }
        break;
      case "validate":
        return <TerraformValidateCommand />;
      case "show":
        return <TerraformShowConfigCommand />;
      case "version":
        return (
          <div className="space-y-1 text-sm">
            <div className="text-blue-400">Terraform v1.5.7</div>
            <div className="text-gray-300">on linux_amd64</div>
          </div>
        );
    }

    return (
      <div className="text-red-400">
        Unknown terraform command: {subCommand}
        <div className="text-gray-400 text-sm mt-1">
          Available: plan, apply, destroy, state list, validate, show, version
        </div>
      </div>
    );
  }

  private handleJenkinsCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    switch (subCommand) {
      case "build":
        return <JenkinsBuildCommand job={args[1]} />;
      case "status":
        return <JenkinsStatusCommand />;
      case "logs":
        return <JenkinsLogsCommand build={args[1]} />;
      default:
        return (
          <div className="text-red-400">
            Unknown jenkins command: {subCommand}
            <div className="text-gray-400 text-sm mt-1">
              Available: build, status, logs
            </div>
          </div>
        );
    }
  }

  private handleGrepCommand(args: string[]): React.ReactNode {
    const pattern = args[0];
    const file = args[1] || "/var/log/app.log";

    const sampleMatches = [
      `2023-09-20 14:30:15 ERROR Database connection failed`,
      `2023-09-20 14:31:22 ERROR Authentication failed for user: test`,
      `2023-09-20 14:32:45 ERROR Timeout waiting for response`,
    ];

    return (
      <div className="space-y-2">
        <div className="text-teal-400 font-semibold">
          🔍 Searching for "{pattern}" in {file}
        </div>
        <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
          {sampleMatches.map((match, index) => (
            <div key={index} className="font-mono text-xs text-red-400 mb-1">
              {match}
            </div>
          ))}
        </div>
        <div className="text-gray-500 text-sm">
          💡 Found 3 matches. Use{" "}
          <code className="text-teal-400">
            grep -n {pattern} {file}
          </code>{" "}
          to show line numbers
        </div>
      </div>
    );
  }

  private handleLsCommand(args: string[]): React.ReactNode {
    const files = [
      {
        name: "docker-compose.yml",
        type: "file",
        size: "2.1K",
        date: "Sep 18 14:30",
        permissions: "-rw-r--r--",
      },
      {
        name: "Dockerfile",
        type: "file",
        size: "856B",
        date: "Sep 17 09:15",
        permissions: "-rw-r--r--",
      },
      {
        name: "terraform/",
        type: "dir",
        size: "4.0K",
        date: "Sep 19 11:20",
        permissions: "drwxr-xr-x",
      },
      {
        name: "kubernetes/",
        type: "dir",
        size: "4.0K",
        date: "Sep 18 16:45",
        permissions: "drwxr-xr-x",
      },
      {
        name: "scripts/",
        type: "dir",
        size: "4.0K",
        date: "Sep 16 13:30",
        permissions: "drwxr-xr-x",
      },
      {
        name: "README.md",
        type: "file",
        size: "3.2K",
        date: "Sep 20 10:15",
        permissions: "-rw-r--r--",
      },
      {
        name: ".env",
        type: "file",
        size: "245B",
        date: "Sep 19 08:45",
        permissions: "-rw-------",
      },
      {
        name: "package.json",
        type: "file",
        size: "1.8K",
        date: "Sep 18 12:00",
        permissions: "-rw-r--r--",
      },
    ];

    if (args.includes("-la") || args.includes("-l")) {
      return (
        <div className="space-y-1">
          <div className="text-green-400 font-semibold text-sm mb-2">
            total 32
          </div>
          {files.map((file, index) => (
            <div
              key={index}
              className="font-mono text-sm grid grid-cols-6 gap-2 text-gray-300"
            >
              <span
                className={
                  file.type === "dir" ? "text-blue-400" : "text-gray-300"
                }
              >
                {file.permissions}
              </span>
              <span>1</span>
              <span className="text-yellow-400">anurag</span>
              <span className="text-cyan-400">{file.size}</span>
              <span>{file.date}</span>
              <span
                className={
                  file.type === "dir"
                    ? "text-blue-400 font-semibold"
                    : "text-white"
                }
              >
                {file.name}
              </span>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {files.map((file, index) => (
            <span
              key={index}
              className={`font-mono text-sm ${
                file.type === "dir"
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              }`}
            >
              {file.name}
            </span>
          ))}
        </div>
      );
    }
  }

  // Existing portfolio methods (keeping them as they were)
  private getHelpOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <div className="text-teal-400 font-semibold text-lg">
          📚 Available Commands
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DevOps Commands */}
          <div className="space-y-3">
            <div className="text-blue-400 font-semibold">🐳 DevOps Tools</div>
            <div className="space-y-1 text-sm">
              <div>
                <code className="text-teal-400">docker ps</code> - List running
                containers
              </div>
              <div>
                <code className="text-teal-400">docker images</code> - List
                Docker images
              </div>
              <div>
                <code className="text-teal-400">kubectl get pods</code> - List
                Kubernetes pods
              </div>
              <div>
                <code className="text-teal-400">aws s3 ls</code> - List S3
                buckets
              </div>
              <div>
                <code className="text-teal-400">terraform plan</code> - Show
                infrastructure changes
              </div>
              <div>
                <code className="text-teal-400">jenkins status</code> - Show
                Jenkins jobs
              </div>
            </div>
          </div>

          {/* System Commands */}
          <div className="space-y-3">
            <div className="text-purple-400 font-semibold">
              💻 System Monitoring
            </div>
            <div className="space-y-1 text-sm">
              <div>
                <code className="text-teal-400">top</code> - Process monitor
              </div>
              <div>
                <code className="text-teal-400">ps aux</code> - List all
                processes
              </div>
              <div>
                <code className="text-teal-400">df -h</code> - Disk usage
              </div>
              <div>
                <code className="text-teal-400">free -m</code> - Memory usage
              </div>
              <div>
                <code className="text-teal-400">netstat -tulpn</code> - Network
                connections
              </div>
            </div>
          </div>

          {/* Network Commands */}
          <div className="space-y-3">
            <div className="text-green-400 font-semibold">🌐 Network Tools</div>
            <div className="space-y-1 text-sm">
              <div>
                <code className="text-teal-400">ping &lt;host&gt;</code> - Test
                connectivity
              </div>
              <div>
                <code className="text-teal-400">curl &lt;url&gt;</code> - HTTP
                requests
              </div>
              <div>
                <code className="text-teal-400">nslookup &lt;domain&gt;</code> -
                DNS lookup
              </div>
              <div>
                <code className="text-teal-400">traceroute &lt;host&gt;</code> -
                Network path
              </div>
            </div>
          </div>

          {/* Portfolio Commands */}
          <div className="space-y-3">
            <div className="text-orange-400 font-semibold">👨‍💻 Portfolio</div>
            <div className="space-y-1 text-sm">
              <div>
                <code className="text-teal-400">about</code> - About me
              </div>
              <div>
                <code className="text-teal-400">skills</code> - Technical skills
              </div>
              <div>
                <code className="text-teal-400">experience</code> - Work
                experience
              </div>
              <div>
                <code className="text-teal-400">projects</code> - My projects
              </div>
              <div>
                <code className="text-teal-400">certifications</code> -
                Certifications
              </div>
              <div>
                <code className="text-teal-400">contact</code> - Contact
                information
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <div className="text-yellow-400 font-semibold mb-2">💡 Pro Tips:</div>
          <div className="space-y-1 text-sm text-gray-300">
            <div>
              • Use <kbd className="px-1 bg-gray-700 rounded">↑↓</kbd> arrow
              keys to navigate command history
            </div>
            <div>
              • Press <kbd className="px-1 bg-gray-700 rounded">Tab</kbd> for
              command autocompletion
            </div>
            <div>
              • Type <kbd className="px-1 bg-gray-700 rounded">clear</kbd> to
              clear the terminal
            </div>
            <div>
              • All commands show realistic DevOps outputs and scenarios
            </div>
          </div>
        </div>
      </div>
    );
  }

  private getAboutOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <pre className="text-teal-400 text-xs leading-tight">
          {asciiArt.about}
        </pre>
        <div className="space-y-3">
          <div className="text-blue-400 font-semibold text-lg">
            About Anurag Maurya
          </div>
          <div className="text-gray-300 leading-relaxed">
            {portfolioData.about.description}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <div className="text-yellow-400 font-semibold">
                🎯 Specializations
              </div>
              <ul className="space-y-1 text-sm">
                {portfolioData.about.specializations.map((spec, index) => (
                  <li key={index} className="text-gray-300">
                    • {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-green-400 font-semibold">
                🏆 Achievements
              </div>
              <ul className="space-y-1 text-sm">
                {portfolioData.about.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private getSkillsOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <div className="text-blue-400 font-semibold text-lg">
          🛠️ Technical Skills
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="space-y-3">
              <div className="text-yellow-400 font-semibold capitalize">
                {category === "cloudPlatforms"
                  ? "☁️ Cloud Platforms"
                  : category === "containerization"
                  ? "🐳 Containerization"
                  : category === "cicd"
                  ? "🔄 CI/CD"
                  : category === "monitoring"
                  ? "📊 Monitoring"
                  : category === "iac"
                  ? "🏗️ Infrastructure as Code"
                  : category === "programming"
                  ? "💻 Programming"
                  : `📋 ${category}`}
              </div>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-teal-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-teal-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private getExperienceOutput(): React.ReactNode {
    return (
      <div className="space-y-6">
        <div className="text-blue-400 font-semibold text-lg">
          💼 Professional Experience
        </div>
        {portfolioData.experience.map((job, index) => (
          <div
            key={index}
            className="border-l-4 border-teal-400 pl-4 space-y-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="text-green-400 font-semibold">{job.position}</div>
              <div className="text-yellow-400 text-sm">{job.duration}</div>
            </div>
            <div className="text-purple-400">{job.company}</div>
            <div className="text-gray-300 text-sm">{job.description}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-700 text-cyan-400 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  private getProjectsOutput(): React.ReactNode {
    return (
      <div className="space-y-6">
        <div className="text-blue-400 font-semibold text-lg">
          🚀 Featured Projects
        </div>
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="text-green-400 font-semibold">{project.name}</div>
              <div className="text-yellow-400 text-sm">{project.status}</div>
            </div>
            <div className="text-gray-300 text-sm">{project.description}</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-700 text-cyan-400 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  className="text-blue-400 hover:text-blue-300"
                >
                  📂 GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-green-400 hover:text-green-300"
                >
                  🌐 Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
        <div className="text-gray-500 text-sm">
          💡 Use <code className="text-teal-400">project &lt;name&gt;</code> for
          detailed project information
        </div>
      </div>
    );
  }

  private getProjectDetails(projectName?: string): React.ReactNode {
    if (!projectName) {
      return (
        <div className="text-yellow-400">
          Please specify a project name. Available projects:
          <div className="mt-2 space-y-1">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="text-cyan-400">
                • {project.name.toLowerCase().replace(/\s+/g, "-")}
              </div>
            ))}
          </div>
        </div>
      );
    }

    const project = portfolioData.projects.find(
      (p) =>
        p.name.toLowerCase().replace(/\s+/g, "-") === projectName.toLowerCase()
    );

    if (!project) {
      return (
        <div className="text-red-400">
          Project "{projectName}" not found. Use{" "}
          <code className="text-teal-400">projects</code> to see all projects.
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="text-blue-400 font-semibold text-lg">
          🚀 {project.name}
        </div>
        <div className="text-gray-300">{project.description}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-yellow-400 font-semibold mb-2">
              🛠️ Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-700 text-cyan-400 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-green-400 font-semibold mb-2">📊 Status</div>
            <div className="text-gray-300">{project.status}</div>
          </div>
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              className="text-blue-400 hover:text-blue-300"
            >
              📂 View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="text-green-400 hover:text-green-300"
            >
              🌐 Live Demo
            </a>
          )}
        </div>
      </div>
    );
  }

  private getCertificationsOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <div className="text-blue-400 font-semibold text-lg">
          🏆 Certifications
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 space-y-2"
            >
              <div className="text-green-400 font-semibold">{cert.name}</div>
              <div className="text-purple-400">{cert.issuer}</div>
              <div className="text-yellow-400 text-sm">{cert.date}</div>
              <div className="text-gray-300 text-sm">{cert.description}</div>
              {cert.credentialId && (
                <div className="text-cyan-400 text-xs">
                  ID: {cert.credentialId}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  private getContactOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <div className="text-blue-400 font-semibold text-lg">
          📞 Contact Information
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(portfolioData.contact).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-3">
              <span className="text-yellow-400 font-semibold capitalize">
                {key === "email"
                  ? "📧"
                  : key === "phone"
                  ? "📱"
                  : key === "linkedin"
                  ? "💼"
                  : key === "github"
                  ? "🐙"
                  : key === "location"
                  ? "📍"
                  : "🔗"}
              </span>
              <span className="text-gray-300">
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </span>
              <span className="text-cyan-400">{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private getGithubStatsOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <div className="text-blue-400 font-semibold text-lg">
          📊 GitHub Statistics
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(portfolioData.githubStats).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-800/30 p-3 rounded-lg border border-gray-700 text-center"
            >
              <div className="text-teal-400 text-2xl font-bold">{value}</div>
              <div className="text-gray-400 text-sm capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private getDownloadOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <div className="text-blue-400 font-semibold text-lg">
          📥 Download Resume
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
          <div className="text-green-400 mb-2">
            Resume available in multiple formats:
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-red-400">📄</span>
              <a
                href="/resume.pdf"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Download PDF Resume
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-400">📝</span>
              <a
                href="/resume.docx"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Download Word Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private getFortuneOutput(): React.ReactNode {
    const fortunes = [
      "The best way to predict the future is to implement it. - DevOps Philosophy",
      "Infrastructure as Code: Because clicking buttons is so last century.",
      "There are only two hard things in DevOps: Cache invalidation, naming things, and off-by-one errors.",
      "A day without automation is like a day without sunshine... dark and full of manual tasks.",
      "In DevOps we trust, all others must bring monitoring.",
      "Continuous Integration is a journey, not a destination... but the destination has really good coffee.",
    ];

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    return (
      <div className="space-y-2">
        <div className="text-yellow-400 font-semibold">🔮 DevOps Fortune</div>
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
          <div className="text-gray-300 italic">"{randomFortune}"</div>
        </div>
      </div>
    );
  }

  private getCowsayOutput(message: string): React.ReactNode {
    const text = message || "Hello from the DevOps world!";
    const border = "_".repeat(text.length + 2);

    return (
      <div className="space-y-2">
        <div className="text-yellow-400 font-semibold">🐄 Cowsay</div>
        <pre className="text-green-400 font-mono text-xs">
          {` ${border}
< ${text} >
 ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
        </pre>
      </div>
    );
  }

  private getWelcomeOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <pre className="text-teal-400 text-xs leading-tight">
          {asciiArt.welcome}
        </pre>
        <div className="space-y-3">
          <div className="text-blue-400 font-semibold text-lg">
            👋 Welcome to My DevOps Portfolio!
          </div>
          <div className="text-gray-300 leading-relaxed">
            Welcome to my interactive DevOps portfolio! This terminal interface
            showcases my expertise in modern DevOps practices, cloud
            infrastructure, and automation tools.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <div className="text-yellow-400 font-semibold">
                🚀 Get Started
              </div>
              <ul className="space-y-1 text-sm">
                <li className="text-gray-300">
                  • Type <code className="text-teal-400">help</code> to see all
                  available commands
                </li>
                <li className="text-gray-300">
                  • Type <code className="text-teal-400">about</code> to learn
                  more about me
                </li>
                <li className="text-gray-300">
                  • Type <code className="text-teal-400">skills</code> to see my
                  technical expertise
                </li>
                <li className="text-gray-300">
                  • Type <code className="text-teal-400">projects</code> to
                  explore my work
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-green-400 font-semibold">
                🛠️ Try DevOps Commands
              </div>
              <ul className="space-y-1 text-sm">
                <li className="text-gray-300">
                  • <code className="text-teal-400">docker ps</code> - View
                  running containers
                </li>
                <li className="text-gray-300">
                  • <code className="text-teal-400">kubectl get pods</code> -
                  List Kubernetes resources
                </li>
                <li className="text-gray-400">
                  • <code className="text-teal-400">terraform plan</code> -
                  Infrastructure planning
                </li>
                <li className="text-gray-300">
                  • <code className="text-teal-400">aws s3 ls</code> - Cloud
                  resource management
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="text-purple-400 font-semibold mb-2">
              💡 Pro Tips:
            </div>
            <div className="space-y-1 text-sm text-gray-300">
              <div>
                • Use <kbd className="px-1 bg-gray-700 rounded">Tab</kbd> for
                command autocompletion
              </div>
              <div>
                • Use <kbd className="px-1 bg-gray-700 rounded">↑↓</kbd> arrow
                keys to navigate history
              </div>
              <div>
                • All commands simulate real DevOps scenarios and outputs
              </div>
              <div>
                • This portfolio demonstrates practical DevOps knowledge and
                tools
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
