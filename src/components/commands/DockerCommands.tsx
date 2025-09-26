import React from "react";
import { dockerData } from "../../data/devopsData";

export const DockerPsCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-green-400 font-semibold">
        CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
      </div>
      {dockerData.containers.map((container, index) => (
        <div
          key={index}
          className="font-mono text-sm grid grid-cols-7 gap-2 text-gray-300"
        >
          <span className="text-blue-400">{container.id.substring(0, 12)}</span>
          <span className="text-yellow-400">{container.image}</span>
          <span className="text-gray-400 truncate" title={container.command}>
            "
            {container.command.length > 20
              ? container.command.substring(0, 20) + "..."
              : container.command}
            "
          </span>
          <span>{container.created}</span>
          <span
            className={
              container.status.includes("Up")
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {container.status}
          </span>
          <span className="text-purple-400">{container.ports}</span>
          <span className="text-cyan-400">{container.names}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">docker logs &lt;container&gt;</code> to
        view container logs
      </div>
    </div>
  );
};

export const DockerImagesCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-green-400 font-semibold">
        REPOSITORY TAG IMAGE ID CREATED SIZE
      </div>
      {dockerData.images.map((image, index) => (
        <div
          key={index}
          className="font-mono text-sm grid grid-cols-5 gap-4 text-gray-300"
        >
          <span className="text-blue-400">{image.repository}</span>
          <span className="text-yellow-400">{image.tag}</span>
          <span className="text-purple-400">
            {image.imageId.substring(0, 12)}
          </span>
          <span>{image.created}</span>
          <span className="text-cyan-400">{image.size}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">docker build -t &lt;name&gt; .</code> to
        build new images
      </div>
    </div>
  );
};

export const DockerLogsCommand: React.FC<{ container?: string }> = ({
  container = "web-server",
}) => {
  const logs = [
    `2023-09-20 14:30:15 [info] Starting nginx server...`,
    `2023-09-20 14:30:16 [info] Server listening on port 80`,
    `2023-09-20 14:30:17 [info] Worker processes started`,
    `2023-09-20 14:30:18 [access] 203.0.113.45 - GET /health - 200`,
    `2023-09-20 14:30:19 [access] 203.0.113.67 - GET /api/status - 200`,
    `2023-09-20 14:30:20 [info] Configuration reload completed`,
  ];

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-3">
        📋 Container logs for: {container}
      </div>
      {logs.map((log, index) => (
        <div
          key={index}
          className="font-mono text-sm text-gray-300 hover:bg-gray-800/30 p-1 rounded-sm"
        >
          {log}
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">docker logs -f &lt;container&gt;</code>{" "}
        to follow logs in real-time
      </div>
    </div>
  );
};

export const DockerBuildCommand: React.FC<{ image?: string }> = ({
  image = "my-app:latest",
}) => {
  const buildSteps = [
    "Sending build context to Docker daemon  2.048kB",
    "Step 1/8 : FROM node:16-alpine",
    " ---> 25c3f7d4e8a9",
    "Step 2/8 : WORKDIR /app",
    " ---> Running in 1a2b3c4d5e6f",
    "Removing intermediate container 1a2b3c4d5e6f",
    " ---> 6f5e4d3c2b1a",
    "Step 3/8 : COPY package*.json ./",
    " ---> 9b8c7d6e5f4a",
    "Step 4/8 : RUN npm ci --only=production",
    " ---> Running in 3c4d5e6f7a8b",
    "added 245 packages in 12.3s",
    "Removing intermediate container 3c4d5e6f7a8b",
    " ---> 2a1b9c8d7e6f",
    "Step 5/8 : COPY . .",
    " ---> 5f4e3d2c1b0a",
    "Step 6/8 : EXPOSE 3000",
    " ---> Running in 8e7d6c5b4a39",
    "Removing intermediate container 8e7d6c5b4a39",
    " ---> 1f0e9d8c7b6a",
    'Step 7/8 : CMD ["npm", "start"]',
    " ---> Running in 4a3b2c1d0e9f",
    "Removing intermediate container 4a3b2c1d0e9f",
    " ---> 7c6b5a4d3e2f",
    `Successfully built 7c6b5a4d3e2f`,
    `Successfully tagged ${image}`,
  ];

  return (
    <div className="space-y-1">
      <div className="text-teal-400 font-semibold mb-3">
        🔨 Building Docker image: {image}
      </div>
      {buildSteps.map((step, index) => (
        <div
          key={index}
          className={`font-mono text-sm ${
            step.includes("Step")
              ? "text-blue-400 font-semibold"
              : step.includes("Successfully")
              ? "text-green-400 font-semibold"
              : step.includes("Running in")
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        >
          {step}
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        ✅ Image built successfully! Use{" "}
        <code className="text-teal-400">docker run {image}</code> to start
        container
      </div>
    </div>
  );
};
