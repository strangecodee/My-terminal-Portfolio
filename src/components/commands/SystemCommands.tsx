import React from "react";
import { systemData, networkData, logSamples } from "../../data/devopsData";

export const TopCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📊 System Processes (top)
      </div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
        <div className="text-sm text-gray-300 mb-3">
          <div>
            Tasks: 156 total, 2 running, 154 sleeping, 0 stopped, 0 zombie
          </div>
          <div>
            %Cpu(s): 12.5 us, 3.2 sy, 0.0 ni, 83.8 id, 0.3 wa, 0.0 hi, 0.2 si,
            0.0 st
          </div>
          <div>
            MiB Mem: 16384.0 total, 8192.0 free, 6144.0 used, 2048.0 buff/cache
          </div>
          <div>
            MiB Swap: 2048.0 total, 2048.0 free, 0.0 used. 7680.0 avail Mem
          </div>
        </div>
        <div className="text-green-400 font-semibold text-xs mb-2">
          PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND
        </div>
        {systemData.processes.map((process, index) => (
          <div
            key={index}
            className="font-mono text-xs grid grid-cols-11 gap-1 text-gray-300 hover:bg-gray-800/30 p-1"
          >
            <span className="text-blue-400">{process.pid}</span>
            <span className="text-yellow-400">{process.user}</span>
            <span>20</span>
            <span>0</span>
            <span className="text-purple-400">{process.vsz}</span>
            <span className="text-cyan-400">{process.rss}</span>
            <span>1024</span>
            <span
              className={
                process.stat === "R" ? "text-green-400" : "text-gray-400"
              }
            >
              {process.stat}
            </span>
            <span
              className={
                parseFloat(process.cpu) > 10 ? "text-red-400" : "text-green-400"
              }
            >
              {process.cpu}
            </span>
            <span
              className={
                parseFloat(process.mem) > 5
                  ? "text-orange-400"
                  : "text-gray-400"
              }
            >
              {process.mem}
            </span>
            <span
              className="text-gray-300 truncate col-span-1"
              title={process.command}
            >
              {process.command}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 Press 'q' to quit, 'k' to kill process, 'r' to renice. Use{" "}
        <code className="text-teal-400">htop</code> for enhanced view
      </div>
    </div>
  );
};

export const PsAuxCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📋 Process List (ps aux)
      </div>
      <div className="text-green-400 font-semibold text-xs mb-2">
        USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
      </div>
      {systemData.processes.map((process, index) => (
        <div
          key={index}
          className="font-mono text-xs grid grid-cols-10 gap-2 text-gray-300 hover:bg-gray-800/30 p-1 rounded"
        >
          <span className="text-yellow-400">{process.user}</span>
          <span className="text-blue-400">{process.pid}</span>
          <span
            className={
              parseFloat(process.cpu) > 10 ? "text-red-400" : "text-green-400"
            }
          >
            {process.cpu}
          </span>
          <span
            className={
              parseFloat(process.mem) > 5 ? "text-orange-400" : "text-gray-400"
            }
          >
            {process.mem}
          </span>
          <span className="text-purple-400">{process.vsz}</span>
          <span className="text-cyan-400">{process.rss}</span>
          <span className="text-gray-400">{process.tty}</span>
          <span
            className={
              process.stat === "R" ? "text-green-400" : "text-gray-400"
            }
          >
            {process.stat}
          </span>
          <span>{process.start}</span>
          <span className="text-gray-300 truncate" title={process.command}>
            {process.command}
          </span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">ps aux | grep &lt;process&gt;</code> to
        filter processes
      </div>
    </div>
  );
};

export const DfCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        💾 Disk Usage (df -h)
      </div>
      <div className="text-green-400 font-semibold text-sm mb-2">
        Filesystem Size Used Avail Use% Mounted on
      </div>
      {systemData.diskUsage.map((disk, index) => (
        <div
          key={index}
          className="font-mono text-sm grid grid-cols-6 gap-4 text-gray-300 hover:bg-gray-800/30 p-2 rounded"
        >
          <span className="text-blue-400">{disk.filesystem}</span>
          <span className="text-cyan-400">{disk.size}</span>
          <span className="text-yellow-400">{disk.used}</span>
          <span className="text-green-400">{disk.avail}</span>
          <span
            className={
              parseInt(disk.usePercent) > 80
                ? "text-red-400"
                : parseInt(disk.usePercent) > 60
                ? "text-orange-400"
                : "text-green-400"
            }
          >
            {disk.usePercent}
          </span>
          <span className="text-purple-400">{disk.mountedOn}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        ⚠️ Monitor disk usage regularly. Use{" "}
        <code className="text-teal-400">du -sh /*</code> to find large
        directories
      </div>
    </div>
  );
};

export const FreeCommand: React.FC = () => {
  const mem = systemData.memoryUsage;
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        🧠 Memory Usage (free -m)
      </div>
      <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
        <div className="text-green-400 font-semibold text-sm mb-2">
          total used free shared buff/cache available
        </div>
        <div className="font-mono text-sm grid grid-cols-7 gap-4 text-gray-300">
          <span className="text-yellow-400">Mem:</span>
          <span className="text-cyan-400">{mem.total}</span>
          <span className="text-red-400">{mem.used}</span>
          <span className="text-green-400">{mem.free}</span>
          <span className="text-purple-400">{mem.shared}</span>
          <span className="text-blue-400">{mem.cached}</span>
          <span className="text-green-400">{mem.available}</span>
        </div>
        <div className="font-mono text-sm grid grid-cols-7 gap-4 text-gray-300 mt-1">
          <span className="text-yellow-400">Swap:</span>
          <span className="text-cyan-400">2048</span>
          <span className="text-red-400">0</span>
          <span className="text-green-400">2048</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 Memory usage:{" "}
        {((parseInt(mem.used) / parseInt(mem.total)) * 100).toFixed(1)}% used.
        Use <code className="text-teal-400">htop</code> for detailed process
        memory usage
      </div>
    </div>
  );
};

export const NetstatCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        🌐 Network Connections (netstat -tulpn)
      </div>
      <div className="text-green-400 font-semibold text-xs mb-2">
        Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name
      </div>
      {networkData.connections.map((conn, index) => (
        <div
          key={index}
          className="font-mono text-xs grid grid-cols-7 gap-2 text-gray-300 hover:bg-gray-800/30 p-1 rounded"
        >
          <span className="text-blue-400">{conn.proto}</span>
          <span>{conn.recvQ}</span>
          <span>{conn.sendQ}</span>
          <span className="text-cyan-400">{conn.localAddress}</span>
          <span className="text-purple-400">{conn.foreignAddress}</span>
          <span
            className={
              conn.state === "LISTEN"
                ? "text-green-400"
                : conn.state === "ESTABLISHED"
                ? "text-yellow-400"
                : "text-gray-400"
            }
          >
            {conn.state}
          </span>
          <span className="text-orange-400">{conn.pid}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use <code className="text-teal-400">ss -tulpn</code> for faster
        results on modern systems
      </div>
    </div>
  );
};

export const TailLogsCommand: React.FC<{ logFile?: string }> = ({
  logFile = "/var/log/nginx/access.log",
}) => {
  const logs = logFile.includes("nginx")
    ? logSamples.nginx
    : logSamples.application;

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-3">
        📜 Following logs: {logFile}
      </div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
        {logs.map((log, index) => (
          <div
            key={index}
            className={`font-mono text-xs mb-1 ${
              log.includes("ERROR")
                ? "text-red-400"
                : log.includes("WARN")
                ? "text-yellow-400"
                : log.includes("INFO")
                ? "text-blue-400"
                : log.includes("200")
                ? "text-green-400"
                : log.includes("404") || log.includes("500")
                ? "text-red-400"
                : log.includes("401")
                ? "text-orange-400"
                : "text-gray-300"
            }`}
          >
            {log}
          </div>
        ))}
        <div className="text-gray-500 text-xs mt-2 animate-pulse">
          📡 Waiting for new log entries... (Press Ctrl+C to stop)
        </div>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use <code className="text-teal-400">tail -f -n 100 {logFile}</code>{" "}
        to show last 100 lines and follow
      </div>
    </div>
  );
};
