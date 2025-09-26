import React from "react";
import {
  systemData,
  dockerData,
  kubernetesData,
  awsData,
} from "../../data/devopsData";

export const SystemMonitorCommand: React.FC = () => {
  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded-sm">
        <h2 className="text-xl font-bold text-teal-400 mb-3">
          📊 System Monitoring Dashboard
        </h2>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 p-3 rounded-sm text-center">
            <div className="text-2xl font-bold text-blue-400">
              {systemData.processes.length}
            </div>
            <div className="text-sm text-gray-400">Active Processes</div>
          </div>
          <div className="bg-gray-800 p-3 rounded-sm text-center">
            <div className="text-2xl font-bold text-green-400">
              {systemData.memoryUsage.used}MB
            </div>
            <div className="text-sm text-gray-400">Memory Used</div>
          </div>
          <div className="bg-gray-800 p-3 rounded-sm text-center">
            <div className="text-2xl font-bold text-orange-400">
              {systemData.diskUsage.reduce((acc, disk) => {
                const used = parseInt(disk.usePercent.replace("%", ""));
                return acc + used;
              }, 0) / systemData.diskUsage.length}
              %
            </div>
            <div className="text-sm text-gray-400">Avg Disk Usage</div>
          </div>
        </div>

        {/* Process List */}
        <div className="border border-green-400 p-4 rounded-sm mb-4">
          <h3 className="text-lg font-bold text-teal-400 mb-3">
            🔄 Top Processes
          </h3>
          <div className="bg-gray-900 p-3 rounded-sm font-mono text-sm">
            <div className="grid grid-cols-6 gap-2 text-gray-400 mb-2 pb-1 border-b border-gray-700">
              <span>PID</span>
              <span>USER</span>
              <span>%CPU</span>
              <span>%MEM</span>
              <span>COMMAND</span>
              <span>STATUS</span>
            </div>
            {systemData.processes.map((process, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-2 text-gray-300 mb-1"
              >
                <span className="text-blue-400">{process.pid}</span>
                <span className="text-yellow-400">{process.user}</span>
                <span className="text-green-400">{process.cpu}</span>
                <span className="text-purple-400">{process.mem}</span>
                <span className="text-cyan-400 truncate">
                  {process.command}
                </span>
                <span className="text-gray-400">{process.stat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Memory Details */}
        <div className="border border-green-400 p-4 rounded-sm mb-4">
          <h3 className="text-lg font-bold text-teal-400 mb-3">
            🧠 Memory Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-lg font-bold text-blue-400">
                {systemData.memoryUsage.total}MB
              </div>
              <div className="text-sm text-gray-400">Total</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-lg font-bold text-red-400">
                {systemData.memoryUsage.used}MB
              </div>
              <div className="text-sm text-gray-400">Used</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-lg font-bold text-green-400">
                {systemData.memoryUsage.free}MB
              </div>
              <div className="text-sm text-gray-400">Free</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-lg font-bold text-yellow-400">
                {systemData.memoryUsage.available}MB
              </div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
          </div>
        </div>

        {/* Disk Usage */}
        <div className="border border-green-400 p-4 rounded-sm mb-4">
          <h3 className="text-lg font-bold text-teal-400 mb-3">
            💾 Disk Usage
          </h3>
          <div className="space-y-3">
            {systemData.diskUsage.map((disk, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-semibold">
                    {disk.filesystem}
                  </span>
                  <span className="text-gray-400 text-sm">
                    Mounted on: {disk.mountedOn}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: disk.usePercent,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-300">
                    {disk.used}/{disk.size} ({disk.usePercent})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Container Status */}
        <div className="border border-green-400 p-4 rounded-sm mb-4">
          <h3 className="text-lg font-bold text-teal-400 mb-3">
            🐳 Container Health
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded-sm">
              <h4 className="text-blue-400 font-semibold mb-2">
                Docker Images ({dockerData.images.length})
              </h4>
              <div className="space-y-1 text-sm">
                {dockerData.images.map((image, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-300"
                  >
                    <span>
                      {image.repository}:{image.tag}
                    </span>
                    <span className="text-gray-400">{image.size}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm">
              <h4 className="text-green-400 font-semibold mb-2">
                Running Containers (
                {
                  dockerData.containers.filter((c) => c.status.includes("Up"))
                    .length
                }
                )
              </h4>
              <div className="space-y-1 text-sm">
                {dockerData.containers
                  .filter((c) => c.status.includes("Up"))
                  .map((container, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-gray-300"
                    >
                      <span>{container.names}</span>
                      <span className="text-green-400">{container.ports}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kubernetes Status */}
        <div className="border border-green-400 p-4 rounded-sm mb-4">
          <h3 className="text-lg font-bold text-teal-400 mb-3">
            ☸️ Kubernetes Cluster Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-2xl font-bold text-green-400">
                {
                  kubernetesData.pods.filter((p) => p.status === "Running")
                    .length
                }
              </div>
              <div className="text-sm text-gray-400">Running Pods</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-2xl font-bold text-blue-400">
                {kubernetesData.services.length}
              </div>
              <div className="text-sm text-gray-400">Services</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-2xl font-bold text-purple-400">
                {kubernetesData.deployments.length}
              </div>
              <div className="text-sm text-gray-400">Deployments</div>
            </div>
          </div>
        </div>

        {/* AWS Resources */}
        <div className="border border-green-400 p-4 rounded-sm">
          <h3 className="text-lg font-bold text-teal-400 mb-3">
            ☁️ AWS Resource Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-2xl font-bold text-orange-400">
                {
                  awsData.ec2Instances.filter((i) => i.state === "running")
                    .length
                }
              </div>
              <div className="text-sm text-gray-400">Running EC2</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-2xl font-bold text-purple-400">
                {awsData.s3Buckets.length}
              </div>
              <div className="text-sm text-gray-400">S3 Buckets</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-sm text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {awsData.lambdaFunctions.length}
              </div>
              <div className="text-sm text-gray-400">Lambda Functions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
