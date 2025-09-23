// DevOps Mock Data and Outputs
export const dockerData = {
  containers: [
    {
      id: "a1b2c3d4e5f6",
      image: "nginx:latest",
      command: "nginx -g daemon off;",
      created: "2 hours ago",
      status: "Up 2 hours",
      ports: "0.0.0.0:80->80/tcp",
      names: "web-server",
    },
    {
      id: "f6e5d4c3b2a1",
      image: "redis:alpine",
      command: "docker-entrypoint.sh redis-server",
      created: "3 hours ago",
      status: "Up 3 hours",
      ports: "6379/tcp",
      names: "redis-cache",
    },
    {
      id: "1a2b3c4d5e6f",
      image: "postgres:13",
      command: "docker-entrypoint.sh postgres",
      created: "1 day ago",
      status: "Up 1 day",
      ports: "0.0.0.0:5432->5432/tcp",
      names: "postgres-db",
    },
    {
      id: "6f5e4d3c2b1a",
      image: "node:16-alpine",
      command: "npm start",
      created: "30 minutes ago",
      status: "Up 30 minutes",
      ports: "0.0.0.0:3000->3000/tcp",
      names: "api-server",
    },
  ],
  images: [
    {
      repository: "nginx",
      tag: "latest",
      imageId: "f6d0b4cd80dc",
      created: "2 weeks ago",
      size: "133MB",
    },
    {
      repository: "redis",
      tag: "alpine",
      imageId: "40c68ed3a4b2",
      created: "3 weeks ago",
      size: "32.3MB",
    },
    {
      repository: "postgres",
      tag: "13",
      imageId: "13d2b8934a06",
      created: "1 month ago",
      size: "374MB",
    },
    {
      repository: "node",
      tag: "16-alpine",
      imageId: "25c3f7d4e8a9",
      created: "2 weeks ago",
      size: "110MB",
    },
    {
      repository: "my-app",
      tag: "v1.2.3",
      imageId: "9b8c7d6e5f4a",
      created: "1 hour ago",
      size: "256MB",
    },
  ],
};

export const kubernetesData = {
  pods: [
    {
      name: "frontend-deployment-7d4b8c9f6-x8k2m",
      ready: "1/1",
      status: "Running",
      restarts: "0",
      age: "2d",
      ip: "10.244.1.15",
      node: "worker-1",
    },
    {
      name: "backend-deployment-5c7a9b2d8-p4j7n",
      ready: "1/1",
      status: "Running",
      restarts: "1",
      age: "1d",
      ip: "10.244.2.23",
      node: "worker-2",
    },
    {
      name: "database-statefulset-0",
      ready: "1/1",
      status: "Running",
      restarts: "0",
      age: "5d",
      ip: "10.244.1.8",
      node: "worker-1",
    },
    {
      name: "redis-deployment-8f3e1a5c9-m9x4v",
      ready: "1/1",
      status: "Running",
      restarts: "0",
      age: "3h",
      ip: "10.244.3.12",
      node: "worker-3",
    },
    {
      name: "nginx-ingress-controller-6b8d4f2a1-q7w9e",
      ready: "1/1",
      status: "Running",
      restarts: "2",
      age: "7d",
      ip: "10.244.1.3",
      node: "master",
    },
  ],
  services: [
    {
      name: "frontend-service",
      type: "ClusterIP",
      clusterIp: "10.96.45.123",
      externalIp: "<none>",
      ports: "80/TCP",
      age: "2d",
    },
    {
      name: "backend-service",
      type: "ClusterIP",
      clusterIp: "10.96.78.456",
      externalIp: "<none>",
      ports: "8080/TCP",
      age: "1d",
    },
    {
      name: "database-service",
      type: "ClusterIP",
      clusterIp: "10.96.12.789",
      externalIp: "<none>",
      ports: "5432/TCP",
      age: "5d",
    },
    {
      name: "nginx-ingress",
      type: "LoadBalancer",
      clusterIp: "10.96.34.567",
      externalIp: "203.0.113.45",
      ports: "80:30080/TCP,443:30443/TCP",
      age: "7d",
    },
  ],
  deployments: [
    {
      name: "frontend-deployment",
      ready: "3/3",
      upToDate: "3",
      available: "3",
      age: "2d",
    },
    {
      name: "backend-deployment",
      ready: "2/2",
      upToDate: "2",
      available: "2",
      age: "1d",
    },
    {
      name: "redis-deployment",
      ready: "1/1",
      upToDate: "1",
      available: "1",
      age: "3h",
    },
    {
      name: "monitoring-deployment",
      ready: "1/1",
      upToDate: "1",
      available: "1",
      age: "5d",
    },
  ],
};

export const awsData = {
  s3Buckets: [
    {
      name: "my-app-production-assets",
      creationDate: "2023-08-15",
      region: "us-east-1",
    },
    {
      name: "backup-database-dumps",
      creationDate: "2023-07-22",
      region: "us-west-2",
    },
    {
      name: "logs-analytics-storage",
      creationDate: "2023-09-01",
      region: "eu-west-1",
    },
    {
      name: "static-website-hosting",
      creationDate: "2023-06-10",
      region: "us-east-1",
    },
  ],
  ec2Instances: [
    {
      instanceId: "i-0123456789abcdef0",
      instanceType: "t3.medium",
      state: "running",
      publicIp: "203.0.113.12",
      privateIp: "10.0.1.15",
      launchTime: "2023-09-18T10:30:00Z",
    },
    {
      instanceId: "i-0fedcba9876543210",
      instanceType: "t3.large",
      state: "running",
      publicIp: "203.0.113.45",
      privateIp: "10.0.2.28",
      launchTime: "2023-09-17T14:22:00Z",
    },
    {
      instanceId: "i-0abcdef123456789a",
      instanceType: "t3.small",
      state: "stopped",
      publicIp: null,
      privateIp: "10.0.1.33",
      launchTime: "2023-09-16T09:15:00Z",
    },
  ],
  lambdaFunctions: [
    {
      functionName: "image-resize-processor",
      runtime: "python3.9",
      lastModified: "2023-09-19T15:30:00Z",
      codeSize: 2048576,
    },
    {
      functionName: "api-gateway-authorizer",
      runtime: "nodejs18.x",
      lastModified: "2023-09-18T11:45:00Z",
      codeSize: 1024000,
    },
    {
      functionName: "database-backup-scheduler",
      runtime: "python3.9",
      lastModified: "2023-09-17T08:20:00Z",
      codeSize: 3145728,
    },
  ],
};

export const terraformData = {
  planOutput: `
Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
  ~ update in-place
  - destroy

Terraform will perform the following actions:

  # aws_instance.web_server will be created
  + resource "aws_instance" "web_server" {
      + ami                                  = "ami-0c55b159cbfafe1d0"
      + arn                                  = (known after apply)
      + associate_public_ip_address          = (known after apply)
      + availability_zone                    = (known after apply)
      + cpu_core_count                       = (known after apply)
      + cpu_threads_per_core                 = (known after apply)
      + disable_api_termination              = (known after apply)
      + ebs_optimized                        = (known after apply)
      + get_password_data                    = false
      + host_id                              = (known after apply)
      + id                                   = (known after apply)
      + instance_initiated_shutdown_behavior = (known after apply)
      + instance_state                       = (known after apply)
      + instance_type                        = "t3.micro"
      + ipv6_address_count                   = (known after apply)
      + ipv6_addresses                       = (known after apply)
      + key_name                             = (known after apply)
      + monitoring                           = (known after apply)
      + outpost_arn                          = (known after apply)
      + password_data                        = (known after apply)
      + placement_group                      = (known after apply)
      + placement_partition_number           = (known after apply)
      + primary_network_interface_id         = (known after apply)
      + private_dns_name                     = (known after apply)
      + private_ip                           = (known after apply)
      + public_dns_name                      = (known after apply)
      + public_ip                            = (known after apply)
      + secondary_private_ips                = (known after apply)
      + security_groups                      = (known after apply)
      + source_dest_check                    = true
      + subnet_id                            = (known after apply)
      + tags_all                             = (known after apply)
      + tenancy                              = (known after apply)
      + user_data                            = (known after apply)
      + user_data_base64                     = (known after apply)
      + user_data_replace_on_change          = false
      + vpc_security_group_ids               = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.
`,
  stateList: [
    "aws_instance.web_server",
    "aws_security_group.web_sg",
    "aws_vpc.main",
    "aws_subnet.public",
    "aws_internet_gateway.igw",
    "aws_route_table.public",
    "aws_route_table_association.public",
  ],
};

export const systemData = {
  processes: [
    {
      pid: "1",
      user: "root",
      cpu: "0.0",
      mem: "0.1",
      vsz: "168588",
      rss: "13864",
      tty: "?",
      stat: "Ss",
      start: "Sep18",
      time: "0:02",
      command: "/sbin/init",
    },
    {
      pid: "1234",
      user: "nginx",
      cpu: "2.3",
      mem: "1.2",
      vsz: "125432",
      rss: "45632",
      tty: "?",
      stat: "S",
      start: "10:30",
      time: "0:15",
      command: "nginx: worker process",
    },
    {
      pid: "5678",
      user: "postgres",
      cpu: "1.8",
      mem: "8.5",
      vsz: "387456",
      rss: "156789",
      tty: "?",
      stat: "S",
      start: "09:15",
      time: "1:23",
      command: "postgres: main process",
    },
    {
      pid: "9012",
      user: "node",
      cpu: "15.2",
      mem: "12.3",
      vsz: "987654",
      rss: "234567",
      tty: "?",
      stat: "R",
      start: "11:45",
      time: "0:45",
      command: "node /app/server.js",
    },
  ],
  diskUsage: [
    {
      filesystem: "/dev/sda1",
      size: "20G",
      used: "12G",
      avail: "7.2G",
      usePercent: "63%",
      mountedOn: "/",
    },
    {
      filesystem: "/dev/sda2",
      size: "100G",
      used: "45G",
      avail: "50G",
      usePercent: "48%",
      mountedOn: "/var",
    },
    {
      filesystem: "tmpfs",
      size: "2.0G",
      used: "0",
      avail: "2.0G",
      usePercent: "0%",
      mountedOn: "/dev/shm",
    },
  ],
  memoryUsage: {
    total: "16384",
    used: "8192",
    free: "2048",
    shared: "512",
    buffers: "1024",
    cached: "4608",
    available: "7680",
  },
};

export const jenkinsData = {
  jobs: [
    {
      name: "frontend-build",
      status: "SUCCESS",
      lastBuild: "#145",
      duration: "2m 34s",
      lastSuccess: "2023-09-20 14:30:00",
    },
    {
      name: "backend-deploy",
      status: "RUNNING",
      lastBuild: "#67",
      duration: "1m 45s",
      lastSuccess: "2023-09-20 13:15:00",
    },
    {
      name: "database-migration",
      status: "FAILED",
      lastBuild: "#23",
      duration: "45s",
      lastSuccess: "2023-09-19 16:20:00",
    },
    {
      name: "integration-tests",
      status: "SUCCESS",
      lastBuild: "#89",
      duration: "5m 12s",
      lastSuccess: "2023-09-20 12:45:00",
    },
  ],
};

export const networkData = {
  connections: [
    {
      proto: "tcp",
      recvQ: "0",
      sendQ: "0",
      localAddress: "0.0.0.0:22",
      foreignAddress: "0.0.0.0:*",
      state: "LISTEN",
      pid: "1234/sshd",
    },
    {
      proto: "tcp",
      recvQ: "0",
      sendQ: "0",
      localAddress: "0.0.0.0:80",
      foreignAddress: "0.0.0.0:*",
      state: "LISTEN",
      pid: "5678/nginx",
    },
    {
      proto: "tcp",
      recvQ: "0",
      sendQ: "0",
      localAddress: "127.0.0.1:5432",
      foreignAddress: "0.0.0.0:*",
      state: "LISTEN",
      pid: "9012/postgres",
    },
    {
      proto: "tcp",
      recvQ: "0",
      sendQ: "52",
      localAddress: "10.0.1.15:80",
      foreignAddress: "203.0.113.45:54321",
      state: "ESTABLISHED",
      pid: "5678/nginx",
    },
  ],
};

export const logSamples = {
  nginx: [
    '203.0.113.45 - - [20/Sep/2023:14:30:15 +0000] "GET /api/users HTTP/1.1" 200 1234 "-" "Mozilla/5.0"',
    '203.0.113.67 - - [20/Sep/2023:14:30:16 +0000] "POST /api/login HTTP/1.1" 401 89 "-" "curl/7.68.0"',
    '203.0.113.89 - - [20/Sep/2023:14:30:17 +0000] "GET /static/css/main.css HTTP/1.1" 200 5678 "-" "Mozilla/5.0"',
    '203.0.113.12 - - [20/Sep/2023:14:30:18 +0000] "GET /api/dashboard HTTP/1.1" 500 234 "-" "Mozilla/5.0"',
  ],
  application: [
    "2023-09-20 14:30:15 INFO  [main] Application started successfully on port 8080",
    "2023-09-20 14:30:16 ERROR [http-nio-8080-exec-1] Database connection failed: Connection timeout",
    "2023-09-20 14:30:17 WARN  [scheduler-1] Cache eviction took longer than expected: 2.3s",
    "2023-09-20 14:30:18 INFO  [http-nio-8080-exec-2] User authentication successful for user: admin",
  ],
};

export const manifestExamples = {
  kubernetesDeployment: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"`,
  dockerCompose: `version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:`,
  terraformMain: `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "web_server" {
  ami           = var.ami_id
  instance_type = "t3.micro"
  
  vpc_security_group_ids = [aws_security_group.web_sg.id]
  
  tags = {
    Name        = "WebServer"
    Environment = var.environment
  }
}

resource "aws_security_group" "web_sg" {
  name_prefix = "web-sg-"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`,
};
