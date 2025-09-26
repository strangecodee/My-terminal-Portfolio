import React from "react";
import { jenkinsData } from "../../data/devopsData";

export const JenkinsBuildCommand: React.FC<{ job?: string }> = ({
  job = "frontend-build",
}) => {
  const buildSteps = [
    "Started by user admin",
    "Running as SYSTEM",
    "Building in workspace /var/jenkins_home/workspace/frontend-build",
    "The recommended git tool is: NONE",
    "[frontend-build] $ /bin/sh -xe /tmp/jenkins123.sh",
    "+ echo Building frontend application...",
    "Building frontend application...",
    "+ npm ci",
    "npm WARN using --force Recommended protections disabled.",
    "added 1847 packages in 23s",
    "+ npm run build",
    "> frontend@1.0.0 build",
    "> react-scripts build",
    "Creating an optimized production build...",
    "Compiled successfully.",
    "File sizes after gzip:",
    "  41.2 kB  build/static/js/main.8f4c2d1a.js",
    "  1.78 kB  build/static/css/main.073c9b0a.css",
    "The build folder is ready to be deployed.",
    "+ npm run test:ci",
    "> frontend@1.0.0 test:ci",
    "> jest --coverage --watchAll=false",
    "PASS src/App.test.js",
    "PASS src/components/Header.test.js",
    "PASS src/utils/helpers.test.js",
    "Test Suites: 3 passed, 3 total",
    "Tests:       15 passed, 15 total",
    "Snapshots:   0 total",
    "Time:        2.456 s",
    "Coverage:    85.7%",
    "+ echo Build completed successfully!",
    "Build completed successfully!",
    "Finished: SUCCESS",
  ];

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-3">
        🔨 Jenkins Build: {job} #146
      </div>

      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-96 overflow-y-auto">
        {buildSteps.map((step, index) => (
          <div
            key={index}
            className={`font-mono text-xs mb-1 ${
              step.includes("SUCCESS") || step.includes("successfully")
                ? "text-green-400 font-semibold"
                : step.includes("PASS") || step.includes("passed")
                ? "text-green-400"
                : step.includes("WARN")
                ? "text-yellow-400"
                : step.includes("ERROR") || step.includes("FAIL")
                ? "text-red-400"
                : step.includes("Building") || step.includes("Running")
                ? "text-blue-400"
                : step.startsWith("+")
                ? "text-cyan-400"
                : step.includes("Coverage:")
                ? "text-purple-400"
                : "text-gray-300"
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700">
        <div className="flex justify-between items-center">
          <div className="text-green-400 font-semibold">
            ✅ Build #146 - SUCCESS
          </div>
          <div className="text-gray-400 text-sm">Duration: 2m 34s</div>
        </div>
        <div className="text-sm text-gray-300 mt-2">
          <div>Tests: 15 passed, 0 failed</div>
          <div>Coverage: 85.7%</div>
          <div>Artifacts: build.tar.gz (2.1 MB)</div>
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-sm">
        💡 Use <code className="text-teal-400">jenkins console {job} 146</code>{" "}
        to view full console output
      </div>
    </div>
  );
};

export const JenkinsStatusCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📊 Jenkins Jobs Status
      </div>

      <div className="space-y-2">
        {jenkinsData.jobs.map((job, index) => (
          <div
            key={index}
            className="bg-gray-800/30 p-3 rounded-lg border border-gray-700"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-400 font-semibold">{job.name}</span>
              <span
                className={`px-2 py-1 rounded-sm text-xs font-semibold ${
                  job.status === "SUCCESS"
                    ? "bg-green-500/20 text-green-400"
                    : job.status === "RUNNING"
                    ? "bg-blue-500/20 text-blue-400 animate-pulse"
                    : job.status === "FAILED"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {job.status === "RUNNING"
                  ? "🔄 RUNNING"
                  : job.status === "SUCCESS"
                  ? "✅ SUCCESS"
                  : job.status === "FAILED"
                  ? "❌ FAILED"
                  : job.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <span className="text-gray-400">Last Build:</span>{" "}
                <span className="text-yellow-400">{job.lastBuild}</span>
              </div>
              <div>
                <span className="text-gray-400">Duration:</span>{" "}
                <span className="text-cyan-400">{job.duration}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-400">Last Success:</span>{" "}
                <span className="text-green-400">{job.lastSuccess}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700">
        <div className="text-purple-400 font-semibold mb-2">
          📈 Jenkins System Info
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            Queue: <span className="text-yellow-400">2 jobs waiting</span>
          </div>
          <div>
            Executors: <span className="text-green-400">3/5 busy</span>
          </div>
          <div>
            Nodes: <span className="text-blue-400">3 online, 0 offline</span>
          </div>
          <div>
            Version: <span className="text-cyan-400">Jenkins 2.414.1</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">jenkins build &lt;job-name&gt;</code> to
        trigger a new build
      </div>
    </div>
  );
};

export const JenkinsLogsCommand: React.FC<{ build?: string }> = ({
  build = "frontend-build #146",
}) => {
  const recentLogs = [
    "2023-09-20 14:25:30 INFO  - Build started for frontend-build #146",
    "2023-09-20 14:25:31 INFO  - Checking out Git repository",
    "2023-09-20 14:25:35 INFO  - Git checkout completed: commit abc123def456",
    "2023-09-20 14:25:36 INFO  - Installing dependencies with npm ci",
    "2023-09-20 14:26:45 INFO  - Dependencies installed successfully",
    "2023-09-20 14:26:46 INFO  - Running build script",
    "2023-09-20 14:27:15 INFO  - Build script completed successfully",
    "2023-09-20 14:27:16 INFO  - Running test suite",
    "2023-09-20 14:27:45 INFO  - All tests passed (15/15)",
    "2023-09-20 14:27:46 INFO  - Generating coverage report",
    "2023-09-20 14:27:50 INFO  - Coverage: 85.7% (target: 80%)",
    "2023-09-20 14:27:51 INFO  - Archiving build artifacts",
    "2023-09-20 14:28:05 INFO  - Build completed successfully",
    "2023-09-20 14:28:05 INFO  - Build #146 finished with status: SUCCESS",
  ];

  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📋 Jenkins Build Logs: {build}
      </div>

      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
        {recentLogs.map((log, index) => (
          <div
            key={index}
            className={`font-mono text-xs mb-1 ${
              log.includes("ERROR")
                ? "text-red-400"
                : log.includes("WARN")
                ? "text-yellow-400"
                : log.includes("SUCCESS") ||
                  log.includes("successfully") ||
                  log.includes("passed")
                ? "text-green-400"
                : log.includes("INFO")
                ? "text-blue-400"
                : "text-gray-300"
            }`}
          >
            {log}
          </div>
        ))}
      </div>

      <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700">
        <div className="text-green-400 font-semibold mb-2">
          ✅ Build Summary
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            Status: <span className="text-green-400">SUCCESS</span>
          </div>
          <div>
            Duration: <span className="text-cyan-400">2m 34s</span>
          </div>
          <div>
            Tests: <span className="text-green-400">15 passed, 0 failed</span>
          </div>
          <div>
            Coverage: <span className="text-purple-400">85.7%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">jenkins logs {build} --follow</code> to
        follow logs in real-time
      </div>
    </div>
  );
};
