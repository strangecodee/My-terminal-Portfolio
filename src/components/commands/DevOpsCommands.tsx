import React from "react";
import {
  DockerPsCommand,
  DockerImagesCommand,
  DockerLogsCommand,
  DockerBuildCommand,
} from "../commands/DockerCommands";
import {
  KubectlGetPodsCommand,
  KubectlGetServicesCommand,
  KubectlGetDeploymentsCommand,
  KubectlDescribePodCommand,
  KubectlApplyCommand,
} from "../commands/KubernetesCommands";
import {
  AwsS3LsCommand,
  AwsEc2DescribeInstancesCommand,
  AwsLambdaListFunctionsCommand,
  AwsIamListUsersCommand,
  AwsCloudFormationListStacksCommand,
} from "../commands/AwsCommands";
import {
  TerraformPlanCommand,
  TerraformApplyCommand,
  TerraformDestroyCommand,
  TerraformStateListCommand,
  TerraformValidateCommand,
  TerraformShowConfigCommand,
} from "../commands/TerraformCommands";
import {
  JenkinsBuildCommand,
  JenkinsStatusCommand,
  JenkinsLogsCommand,
} from "../commands/JenkinsCommands";
import { asciiArt } from "../../data/mockData";


export const handleDockerCommand = (args: string[]): React.ReactNode => {
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
};

export const handleKubectlCommand = (args: string[]): React.ReactNode => {
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
              const podName = args[1] || "frontend-deployment-7d4b8c9f6-x8k2m";
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
        })()}
      </div>
    </div>
  );
};

export const handleAwsCommand = (args: string[]): React.ReactNode => {
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
                Available: s3 ls, ec2 describe-instances, lambda list-functions,
                iam list-users
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export const handleTerraformCommand = (args: string[]): React.ReactNode => {
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
                    Available: plan, apply, destroy, state list, validate, show,
                    version
                  </div>
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
};

export const handleJenkinsCommand = (args: string[]): React.ReactNode => {
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
};

export const handleGcloudCommand = (args: string[]): React.ReactNode => {
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
                    .replace("/", "");
                  const bucketContents = [
                    "index.html",
                    "config.yaml",
                    "scripts/deploy.sh",
                    "logs/app-2023-09-20.log",
                    "assets/logo.png",
                  ];
                  return (
                    <div className="space-y-2">
                      <div className="text-teal-400 font-semibold">
                        📁 Contents of {bucketPath}
                      </div>
                      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                        <div className="font-mono text-sm space-y-1 text-gray-300">
                          <div className="text-gray-400">
                            OBJECT_NAME SIZE UPDATED
                          </div>
                          {bucketContents.map((item, index) => (
                            <div key={index}>
                              {item.padEnd(25)} 1.2K 2023-09-20T14:30:15Z
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
                        📦 Google Cloud Storage Buckets
                      </div>
                      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                        <div className="font-mono text-sm space-y-1 text-gray-300">
                          <div>gs://devops-portfolio-assets/</div>
                          <div>gs://terraform-state-bucket/</div>
                          <div>gs://kubernetes-configs/</div>
                          <div>gs://ci-cd-artifacts/</div>
                        </div>
                      </div>
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
                        <div>
                          NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP
                          EXTERNAL_IP STATUS
                        </div>
                        <div>
                          web-server-01 us-central1-a n1-standard-1 10.128.0.10
                          35.192.45.123 RUNNING
                        </div>
                        <div>
                          api-gateway-01 us-central1-a n1-standard-2 10.128.0.11
                          35.192.45.124 RUNNING
                        </div>
                        <div>
                          database-server-01 us-central1-a n1-standard-4
                          10.128.0.12 35.192.45.125 RUNNING
                        </div>
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
                  <div className="text-blue-400">Google Cloud SDK 447.0.0</div>
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
};
