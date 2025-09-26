import React, { useState, useEffect } from "react";

export const PingCommand: React.FC<{ host?: string }> = ({
  host = "google.com",
}) => {
  const [pings, setPings] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const [, setCurrentIndex] = useState(0);

  useEffect(() => {
    const pingResults = [
      `PING ${host} (172.217.12.142): 56 data bytes`,
      `64 bytes from 172.217.12.142: icmp_seq=1 ttl=57 time=12.4 ms`,
      `64 bytes from 172.217.12.142: icmp_seq=2 ttl=57 time=11.8 ms`,
      `64 bytes from 172.217.12.142: icmp_seq=3 ttl=57 time=13.2 ms`,
      `64 bytes from 172.217.12.142: icmp_seq=4 ttl=57 time=12.1 ms`,
      `64 bytes from 172.217.12.142: icmp_seq=5 ttl=57 time=11.9 ms`,
    ];

    const statistics = [
      `--- ${host} ping statistics ---`,
      `5 packets transmitted, 5 received, 0% packet loss`,
      `round-trip min/avg/max/stddev = 11.8/12.3/13.2/0.5 ms`,
    ];

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < pingResults.length) {
          setPings((prev) => [...prev, pingResults[prevIndex]]);
          return prevIndex + 1;
        } else if (prevIndex < pingResults.length + statistics.length) {
          const statIndex = prevIndex - pingResults.length;
          setPings((prev) => [...prev, statistics[statIndex]]);
          if (statIndex === statistics.length - 1) {
            setIsRunning(false);
            clearInterval(interval);
          }
          return prevIndex + 1;
        }
        return prevIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [host]);

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-3">🏓 Ping {host}</div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
        {pings.map((ping, index) => (
          <div
            key={index}
            className={`font-mono text-sm mb-1 ${
              ping.includes("PING")
                ? "text-blue-400"
                : ping.includes("64 bytes")
                ? "text-green-400"
                : ping.includes("statistics") ||
                  ping.includes("packets") ||
                  ping.includes("round-trip")
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          >
            {ping}
          </div>
        ))}
        {isRunning && (
          <div className="text-gray-500 text-sm animate-pulse">
            📡 Pinging {host}...
          </div>
        )}
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use <code className="text-teal-400">ping -c 4 {host}</code> to send
        only 4 packets
      </div>
    </div>
  );
};

export const CurlCommand: React.FC<{ url?: string }> = ({
  url = "https://api.github.com/users/octocat",
}) => {
  const response = {
    "https://api.github.com/users/octocat": {
      status: "200 OK",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Server: "GitHub.com",
        "X-RateLimit-Limit": "60",
        "X-RateLimit-Remaining": "59",
      },
      body: {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        type: "User",
        site_admin: false,
        name: "monalisa octocat",
        company: "GitHub",
        blog: "https://github.com/blog",
        location: "San Francisco",
        email: "octocat@github.com",
        public_repos: 2,
        public_gists: 1,
        followers: 20,
        following: 0,
      },
    },
  };

  const defaultResponse = {
    status: "200 OK",
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      Server: "nginx/1.21.0",
    },
    body: "<html><head><title>Success</title></head><body><h1>Request successful!</h1></body></html>",
  };

  const currentResponse =
    response[url as keyof typeof response] || defaultResponse;

  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        🌐 HTTP Request: {url}
      </div>

      <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700">
        <div className="text-green-400 font-semibold mb-2">
          HTTP/1.1 {currentResponse.status}
        </div>
        <div className="text-sm space-y-1 mb-3">
          {Object.entries(currentResponse.headers).map(([key, value]) => (
            <div key={key} className="text-gray-300">
              <span className="text-blue-400">{key}:</span>{" "}
              <span className="text-yellow-400">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
        <div className="text-purple-400 font-semibold mb-2">Response Body:</div>
        <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-x-auto">
          {typeof currentResponse.body === "object"
            ? JSON.stringify(currentResponse.body, null, 2)
            : currentResponse.body}
        </pre>
      </div>

      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          curl -H "Accept: application/json" {url}
        </code>{" "}
        to specify headers
      </div>
    </div>
  );
};

export const WgetCommand: React.FC<{ url?: string }> = ({
  url = "https://example.com/file.zip",
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const fileName = url.split("/").pop() || "file.zip";
  const fileSize = "2.5MB";
  const speed = isComplete
    ? "0B/s"
    : `${(Math.random() * 500 + 100).toFixed(0)}KB/s`;

  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        ⬇️ Downloading: {url}
      </div>

      <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700 space-y-2">
        <div className="text-sm text-gray-300">
          <div>Resolving example.com (example.com)... 93.184.216.34</div>
          <div>
            Connecting to example.com (example.com)|93.184.216.34|:443...
            connected.
          </div>
          <div>HTTP request sent, awaiting response... 200 OK</div>
          <div>Length: 2,621,440 ({fileSize}) [application/zip]</div>
          <div>Saving to: '{fileName}'</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <span className="text-green-400 text-sm font-mono">
              {Math.min(progress, 100).toFixed(0)}%
            </span>
          </div>

          <div className="font-mono text-xs text-gray-300">
            {fileName} {Math.min(progress, 100).toFixed(0)}%[
            {"=".repeat(Math.floor(progress / 5))}
            {">" + " ".repeat(20 - Math.floor(progress / 5))}] {fileSize}{" "}
            {speed}
          </div>
        </div>

        {isComplete && (
          <div className="text-green-400 font-semibold">
            ✅ '{fileName}' saved [{fileSize}]
          </div>
        )}
      </div>

      <div className="mt-4 text-gray-500 text-sm">
        💡 Use <code className="text-teal-400">wget -c {url}</code> to resume
        interrupted downloads
      </div>
    </div>
  );
};

export const NslookupCommand: React.FC<{ domain?: string }> = ({
  domain = "github.com",
}) => {
  const dnsResults = {
    "github.com": {
      server: "8.8.8.8",
      addresses: ["140.82.112.3", "140.82.112.4"],
      canonical: "github.com",
      aliases: [],
    },
    "google.com": {
      server: "8.8.8.8",
      addresses: ["172.217.12.142", "172.217.12.174"],
      canonical: "google.com",
      aliases: [],
    },
  };

  const defaultResult = {
    server: "8.8.8.8",
    addresses: ["203.0.113.1"],
    canonical: domain,
    aliases: [],
  };

  const result = dnsResults[domain as keyof typeof dnsResults] || defaultResult;

  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        🔍 DNS Lookup: {domain}
      </div>

      <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700 space-y-2">
        <div className="text-sm">
          <div className="text-gray-400">
            Server: <span className="text-blue-400">{result.server}</span>
          </div>
          <div className="text-gray-400">
            Address: <span className="text-blue-400">{result.server}#53</span>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-2">
          <div className="text-yellow-400 font-semibold">
            Non-authoritative answer:
          </div>
          <div className="text-sm space-y-1">
            <div className="text-gray-400">
              Name: <span className="text-green-400">{result.canonical}</span>
            </div>
            {result.addresses.map((addr, index) => (
              <div key={index} className="text-gray-400">
                Address: <span className="text-cyan-400">{addr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-sm">
        💡 Use <code className="text-teal-400">dig {domain}</code> for more
        detailed DNS information
      </div>
    </div>
  );
};

export const TracerouteCommand: React.FC<{ host?: string }> = ({
  host = "google.com",
}) => {
  const hops = [
    {
      hop: 1,
      ip: "192.168.1.1",
      hostname: "router.local",
      times: ["1.234 ms", "1.156 ms", "1.089 ms"],
    },
    {
      hop: 2,
      ip: "10.0.0.1",
      hostname: "isp-gateway.net",
      times: ["12.45 ms", "11.23 ms", "13.67 ms"],
    },
    {
      hop: 3,
      ip: "203.0.113.1",
      hostname: "core1.isp.net",
      times: ["15.89 ms", "14.56 ms", "16.23 ms"],
    },
    {
      hop: 4,
      ip: "203.0.113.25",
      hostname: "peer.google.com",
      times: ["18.45 ms", "17.89 ms", "19.12 ms"],
    },
    {
      hop: 5,
      ip: "172.217.12.142",
      hostname: "google.com",
      times: ["20.34 ms", "19.78 ms", "21.45 ms"],
    },
  ];

  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        🛣️ Traceroute to {host}
      </div>

      <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700">
        <div className="text-sm text-gray-300 mb-3">
          traceroute to {host} (172.217.12.142), 30 hops max, 60 byte packets
        </div>

        <div className="space-y-1">
          {hops.map((hop, index) => (
            <div
              key={index}
              className="font-mono text-xs text-gray-300 hover:bg-gray-700/30 p-1 rounded-sm"
            >
              <span className="text-yellow-400 w-2 inline-block">
                {hop.hop}
              </span>
              <span className="text-blue-400 ml-2">{hop.hostname}</span>
              <span className="text-cyan-400 ml-2">({hop.ip})</span>
              <span className="text-green-400 ml-4">
                {hop.times.join("  ")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-sm">
        💡 Each line shows the path packets take to reach {host}. Use{" "}
        <code className="text-teal-400">mtr {host}</code> for continuous
        monitoring
      </div>
    </div>
  );
};
