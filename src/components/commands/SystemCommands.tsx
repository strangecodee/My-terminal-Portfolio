import React from "react";

export const TopCommand: React.FC = () => {
  const [data, setData] = React.useState({
    time: new Date().toLocaleTimeString(),
    uptime: "2 days, 4:15",
    load: "0.52, 0.58, 0.59",
    tasks: "95 total, 1 running, 94 sleeping, 0 stopped, 0 zombie",
    cpu: "5.2 us, 2.3 sy, 0.0 ni, 92.1 id, 0.0 wa, 0.0 hi, 0.4 si, 0.0 st",
    memTotal: 8192,
    memFree: 2048,
    memUsed: 4096,
    memBuff: 2048,
    swapTotal: 2048,
    swapFree: 2048,
    swapUsed: 0,
    processes: [
      {
        pid: 1234,
        user: "root",
        cpu: 15.2,
        mem: 1.5,
        time: "0:02.34",
        cmd: "nginx",
      },
      {
        pid: 1235,
        user: "www-data",
        cpu: 8.7,
        mem: 1.1,
        time: "0:01.23",
        cmd: "php-fpm",
      },
      {
        pid: 1236,
        user: "mysql",
        cpu: 12.3,
        mem: 4.2,
        time: "0:05.67",
        cmd: "mysqld",
      },
      {
        pid: 1456,
        user: "root",
        cpu: 3.1,
        mem: 2.8,
        time: "0:12.45",
        cmd: "dockerd",
      },
      {
        pid: 1678,
        user: "root",
        cpu: 4.5,
        mem: 0.9,
        time: "0:08.12",
        cmd: "kubelet",
      },
      {
        pid: 1890,
        user: "jenkins",
        cpu: 6.8,
        mem: 3.4,
        time: "0:15.23",
        cmd: "java -jar jenkins.war",
      },
      {
        pid: 2012,
        user: "root",
        cpu: 2.1,
        mem: 1.2,
        time: "0:03.56",
        cmd: "terraform",
      },
      {
        pid: 2234,
        user: "anurag",
        cpu: 1.0,
        mem: 0.5,
        time: "0:00.45",
        cmd: "node dev-server",
      },
    ],
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        time: new Date().toLocaleTimeString(),
        load: `${(Math.random() * 1).toFixed(2)}, ${(
          Math.random() * 0.8
        ).toFixed(2)}, ${(Math.random() * 0.6).toFixed(2)}`,
        memFree: Math.max(1000, prev.memFree + (Math.random() - 0.5) * 200),
        memUsed: prev.memTotal - prev.memFree - prev.memBuff,
        processes: prev.processes
          .map((p) => ({
            ...p,
            cpu: Math.max(0, p.cpu + (Math.random() - 0.5) * 5),
          }))
          .sort((a, b) => b.cpu - a.cpu)
          .slice(0, 8),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold">
        📊 System Processes (top)
      </div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-96 overflow-y-auto">
        <div className="font-mono text-xs space-y-1 text-gray-300">
          <div>
            top - {data.time} up {data.uptime}, 1 user, load average:{" "}
            {data.load}
          </div>
          <div>Tasks: {data.tasks}</div>
          <div>%Cpu(s): {data.cpu}</div>
          <div>
            MiB Mem : {data.memTotal}.0 total, {data.memFree}.0 free,{" "}
            {data.memUsed}.0 used, {data.memBuff}.0 buff/cache
          </div>
          <div>
            MiB Swap: {data.swapTotal}.0 total, {data.swapFree}.0 free,{" "}
            {data.swapUsed}.0 used. {data.memFree + data.memBuff}.0 avail Mem
          </div>
          <div className="text-gray-400">
            PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND
          </div>
          {data.processes.map((p) => (
            <div key={p.pid} className={p.cpu > 10 ? "text-red-400" : ""}>
              {p.pid.toString().padEnd(7)} {p.user.padEnd(8)} 20 0{" "}
              {p.cpu * 10000 + 456789} {p.cpu * 2000 + 12345}{" "}
              {p.mem * 1000 + 6789} S {p.cpu.toFixed(1).padEnd(4)}{" "}
              {p.mem.toFixed(1).padEnd(4)} {p.time.padEnd(7)} {p.cmd}
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-500 text-sm">
        💡 Press 'q' to quit top (simulated real-time updates)
      </div>
    </div>
  );
};

export const PsAuxCommand: React.FC = () => {
  const processes = [
    {
      user: "root",
      pid: 1,
      cpu: 0.0,
      mem: 0.1,
      vsz: 123456,
      rss: 2048,
      tty: "?",
      stat: "Ss",
      start: "Sep20",
      time: "0:01",
      cmd: "/sbin/init",
    },
    {
      user: "root",
      pid: 234,
      cpu: 0.0,
      mem: 0.0,
      vsz: 0,
      rss: 0,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "0:00",
      cmd: "[kthreadd]",
    },
    {
      user: "root",
      pid: 567,
      cpu: 0.0,
      mem: 0.0,
      vsz: 0,
      rss: 0,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "0:00",
      cmd: "[kworker/0:0H]",
    },
    {
      user: "nginx",
      pid: 1234,
      cpu: 15.2,
      mem: 1.5,
      vsz: 456789,
      rss: 12345,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "2:34",
      cmd: "nginx: master process /etc/nginx/nginx.conf",
    },
    {
      user: "www-data",
      pid: 1235,
      cpu: 8.7,
      mem: 1.1,
      vsz: 234567,
      rss: 8765,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "1:23",
      cmd: "php-fpm: pool www",
    },
    {
      user: "mysql",
      pid: 1236,
      cpu: 12.3,
      mem: 4.2,
      vsz: 567890,
      rss: 34567,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "5:67",
      cmd: "/usr/sbin/mysqld --daemonize",
    },
    {
      user: "root",
      pid: 1456,
      cpu: 3.1,
      mem: 2.8,
      vsz: 789012,
      rss: 23456,
      tty: "?",
      stat: "Sl",
      start: "Sep20",
      time: "12:45",
      cmd: "/usr/bin/dockerd -H fd://",
    },
    {
      user: "root",
      pid: 1678,
      cpu: 4.5,
      mem: 0.9,
      vsz: 345678,
      rss: 12345,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "8:12",
      cmd: "/usr/bin/kubelet --kubeconfig=/etc/kubernetes/kubelet.conf",
    },
    {
      user: "jenkins",
      pid: 1890,
      cpu: 6.8,
      mem: 3.4,
      vsz: 901234,
      rss: 56789,
      tty: "?",
      stat: "Sl",
      start: "Sep20",
      time: "15:23",
      cmd: "java -jar /opt/jenkins.war --httpPort=8080",
    },
    {
      user: "root",
      pid: 2012,
      cpu: 2.1,
      mem: 1.2,
      vsz: 456789,
      rss: 9876,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "3:56",
      cmd: "terraform apply -auto-approve",
    },
    {
      user: "anurag",
      pid: 2234,
      cpu: 1.0,
      mem: 0.5,
      vsz: 234567,
      rss: 5432,
      tty: "pts/0",
      stat: "R+",
      start: "14:30",
      time: "0:45",
      cmd: "node /app/server.js",
    },
    {
      user: "root",
      pid: 2456,
      cpu: 0.5,
      mem: 0.3,
      vsz: 123456,
      rss: 2048,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "1:12",
      cmd: "sshd: devops@pts/1",
    },
    {
      user: "anurag",
      pid: 2678,
      cpu: 0.2,
      mem: 0.8,
      vsz: 567890,
      rss: 4096,
      tty: "pts/1",
      stat: "S",
      start: "14:30",
      time: "0:23",
      cmd: "bash",
    },
    {
      user: "cron",
      pid: 2890,
      cpu: 0.0,
      mem: 0.1,
      vsz: 78901,
      rss: 1024,
      tty: "?",
      stat: "S",
      start: "Sep20",
      time: "0:05",
      cmd: "CRON",
    },
    {
      user: "systemd",
      pid: 3012,
      cpu: 0.1,
      mem: 0.4,
      vsz: 234567,
      rss: 3072,
      tty: "?",
      stat: "Ss",
      start: "Sep20",
      time: "0:34",
      cmd: "systemd --user",
    },
  ];

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-2">
        📋 Process List (ps aux)
      </div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-96 overflow-y-auto">
        <div className="font-mono text-sm text-gray-300 mb-2 space-y-1">
          <div className="text-green-600 text-xs font-semibold mb-2 grid grid-cols-10">
            <span>USER</span> <span>PID</span> <span>%CPU</span>{" "}
            <span>%MEM</span> <span>VSZ</span> <span>RSS</span>
            <span>STAT</span> <span>START</span> <span>TIME</span>{" "}
            <span>COMMAND</span>
          </div>
          {processes.map((p, i) => (
            <div
              key={i}
              className="text-xs grid grid-cols-10 gap-1 text-gray-300 hover:bg-gray-800/30 p-1"
            >
              <span className="text-blue-400">{p.user.padEnd(9)}</span>
              <span className="text-yellow-400">
                {p.pid.toString().padEnd(5)}
              </span>
              <span
                className={`col-span-1 ${
                  p.cpu > 10 ? "text-red-400" : "text-green-400"
                }`}
              >
                {p.cpu.toFixed(1).padEnd(4)}
              </span>
              <span className={p.mem > 2 ? "text-orange-400" : "text-gray-400"}>
                {p.mem.toFixed(1).padEnd(4)}
              </span>
              <span className="text-purple-400">
                {p.vsz.toString().padEnd(6)}
              </span>
              <span className="text-cyan-400">
                {p.rss.toString().padEnd(5)}
              </span>
              <span
                className={p.stat === "R" ? "text-green-400" : "text-gray-400"}
              >
                {p.stat.padEnd(4)}
              </span>
              <span>{p.start.padEnd(6)}</span>
              <span>{p.time.padEnd(4)}</span>
              <span className="line-clamp-1">{p.cmd}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-500 text-sm">
        💡 {processes.length} processes displayed
      </div>
    </div>
  );
};

export const DfCommand: React.FC = () => {
  const filesystems = [
    {
      fs: "tmpfs",
      size: "4.0G",
      used: "0",
      avail: "4.0G",
      use: "0%",
      mount: "/dev/shm",
    },
    {
      fs: "/dev/sda1",
      size: "50G",
      used: "12G",
      avail: "35G",
      use: "25%",
      mount: "/",
    },
    {
      fs: "tmpfs",
      size: "2.0G",
      used: "1.2M",
      avail: "2.0G",
      use: "1%",
      mount: "/run",
    },
    {
      fs: "/dev/sda2",
      size: "100G",
      used: "45G",
      avail: "50G",
      use: "47%",
      mount: "/var",
    },
    {
      fs: "/dev/sdb1",
      size: "200G",
      used: "120G",
      avail: "70G",
      use: "63%",
      mount: "/data",
    },
    {
      fs: "/dev/sdc1",
      size: "500G",
      used: "250G",
      avail: "220G",
      use: "53%",
      mount: "/home",
    },
    {
      fs: "tmpfs",
      size: "4.0G",
      used: "0",
      avail: "4.0G",
      use: "0%",
      mount: "/tmp",
    },
    {
      fs: "/dev/sdd1",
      size: "100G",
      used: "75G",
      avail: "20G",
      use: "78%",
      mount: "/var/lib/docker",
    },
    {
      fs: "/dev/sde1",
      size: "20G",
      used: "5G",
      avail: "14G",
      use: "27%",
      mount: "/boot",
    },
  ];

  const totalSize = filesystems.reduce(
    (sum, fs) => sum + parseFloat(fs.size),
    0
  );
  const avgUse =
    filesystems.reduce((sum, fs) => sum + parseInt(fs.use), 0) /
    filesystems.length;

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold">💾 Disk Usage (df -h)</div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
        <div className="font-mono text-xs space-y-1 text-gray-300">
          <div className="text-gray-400">
            Filesystem Size Used Avail Use% Mounted on
          </div>
          {filesystems.map((fs, i) => (
            <div
              key={i}
              className={parseInt(fs.use) > 70 ? "text-red-400" : ""}
            >
              {fs.fs.padEnd(18)} {fs.size.padEnd(5)} {fs.used.padEnd(5)}{" "}
              {fs.avail.padEnd(5)} {fs.use.padEnd(4)} {fs.mount}
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-500 text-sm">
        💡 Total disk space: {totalSize.toFixed(0)}G (average usage:{" "}
        {avgUse.toFixed(1)}%)
      </div>
    </div>
  );
};

export const FreeCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-green-400 font-semibold">
      🧠 Memory Usage (free -m)
    </div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div className="text-gray-400">
          total used free shared buff/cache available
        </div>
        <div>Mem: 8192 4096 2048 256 2048 3072</div>
        <div>Swap: 2048 0 2048</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 Memory usage: 50% (4GB used)</div>
  </div>
);

export const NetstatCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-green-400 font-semibold">
      🌐 Network Connections (netstat -tulpn)
    </div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div className="text-gray-400">
          Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program
          name
        </div>
        <div>tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN 567/sshd</div>
        <div>tcp 0 0 127.0.0.1:3306 0.0.0.0:* LISTEN 1236/mysqld</div>
        <div>tcp 0 0 0.0.0.0:80 0.0.0.0:* LISTEN 1234/nginx</div>
        <div>tcp 0 0 0.0.0.0:443 0.0.0.0:* LISTEN 1234/nginx</div>
        <div>tcp 0 0 127.0.0.1:6379 0.0.0.0:* LISTEN 1456/redis-server</div>
        <div>udp 0 0 0.0.0.0:53 0.0.0.0:* 1789/dnsmasq</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 {6} network connections</div>
  </div>
);

export const UptimeCommand: React.FC = () => {
  const [uptime, setUptime] = React.useState({
    time: "00:00:00",
    duration: "0 days, 0:00",
    load: "0.00, 0.00, 0.00",
  });

  React.useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const totalSeconds = Math.floor((now - startTime) / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);

      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour12: false,
      });
      const duration = `${days} days, ${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
      const loadAvg = "0.52, 0.58, 0.59"; // Static simulation

      setUptime({ time: currentTime, duration, load: loadAvg });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">⏰ System Uptime</div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
        <div className="font-mono text-sm text-gray-300">
          <div>
            {uptime.time} up {uptime.duration}, 1 user, load average:{" "}
            {uptime.load}
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-sm">
        💡 System has been running for {uptime.duration}
      </div>
    </div>
  );
};

export const TailLogsCommand: React.FC<{ logFile?: string }> = ({
  logFile,
}) => (
  <div className="space-y-2">
    <div className="text-green-400 font-semibold">
      📄 Tailing Logs: {logFile || "/var/log/syslog"}
    </div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>
          [2023-09-20 14:30:15] systemd[1]: Started Session 123 of user devops
        </div>
        <div>
          [2023-09-20 14:30:16] sshd[567]: Accepted publickey for devops from
          192.168.1.100 port 22
        </div>
        <div>
          [2023-09-20 14:30:17] nginx[1234]: [notice] started process 1235
        </div>
        <div>[2023-09-20 14:30:18] mysqld[1236]: ready for connections</div>
        <div>
          [2023-09-20 14:30:19] cron[789]: (root) CMD (cd / && run-parts
          --report /etc/cron.hourly)
        </div>
        <div>
          [2023-09-20 14:30:20] kernel: [123456.789012] usb 1-1: new high-speed
          USB device number 2
        </div>
        <div>
          [2023-09-20 14:30:21] docker[1456]:
          time="2023-09-20T14:30:21.123456789Z" level=info msg="Container
          started"
        </div>
        <div>
          [2023-09-20 14:30:22] kubelet[1789]: Successfully pulled image
          "nginx:latest"
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 Press Ctrl+C to stop tailing</div>
  </div>
);
