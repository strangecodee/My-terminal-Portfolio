import React from "react";

export const PingCommand: React.FC<{ host: string }> = ({ host }) => (
  <div className="space-y-2">
    <div className="text-cyan-400 font-semibold">🏓 Ping: {host}</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>PING {host} (192.168.1.1) 56(84) bytes of data.</div>
        <div>
          64 bytes from {host} (192.168.1.1): icmp_seq=1 ttl=64 time=0.045 ms
        </div>
        <div>
          64 bytes from {host} (192.168.1.1): icmp_seq=2 ttl=64 time=0.041 ms
        </div>
        <div>
          64 bytes from {host} (192.168.1.1): icmp_seq=3 ttl=64 time=0.042 ms
        </div>
        <div>
          64 bytes from {host} (192.168.1.1): icmp_seq=4 ttl=64 time=0.043 ms
        </div>
        <div></div>
        <div>--- {host} ping statistics ---</div>
        <div>
          4 packets transmitted, 4 received, 0% packet loss, time 3004ms
        </div>
        <div>rtt min/avg/max/mdev = 0.041/0.042/0.045/0.001 ms</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 Host is reachable</div>
  </div>
);

export const TracerouteCommand: React.FC<{ host: string }> = ({ host }) => (
  <div className="space-y-2">
    <div className="text-cyan-400 font-semibold">🗺️ Traceroute: {host}</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>traceroute to {host} (8.8.8.8), 30 hops max, 60 byte packets</div>
        <div>1 router.local (192.168.1.1) 0.123 ms 0.098 ms 0.087 ms</div>
        <div>2 isp-gateway (10.0.0.1) 5.432 ms 5.321 ms 5.298 ms</div>
        <div>3 core-router-1 (203.0.113.1) 12.345 ms 12.234 ms 12.198 ms</div>
        <div>4 backbone-1 (198.51.100.1) 23.456 ms 23.345 ms 23.298 ms</div>
        <div>5 google-dns (8.8.8.8) 34.567 ms 34.456 ms 34.398 ms</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 Route traced in 5 hops</div>
  </div>
);

export const NslookupCommand: React.FC<{ domain: string }> = ({ domain }) => (
  <div className="space-y-2">
    <div className="text-cyan-400 font-semibold">🔍 DNS Lookup: {domain}</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>Server: 8.8.8.8</div>
        <div>Address: 8.8.8.8#53</div>
        <div></div>
        <div>Non-authoritative answer:</div>
        <div>Name: {domain}</div>
        <div>Address: 142.250.184.206</div>
        <div>Address: 2a00:1450:4001:829::200e</div>
        <div></div>
        <div>Name: {domain}</div>
        <div>Address: 172.217.16.206</div>
        <div>Address: 2a00:1450:4001:81c::200e</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 DNS resolution successful</div>
  </div>
);

export const CurlCommand: React.FC<{ url: string }> = ({ url }) => (
  <div className="space-y-2">
    <div className="text-cyan-400 font-semibold">🌐 HTTP Request: {url}</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 max-h-64 overflow-y-auto">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>
          % Total % Received % Xferd Average Speed Time Time Time Current
        </div>
        <div> Dload Upload Total Spent Left Speed</div>
        <div>
          100 1256 100 1256 0 0 45678 0 --:--:-- --:--:-- --:--:-- 47890
        </div>
        <div></div>
        <div className="text-green-400">HTTP/1.1 200 OK</div>
        <div>Content-Type: application/json</div>
        <div>Content-Length: 1256</div>
        <div>Server: nginx/1.21.3</div>
        <div>Date: Wed, 20 Sep 2023 14:30:15 GMT</div>
        <div></div>
        <div>{"{"}</div>
        <div> "status": "success",</div>
        <div> "message": "API endpoint working",</div>
        <div> "timestamp": "2023-09-20T14:30:15Z"</div>
        <div>{"}"}</div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Request completed successfully
    </div>
  </div>
);

export const WgetCommand: React.FC<{ url: string }> = ({ url }) => (
  <div className="space-y-2">
    <div className="text-cyan-400 font-semibold">📥 Download: {url}</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="font-mono text-xs space-y-1 text-gray-300">
        <div>--2023-09-20 14:30:15-- {url}</div>
        <div>Resolving example.com (example.com)... 93.184.216.34</div>
        <div>
          Connecting to example.com (example.com)|93.184.216.34|:443...
          connected.
        </div>
        <div>HTTP request sent, awaiting response... 200 OK</div>
        <div>Length: 1256 (1.2K) [application/json]</div>
        <div>Saving to: 'downloaded-file.json'</div>
        <div></div>
        <div>0K .......... .......... .......... 100% 456K=0.003s</div>
        <div></div>
        <div>
          2023-09-20 14:30:15 (456 KB/s) - 'downloaded-file.json' saved
          [1256/1256]
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">💡 File downloaded successfully</div>
  </div>
);
