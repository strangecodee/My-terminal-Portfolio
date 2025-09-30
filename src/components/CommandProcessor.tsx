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
  AwsEc2DescribeInstancesCommand,
  AwsLambdaListFunctionsCommand,
  AwsIamListUsersCommand,
  AwsCloudFormationListStacksCommand,
  AwsS3LsCommand,
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
  UptimeCommand,
} from "./commands/SystemCommands";
import { SystemMonitorCommand } from "./commands/SystemMonitorCommand";
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
import {
  JokeCommand,
  WeatherCommand,
  AsciiArtCommand,
  MatrixCommand,
} from "./commands/FunCommands";
import {
  HelpCommand,
  ClearCommand,
  HistoryCommand,
} from "./commands/BasicCommands";

// Import existing portfolio data
import { asciiArt } from "../data/mockData";
import { portfolioData } from "../data/mockData";

export class CommandProcessor {
  async processCommand(
    command: string,
    _theme: "dark" | "light" = "dark"
  ): Promise<CommandResult> {
    // Theme parameter available for future theming enhancements
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

        // Git Commands
        case "git":
          output = this.handleGitCommand(args);
          break;

        // Google Cloud Commands
        case "gcloud":
          output = this.handleGcloudCommand(args);
          break;

        // Java Commands
        case "java":
          output = this.handleJavaCommand(args);
          break;

        // Python Commands
        case "python":
        case "python3":
          output = this.handlePythonCommand(args);
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
          output = <PsAuxCommand />;
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
        case "uptime":
          output = <UptimeCommand />;
          break;
        case "system":
        case "monitor":
          output = <SystemMonitorCommand />;
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
          output = <TailLogsCommand logFile={args[args.length - 1]} />;
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
          output = <div className="text-green-400">Anurag</div>;
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

        // Portfolio Commands
        case "welcome":
          output = this.getWelcomeOutput();
          break;
        case "help":
          output = <HelpCommand />;
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
        case "fun":
          output = this.getFunCommandsOutput();
          break;
        case "fortune":
          output = this.getFortuneOutput();
          break;
        case "joke":
          output = <JokeCommand />;
          break;
        case "weather":
          output = <WeatherCommand location={args[0]} />;
          break;
        case "ascii":
          output = <AsciiArtCommand />;
          break;
        case "matrix":
          output = <MatrixCommand />;
          break;
        case "cowsay":
          output = this.getCowsayOutput(args.join(" "));
          break;

        // Basic Commands
        case "clear":
          output = <ClearCommand />;
          break;
        case "history":
          output = <HistoryCommand />;
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

    return (
      <div className="space-y-3">
        <pre className="text-blue-400 text-xs leading-tight">
          {asciiArt.docker}
        </pre>
        <div>
          {(() => {
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
                    <div className="text-teal-400 font-semibold">
                      🔧 Docker Exec
                    </div>
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
                    <div className="text-teal-400 font-semibold">
                      🚀 Docker Run
                    </div>
                    <div className="text-green-400">
                      Container started:{" "}
                      {Math.random().toString(36).substring(2, 15)}
                    </div>
                    <div className="text-gray-500 text-sm">
                      💡 Use <code className="text-teal-400">docker ps</code> to
                      see running containers
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
                    <div className="text-gray-300">
                      Built: Fri Jul 21 20:35:18 2023
                    </div>
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
          })()}
        </div>
      </div>
    );
  }

  private handleKubectlCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    return (
      <div className="space-y-3">
        <pre className="text-blue-400 text-xs leading-tight">
          {asciiArt.kubernetes}
        </pre>
        <div>
          {(() => {
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
                      <div className="text-red-400">
                        Unknown resource: {resource}
                      </div>
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
                    Describe {describeResource} {resourceName} - Feature coming
                    soon
                  </div>
                );
              case "apply":
                return <KubectlApplyCommand manifest={args[2]} />;
              case "logs":
                const podName =
                  args[1] || "frontend-deployment-7d4b8c9f6-x8k2m";
                return (
                  <div className="space-y-2">
                    <div className="text-teal-400 font-semibold">
                      📋 Pod Logs: {podName}
                    </div>
                    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                      <div className="font-mono text-xs space-y-1 text-gray-300">
                        <div>
                          2023-09-20 14:30:15 [INFO] Application started on port
                          80
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
                    <div className="text-green-400">
                      Server Version: v1.27.3
                    </div>
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
          })()}
        </div>
      </div>
    );
  }

  private handleAwsCommand(args: string[]): React.ReactNode {
    const service = args[0];
    const subCommand = args[1];
    return (
      <div className="space-y-3">
        <pre className="text-orange-400 text-xs leading-tight">
          {asciiArt.aws}
        </pre>
        <div>
          {(() => {
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
                    <div className="text-blue-400">
                      aws-cli/2.13.25 Python/3.11.5
                    </div>
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
                  Available: s3 ls, ec2 describe-instances, lambda
                  list-functions, iam list-users
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    );
  }

  private handleTerraformCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    return (
      <div className="space-y-3">
        <pre className="text-blue-400 text-xs leading-tight">
          {asciiArt.terraform}
        </pre>
        <div>
          {(() => {
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
                return (
                  <div className="text-red-400">
                    Unknown terraform state command: {args[1]}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: list
                    </div>
                  </div>
                );
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
              default:
                return (
                  <div className="text-red-400">
                    Unknown terraform command: {subCommand}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: plan, apply, destroy, state list, validate,
                      show, version
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
  }

  private handleJenkinsCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];
    return (
      <div className="space-y-3">
        <pre className="text-purple-400 text-xs leading-tight">
          {asciiArt.jenkins}
        </pre>
        <div>
          {(() => {
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
          })()}
        </div>
      </div>
    );
  }

  private handleJavaCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    return (
      <div className="space-y-3">
        <div>
          {(() => {
            switch (subCommand) {
              case "-version":
                return (
                  <div className="space-y-1 text-sm">
                    <div className="text-blue-400">
                      java version "17.0.8" 2023-07-18 LTS
                    </div>
                    <div className="text-gray-300">
                      Java(TM) SE Runtime Environment (build 17.0.8+9-LTS-211)
                    </div>
                    <div className="text-gray-300">
                      Java HotSpot(TM) 64-Bit Server VM (build 17.0.8+9-LTS-211,
                      mixed mode, sharing)
                    </div>
                  </div>
                );
              default:
                return (
                  <div className="text-red-400">
                    Unknown java command: {subCommand}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: -version
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
  }

  private handleGitCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];

    return (
      <div className="space-y-3">
        <pre className="text-green-400 text-xs leading-tight">{`git`}</pre>
        <div>
          {(() => {
            switch (subCommand) {
              case "status":
                return (
                  <div className="space-y-2 text-sm">
                    <div className="text-green-400 font-semibold">
                      On branch main
                    </div>
                    <div className="text-gray-300">
                      Your branch is up to date with 'origin/main'.
                    </div>
                    <div className="text-green-400">
                      nothing to commit, working tree clean
                    </div>
                  </div>
                );
              case "checkout":
                const branch = args[1] || "main";
                return (
                  <div className="space-y-1 text-sm">
                    <div className="text-blue-400">
                      Switched to branch '{branch}'
                    </div>
                    <div className="text-gray-300">
                      Your branch is up to date with 'origin/{branch}'.
                    </div>
                  </div>
                );
              case "log":
                return (
                  <div className="font-mono p-4 rounded-lg border border-gray-700">
                    <div className="text-yellow-400">
                      commit abc123def456 (HEAD → main, origin/main)
                    </div>
                    <div className="text-gray-300">
                      Author: Anurag Maurya &lt;anurag@example.com&gt;
                    </div>
                    <div className="text-gray-300">
                      Date: Mon Sep 18 14:30:00 2023 +0530
                    </div>
                    <div className="text-gray-400">
                      {" "}
                      Update portfolio with latest projects
                    </div>
                  </div>
                );
              case "branch":
                return (
                  <div className="space-y-1 text-sm">
                    <div className="text-green-400">* main</div>
                    <div className="text-gray-300"> develop</div>
                    <div className="text-gray-300"> feature/docker</div>
                  </div>
                );
              default:
                return (
                  <div className="text-red-400">
                    Unknown git command: {subCommand}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: status, checkout, log, branch
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
  }

  gCloudBuckets = [
    {
      name: "devops-portfolio-assets",
      creationDate: "2022-05-10",
      region: "US-CENTRAL1",
    },
    {
      name: "terraform-state-bucket",
      creationDate: "2021-11-22",
      region: "US",
    },
    {
      name: "kubernetes-configs",
      creationDate: "2023-01-15",
      region: "US-EAST1",
    },
    {
      name: "ci-cd-artifacts",
      creationDate: "2022-08-30",
      region: "US-WEST1",
    },
  ];

  computeEngineInstances = [
    {
      name: "web-server-01",
      zone: "us-central1-a",
      machineType: "n1-standard-1",
      internalIP: "10.128.0.10",
      externalIP: "35.192.45.123",
      status: "RUNNING",
    },
    {
      name: "api-gateway-01",
      zone: "us-central1-a",
      machineType: "n1-standard-1",
      internalIP: "10.128.0.11",
      externalIP: "35.192.45.124",
      status: "RUNNING",
    },
    {
      name: "web-server-01",
      zone: "us-central1-a",
      machineType: "n1-standard-1",
      internalIP: "10.128.0.12",
      externalIP: "35.192.45.125",
      status: "RUNNING",
    },
  ];

  private handleGcloudCommand(args: string[]): React.ReactNode {
    const service = args[0];
    const subCommand = args[1];

    return (
      <div className="space-y-3">
        <pre className="text-blue-400 text-xs leading-tight">
          {asciiArt.gcloud || "gcloud"}
        </pre>
        <div>
          {(() => {
            switch (service) {
              case "storage":
                if (subCommand === "ls") {
                  const bucketPath = args[2];
                  if (bucketPath && bucketPath.startsWith("gs://")) {
                    // List contents of specific bucket
                    const bucketName = bucketPath
                      .replace("gs://", "")
                      .replace("/", "")
                      .trim();
                    const bucketExits = this.gCloudBuckets.some(
                      (b) => b.name === bucketName
                    );
                    if (!bucketExits) {
                      return (
                        <div className="text-red-400 font-mono text-sm">
                          ❌ ERROR: (gcloud.storage.ls) Bucket not found:{" "}
                          {bucketName}
                          <div className="text-gray-500 mt-1">
                            💡 Use{" "}
                            <code className="text-teal-400">
                              gcloud storage ls
                            </code>{" "}
                            to see available buckets.
                          </div>
                        </div>
                      );
                    }
                    const bucketContentsMap: Record<string, any[]> = {
                      "devops-portfolio-assets": [
                        {
                          file: "resume.pdf",
                          size: "95K",
                          updated: "2023-08-10",
                        },
                        {
                          file: "logo.png",
                          size: "20K",
                          updated: "2023-09-11",
                        },
                        {
                          file: "project-screenshots/homepage.png",
                          size: "340K",
                          updated: "2023-09-11",
                        },
                        {
                          file: "css/styles.css",
                          size: "2.5K",
                          updated: "2023-09-11",
                        },
                      ],
                      "terraform-state-bucket": [
                        {
                          file: "main.tf",
                          size: "3.2K",
                          updated: "2023-09-05",
                        },
                        {
                          file: "backend.tf",
                          size: "2.0K",
                          updated: "2023-09-04",
                        },
                        {
                          file: "terraform.tfstate",
                          size: "6.8K",
                          updated: "2023-09-06",
                        },
                        {
                          file: "terraform.tfvars",
                          size: "1.5K",
                          updated: "2023-09-06",
                        },
                      ],
                      "kubernetes-configs": [
                        {
                          file: "deployment.yaml",
                          size: "2.8K",
                          updated: "2023-10-01",
                        },
                        {
                          file: "service.yaml",
                          size: "1.7K",
                          updated: "2023-10-01",
                        },
                        {
                          file: "ingress.yaml",
                          size: "3.0K",
                          updated: "2023-10-01",
                        },
                        {
                          file: "namespace.yaml",
                          size: "1.2K",
                          updated: "2023-10-01",
                        },
                      ],
                      "ci-cd-artifacts": [
                        {
                          file: "build.log",
                          size: "12K",
                          updated: "2023-09-29",
                        },
                        {
                          file: "app.jar",
                          size: "45MB",
                          updated: "2023-09-29",
                        },
                        {
                          file: "Dockerfile",
                          size: "800B",
                          updated: "2023-09-28",
                        },
                        {
                          file: "jenkinsfile",
                          size: "2.1K",
                          updated: "2023-09-27",
                        },
                      ],
                    };

                    const bucketContents = bucketContentsMap[bucketName] || [];
                    return (
                      <div className="space-y-2">
                        <div className="text-teal-400 font-semibold">
                          📁 Contents of {bucketPath}
                        </div>
                        <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 ">
                          <div className="font-mono text-sm space-y-1 text-gray-300">
                            <div className="text-green-600 grid grid-cols-3">
                              <span>OBJECT_NAME</span> <span>SIZE</span>
                              <span>UPDATED</span>
                            </div>
                            {bucketContents.map((item, index) => (
                              <div className="grid grid-cols-3" key={index}>
                                <span>{item.file}</span>
                                <span>{item.size}</span>
                                <span>{item.updated}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-gray-500 text-sm">
                          💡 Found {bucketContents.length} objects in bucket "
                          {bucketName}"
                        </div>
                      </div>
                    );
                  } else {
                    // List all buckets
                    return (
                      <div className="space-y-2">
                        <div className="text-teal-400 font-semibold">
                          ☁️ Google Cloud Storage Buckets
                        </div>
                        {this.gCloudBuckets.map((bucket, index) => (
                          <div
                            key={index}
                            className="font-mono text-sm text-gray-300 hover:bg-gray-800/30 p-2 rounded grid grid-cols-6 gap-4"
                          >
                            <div className="cols-span-4">
                              <span className="text-blue-400">🪣 </span>
                              <span className="text-cyan-400">
                                {bucket.name}
                              </span>
                            </div>
                            <span className="text-gray-400 col-start-5">
                              {bucket.creationDate}
                            </span>
                            <span className="text-yellow-400 col-start-6">
                              {bucket.region}
                            </span>
                          </div>
                        ))}
                        <div className="text-gray-500 text-sm">
                          💡 Use{" "}
                          <code className="text-teal-400">
                            gcloud storage ls gs://bucket-name
                          </code>{" "}
                          to list specific bucket contents
                        </div>
                      </div>
                    );
                  }
                }
                return (
                  <div className="text-red-400">
                    Unknown storage command: {subCommand}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: ls
                    </div>
                  </div>
                );
              case "compute":
                if (subCommand === "instances" && args[2] === "list") {
                  return (
                    <div className="space-y-2">
                      <div className="text-teal-400 font-semibold">
                        🖥️ Compute Engine Instances
                      </div>
                      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                        <div className="font-mono text-xs space-y-1 text-gray-300">
                          <div className="grid grid-cols-7 space-y-2 mb-2 text-green-600">
                            <span>NAME</span> <span>ZONE</span>{" "}
                            <span>MACHINE_TYPE</span> <span>INTERNAL_IP</span>
                            <span>EXTERNAL_IP</span> <span>STATUS</span>
                          </div>
                          {this.computeEngineInstances.map((c, idx) => (
                            <div className="grid grid-cols-7" key={idx}>
                              <span>{c.name}</span>
                              <span>{c.zone}</span>
                              <span>{c.machineType}</span>
                              <span>{c.internalIP}</span>
                              <span>{c.externalIP}</span>
                              <span>{c.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="text-red-400">
                    Unknown compute command: {subCommand} {args[2]}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: instances list
                    </div>
                  </div>
                );
              case "projects":
                if (subCommand === "list") {
                  return (
                    <div className="space-y-2">
                      <div className="text-teal-400 font-semibold">
                        📋 Google Cloud Projects
                      </div>
                      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                        <div className="font-mono text-sm space-y-1 text-gray-300">
                          <div>PROJECT_ID: devops-portfolio-project</div>
                          <div>NAME: DevOps Portfolio Project</div>
                          <div>PROJECT_NUMBER: 123456789012</div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="text-red-400">
                    Unknown projects command: {subCommand}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: list
                    </div>
                  </div>
                );
              case "--version":
                return (
                  <div className="space-y-1 text-sm">
                    <div className="text-blue-400">
                      Google Cloud SDK 447.0.0
                    </div>
                    <div className="text-gray-300">bq 2.0.96</div>
                    <div className="text-gray-300">core 2023.09.22</div>
                    <div className="text-gray-300">gsutil 5.27</div>
                  </div>
                );
              default:
                return (
                  <div className="text-red-400">
                    Unknown gcloud command: {service} {subCommand}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: storage ls, compute instances list, projects
                      list, --version
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
  }

  private handlePythonCommand(args: string[]): React.ReactNode {
    const subCommand = args[0];
    return (
      <div className="space-y-3">
        <div>
          {(() => {
            switch (subCommand) {
              case "--version":
                return (
                  <div className="space-y-1 text-sm">
                    <div className="text-blue-400">Python 3.11.5</div>
                    <div className="text-gray-300">[GCC 9.4.0] on linux</div>
                    <div className="text-gray-300">
                      Type "help", "copyright", "credits" or "license" for more
                      information.
                    </div>
                  </div>
                );
              default:
                return (
                  <div className="text-red-400">
                    Unknown python command: {subCommand}
                    <div className="text-gray-400 text-sm mt-1">
                      Available: --version
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
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
                  className="px-2 py-1 bg-gray-700 text-cyan-400 rounded-sm text-xs"
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
                  className="px-2 py-1 bg-gray-700 text-cyan-400 rounded-sm text-xs"
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
                  className="px-2 py-1 bg-gray-700 text-cyan-400 rounded-sm text-xs"
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

  private getFunCommandsOutput(): React.ReactNode {
    return (
      <div className="space-y-4">
        <div className="text-purple-400 font-semibold text-lg">
          🎉 Fun Commands
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg border border-purple-700 space-y-3">
          <div className="text-yellow-400">
            Try these entertaining commands:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="space-y-1">
              <div>
                <code className="text-teal-400">joke</code> - Get a DevOps joke
                😂
              </div>
              <div>
                <code className="text-teal-400">fortune</code> - Inspirational
                quote 💭
              </div>
              <div>
                <code className="text-teal-400">weather</code> - Check the
                weather 🌤️
              </div>
            </div>
            <div className="space-y-1">
              <div>
                <code className="text-teal-400">ascii</code> - ASCII art 🎨
              </div>
              <div>
                <code className="text-teal-400">matrix</code> - Matrix mode 🖥️
              </div>
              <div>
                <code className="text-teal-400">cowsay &lt;message&gt;</code> -
                Cow says moo 🐄
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-sm mt-2">
            💡 Type any of these for a break from serious DevOps work!
          </div>
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
                • Use <kbd className="px-1 bg-gray-700 rounded-sm">Tab</kbd> for
                command autocompletion
              </div>
              <div>
                • Use <kbd className="px-1 bg-gray-700 rounded-sm">↑↓</kbd>{" "}
                arrow keys to navigate history
              </div>
              <div>
                • All commands show realistic DevOps outputs and scenarios
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
