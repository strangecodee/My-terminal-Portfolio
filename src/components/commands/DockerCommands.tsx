import React from "react";

const processes = [
  {
    id: "7d4b8c9f6x8k",
    image: "nginx:latest",
    command: "nginx -g 'daemon of…",
    created: "2 hours ago",
    status: "Up 2 hours",
    ports: "0.0.0.0:80->80/tcp",
    names: "web-server",
  },
  {
    id: "3f2a1b5c7d9e",
    image: "postgres:13",
    command: "docker-entrypoint.s…",
    created: "2 hours ago",
    status: "Up 2 hours",
    ports: "5432/tcp",
    names: "database",
  },
  {
    id: "8e5d4c2b1a9f",
    image: "redis:alpine",
    command: "docker-entrypoint.s…",
    created: "2 hours ago",
    status: "Up 2 hours",
    ports: "6379/tcp",
    names: "cache",
  },
];

const images = [
  {
    repository: "nginx",
    tag: "latest",
    imageId: "7d4b8c9f6x8k",
    created: "2 weeks ago",
    size: "142MB",
  },
  {
    repository: "postgres",
    tag: "13",
    imageId: "3f2a1b5c7d9e",
    created: "3 weeks ago",
    size: "314MB",
  },
  {
    repository: "redis",
    tag: "alpine",
    imageId: "8e5d4c2b1a9f",
    created: "4 weeks ago",
    size: "32MB",
  },
  {
    repository: "node",
    tag: "18-alpine",
    imageId: "5c6b7a8d9e0f",
    created: "1 month ago",
    size: "118MB",
  },
];

export const DockerPsCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-teal-400 font-semibold">🐳 Running Containers</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div className="text-green-400 grid grid-cols-7 gap-1 mb-2 font-semibold">
          <span>CONTAINER ID</span> <span>IMAGE</span> <span>COMMAND</span>{" "}
          <span>CREATED</span> <span>STATUS</span> <span>PORTS</span>{" "}
          <span>NAMES</span>
        </div>
        <div>
          {processes.map((p) => (
            <div
              key={p.id}
              className="hover:bg-gray-800/30 p-1 rounded grid grid-cols-7 gap-1"
            >
              <span className="text-yellow-400">
                {p.id.slice(0, 12).padEnd(15)}
              </span>
              <span className="text-green-400">{p.image.padEnd(20)}</span>
              <span className="text-purple-400">{p.command.padEnd(25)}</span>
              <span>{p.created.padEnd(15)}</span>
              <span className="text-cyan-400">{p.status.padEnd(15)}</span>
              <span className="text-blue-400">{p.ports.padEnd(20)}</span>
              <span className="text-orange-400">{p.names}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 {3} containers running</div>
  </div>
);

export const DockerImagesCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-teal-600 font-semibold">📦 Docker Images</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div className="text-green-600 grid grid-cols-5 gap-1 mb-2 font-semibold">
          <span>REPOSITORY</span> <span>TAG</span> <span>IMAGE ID</span>{" "}
          <span>CREATED</span> <span>SIZE</span>
        </div>
        <div>
          {images.map((img) => (
            <div
              key={img.imageId}
              className="hover:bg-gray-800/30 p-1 rounded grid grid-cols-5 gap-1"
            >
              <span className="text-green-500">
                {img.repository.padEnd(15)}
              </span>
              <span className="text-yellow-400">{img.tag.padEnd(10)}</span>
              <span className="text-purple-400">
                {img.imageId.slice(0, 12).padEnd(15)}
              </span>
              <span>{img.created.padEnd(15)}</span>
              <span className="text-cyan-400">{img.size.padEnd(10)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 {4} images available</div>
  </div>
);

export const DockerLogsCommand: React.FC<{ container?: string }> = ({
  container,
}) => (
  <div className="space-y-2">
    <div className="text-teal-400 font-semibold">
      📋 Container Logs: {container || "web-server"}
    </div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>2023-09-20 14:30:15 [INFO] Starting nginx 1.25.2</div>
        <div>2023-09-20 14:30:16 [INFO] Listening on port 80</div>
        <div>2023-09-20 14:30:17 [INFO] Configuration loaded</div>
        <div>2023-09-20 14:30:18 [INFO] Ready to serve requests</div>
        <div>2023-09-20 14:35:22 [INFO] GET /health 200 2ms</div>
        <div>2023-09-20 14:40:15 [INFO] GET /api/users 200 45ms</div>
      </div>
    </div>
  </div>
);

export const DockerBuildCommand: React.FC<{ image: string }> = ({ image }) => (
  <div className="space-y-2">
    <div className="text-teal-400 font-semibold">🔨 Building Docker Image</div>
    <div className="text-green-400">Building image: {image}</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>Sending build context to Docker daemon 2.048kB</div>
        <div>Step 1/6 : FROM node:18-alpine</div>
        <div> --{">"} 5c6b7a8d9e0f</div>
        <div>Step 2/6 : WORKDIR /app</div>
        <div> --{">"} Using cache</div>
        <div>Step 3/6 : COPY package*.json ./</div>
        <div> --{">"} 1a2b3c4d5e6f</div>
        <div>Step 4/6 : RUN npm ci --only=production</div>
        <div> --{">"} Running in 7g8h9i0j1k2l</div>
        <div>Successfully built 9m0n1o2p3q4r</div>
        <div>Successfully tagged {image}</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Image built successfully in 45.2s
    </div>
  </div>
);
