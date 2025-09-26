import type { Project, GitHubStats, SystemInfo } from "../types/terminal";

export const systemInfo: SystemInfo = {
  os: "Ubuntu 22.04.3 LTS",
  shell: "bash 5.1.16",
  user: "anurag",
  hostname: "devops-portfolio",
  uptime: "156 days, 09:42",
  skills: [
    "AWS (EC2, S3, IAM, RDS, CloudWatch, Route 53)",
    "Google Cloud Platform (GCP)",
    "Docker & Containerization",
    "Jenkins CI/CD Pipelines",
    "Terraform (Infrastructure as Code)",
    "Ansible (Configuration Management)",
    "Python & Java Programming",
    "Linux System Administration (Ubuntu, CentOS)",
    "Git & GitHub",
    "MongoDB & MySQL",
    "Spring Boot & REST APIs",
    "System Monitoring & Automation",
  ],
  experience: [
    {
      company: "RannLab Technologies Pvt. Ltd.",
      position: "AWS Cloud Intern",
      duration: "May 2024 - Aug 2024",
    },
    {
      company: "Self-Learning & Projects",
      position: "DevOps Enthusiast",
      duration: "2023 - Present",
    },
  ],
  education: [
    {
      institution: "Invertis University, Bareilly",
      degree: "Master of Computer Applications (MCA)",
      year: "2023 - 2025",
    },
    {
      institution: "M.J.P. Rohilkhand University, Bareilly",
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2020 - 2023",
    },
  ],
  contact: {
    email: "annu.exe@gmail.com",
    location: "Bareilly, Uttar Pradesh, India",
    linkedin: "https://linkedin.com/in/annuragmaurya",
    github: "https://github.com/strangecodee",
    website: "https://anurag-devops-portfolio.dev",
  },
};

export const projects: Project[] = [
  {
    id: "1",
    name: "TastyGo - Food Ordering Application",
    description:
      "Full-stack food ordering web application with Docker & CI/CD deployment",
    longDescription:
      "A comprehensive full-stack food ordering web application built with React frontend and Spring Boot backend. Deployed on AWS EC2 with complete CI/CD pipeline using Jenkins. Features secure JWT-based authentication, integrated Razorpay payment gateway, and MongoDB database. Dockerized both frontend and backend applications for consistent deployment across environments.",
    technologies: [
      "React",
      "Spring Boot",
      "MongoDB",
      "Jenkins",
      "Docker",
      "AWS EC2",
      "JWT",
      "Razorpay",
      "Maven",
    ],
    githubUrl: "https://github.com/strangecodee/tastygo-food-ordering",
    liveUrl: "https://tastygo-app.com",
    status: "completed",
    startDate: "2024-06-01",
    endDate: "2024-08-15",
  },
  {
    id: "2",
    name: "E-School Website - GCP Infrastructure",
    description: "Production-ready infrastructure on GCP using Terraform IaC",
    longDescription:
      "Built complete production infrastructure on Google Cloud Platform using Terraform as Infrastructure as Code. Implemented SSL security using Certbot for encrypted access. Successfully deployed live at eschool.co.in with custom domain configuration. Configured Compute Engine instances, custom firewall rules, startup scripts, and Apache web server. Managed DNS and zone mapping using Cloud DNS for seamless live site provisioning.",
    technologies: [
      "Terraform",
      "GCP",
      "Apache",
      "Linux",
      "Cloud DNS",
      "Certbot SSL",
      "Compute Engine",
    ],
    githubUrl: "https://github.com/strangecodee/eschool-gcp-terraform",
    liveUrl: "https://eschool.co.in",
    status: "completed",
    startDate: "2024-07-01",
    endDate: "2024-09-30",
  },
  {
    id: "3",
    name: "AWS Automatic Load Balancing",
    description: "Auto-scaling web services with AWS load balancers",
    longDescription:
      "Implemented automatic load balancing solution on AWS for high-availability web services. Deployed multiple EC2 instances with Application Load Balancer for traffic distribution and auto-scaling capabilities. Configured health checks, target groups, and scaling policies to handle peak traffic loads. Integrated with Route 53 for DNS management and CloudWatch for monitoring and alerting.",
    technologies: [
      "AWS EC2",
      "AWS ELB",
      "AWS S3",
      "Route 53",
      "CloudWatch",
      "Auto Scaling Groups",
    ],
    githubUrl: "https://github.com/strangecodee/aws-load-balancing",
    status: "completed",
    startDate: "2024-05-01",
    endDate: "2024-06-30",
  },
  {
    id: "4",
    name: "Online Wine Store",
    description: "E-commerce application with secure backend architecture",
    longDescription:
      "Developed scalable e-commerce backend for online wine store using Java Spring Boot framework. Implemented secure authentication system, payment processing, inventory management, and order tracking. Built RESTful APIs for frontend integration and used MySQL database for data persistence. Focused on security best practices and scalable architecture design.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Maven",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/strangecodee/online-wine-store",
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-05-15",
  },
  {
    id: "5",
    name: "Chat Server Application",
    description:
      "Real-time multi-client communication system using Java Sockets",
    longDescription:
      "Built real-time chat server application using Java Socket programming for multiple client connections. Implemented concurrent client handling, message broadcasting, and connection management. Features include user authentication, private messaging, group chats, and connection status monitoring. Demonstrates proficiency in network programming and concurrent systems.",
    technologies: [
      "Java",
      "Socket Programming",
      "Multithreading",
      "Network Programming",
    ],
    githubUrl: "https://github.com/strangecodee/java-chat-server",
    status: "completed",
    startDate: "2024-01-01",
    endDate: "2024-02-28",
  },
];

export const githubStats: GitHubStats = {
  user: {
    name: "Anurag Maurya",
    bio: "DevOps Engineer | AWS & GCP Certified | Cloud Infrastructure & Automation Specialist",
    publicRepos: 22,
    followers: 38,
    following: 45,
    createdAt: "2023-01-15T10:30:00Z",
  },
  repositories: {
    total: 22,
    totalStars: 89,
    totalForks: 27,
    languages: [
      { name: "Java", percentage: 35, color: "#b07219" },
      { name: "Python", percentage: 25, color: "#3572A5" },
      { name: "Shell", percentage: 20, color: "#89e051" },
      { name: "HCL", percentage: 10, color: "#844FBA" }, // Terraform
      { name: "JavaScript", percentage: 7, color: "#f1e05a" },
      { name: "Other", percentage: 3, color: "#6b7280" },
    ],
    topRepos: [
      {
        name: "tastygo-food-ordering",
        description: "Full-stack food ordering app with Docker & CI/CD",
        stars: 18,
        language: "Java",
      },
      {
        name: "eschool-gcp-terraform",
        description: "GCP infrastructure automation with Terraform",
        stars: 15,
        language: "HCL",
      },
      {
        name: "aws-load-balancing",
        description: "AWS auto-scaling and load balancing project",
        stars: 12,
        language: "Shell",
      },
      {
        name: "online-wine-store",
        description: "E-commerce backend with Spring Boot",
        stars: 10,
        language: "Java",
      },
      {
        name: "java-chat-server",
        description: "Real-time chat server with Java Sockets",
        stars: 8,
        language: "Java",
      },
    ],
  },
  activity: [
    {
      type: "PushEvent",
      repo: "strangecodee/aws-monitoring-scripts",
      date: "2024-12-17",
    },
    {
      type: "CreateEvent",
      repo: "strangecodee/kubernetes-learning",
      date: "2024-12-16",
    },
    {
      type: "PushEvent",
      repo: "strangecodee/eschool-gcp-terraform",
      date: "2024-12-15",
    },
    {
      type: "IssuesEvent",
      repo: "strangecodee/tastygo-food-ordering",
      date: "2024-12-14",
    },
    {
      type: "PushEvent",
      repo: "strangecodee/jenkins-pipeline-scripts",
      date: "2024-12-13",
    },
  ],
};

export const certifications = [
  {
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "December 2024",
    credentialId: "AWS-SAA-2024-AM",
    description:
      "Demonstrated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Proficient in AWS services including EC2, S3, RDS, VPC, and security best practices.",
    icon: "☁️",
    color: "text-orange-400",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "September 2024",
    credentialId: "GCP-ACE-2024-AM",
    description:
      "Skilled in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform. Experienced with Compute Engine, Cloud Storage, and networking services.",
    icon: "🌐",
    color: "text-blue-400",
  },
];

// Portfolio data for CommandProcessor
export const portfolioData = {
  about: {
    description:
      "Passionate DevOps Engineer with hands-on experience in cloud infrastructure, containerization, and CI/CD automation. Currently pursuing MCA while working on real-world projects involving AWS, GCP, Docker, and Infrastructure as Code. Proven track record of deploying production applications and implementing automated solutions.",
    specializations: [
      "Cloud Architecture & Migration",
      "Container Orchestration",
      "CI/CD Pipeline Design",
      "Infrastructure as Code",
      "Monitoring & Observability",
      "Security & Compliance",
    ],
    achievements: [
      "AWS Solutions Architect Associate Certified",
      "Google Cloud Associate Cloud Engineer",
      "Deployed 5+ production applications",
      "Implemented CI/CD for multiple projects",
      "Built infrastructure using Terraform",
      "Automated deployment processes",
    ],
  },
  skills: {
    cloudPlatforms: [
      { name: "AWS", level: 85 },
      { name: "Google Cloud Platform", level: 80 },
      { name: "Microsoft Azure", level: 70 },
    ],
    containerization: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "Docker Compose", level: 85 },
    ],
    cicd: [
      { name: "Jenkins", level: 85 },
      { name: "GitHub Actions", level: 80 },
      { name: "GitLab CI", level: 75 },
    ],
    iac: [
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 70 },
      { name: "CloudFormation", level: 65 },
    ],
    monitoring: [
      { name: "CloudWatch", level: 80 },
      { name: "Prometheus", level: 70 },
      { name: "Grafana", level: 65 },
    ],
    programming: [
      { name: "Python", level: 80 },
      { name: "Java", level: 85 },
      { name: "Bash/Shell", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
  },
  experience: [
    {
      position: "AWS Cloud Intern",
      company: "RannLab Technologies Pvt. Ltd.",
      duration: "May 2024 - Aug 2024",
      description:
        "Worked on cloud infrastructure projects, implemented CI/CD pipelines, and gained hands-on experience with AWS services including EC2, S3, RDS, and CloudWatch.",
      technologies: [
        "AWS",
        "Jenkins",
        "Docker",
        "Terraform",
        "Python",
        "Linux",
      ],
    },
    {
      position: "DevOps Enthusiast",
      company: "Self-Learning & Projects",
      duration: "2023 - Present",
      description:
        "Continuously learning and implementing DevOps practices through personal projects. Built and deployed multiple applications using modern DevOps tools and methodologies.",
      technologies: [
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Terraform",
        "Jenkins",
      ],
    },
  ],
  projects: projects,
  certifications: certifications,
  contact: systemInfo.contact,
  githubStats: {
    repositories: githubStats.repositories.total,
    stars: githubStats.repositories.totalStars,
    forks: githubStats.repositories.totalForks,
    contributions: 1247,
  },
};

export const asciiArt = {
  welcome: `
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗              ║
║  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝              ║
║  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗                ║
║  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝                ║
║  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗              ║
║   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝              ║
║                                                                              ║
║                    TO ANURAG'S DEVOPS PORTFOLIO TERMINAL                     ║
║                                                                              ║
║  Type 'help' to get started or explore the available commands below          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝`,

  docker: `
    ##         .
  ## ## ##        ==
 ## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\______ O           __/
 \\    \\         __/
  \\____\\_______/
`,

  kubernetes: `
██╗  ██╗██╗   ██╗██████╗ ███████╗██████╗ ███╗   ██╗███████╗████████╗███████╗███████╗
██║ ██╔╝██║   ██║██╔══██╗██╔════╝██╔══██╗████╗  ██║██╔════╝╚══██╔══╝██╔════╝██╔════╝
█████╔╝ ██║   ██║██████╔╝█████╗  ██████╔╝██╔██╗ ██║█████╗     ██║   █████╗  ███████╗
██╔═██╗ ██║   ██║██╔══██╗██╔══╝  ██╔══██╗██║╚██╗██║██╔══╝     ██║   ██╔══╝  ╚════██║
██║  ██╗╚██████╔╝██████╔╝███████╗██║  ██║██║ ╚████║███████╗   ██║   ███████╗███████║
╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚══════╝                                                                                                                   
`,

  aws: `
 █████╗ ██╗    ██╗███████╗    
██╔══██╗██║    ██║██╔════╝    
███████║██║ █╗ ██║███████╗    
██╔══██║██║███╗██║╚════██║    
██║  ██║╚███╔███╔╝███████║    
╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝    
`,

  terraform: `
    ████████╗███████╗██████╗ ██████╗  █████╗ ███████╗ ██████╗ ██████╗ ███╗   ███╗
    ╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔═══██╗██╔══██╗████╗ ████║
       ██║   █████╗  ██████╔╝██████╔╝███████║█████╗  ██║   ██║██████╔╝██╔████╔██║
       ██║   ██╔══╝  ██╔══██╗██╔══██╗██╔══██║██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║
       ██║   ███████╗██║  ██║██║  ██║██║  ██║██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║
       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝
`,

  jenkins: `
         ██╗███████╗███╗   ██╗██╗  ██╗██╗███╗   ██╗███████╗
         ██║██╔════╝████╗  ██║██║ ██╔╝██║████╗  ██║██╔════╝
         ██║█████╗  ██╔██╗ ██║█████╔╝ ██║██╔██╗ ██║███████╗
    ██╗  ██║██╔══╝  ██║╚██╗██║██╔═██╗ ██║██║╚██╗██║╚════██║
    ╚█████╔╝███████╗██║ ╚████║██║  ██╗██║██║ ╚████║███████║
     ╚════╝ ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝
`,

  about: `
    ╔══════════════════════════════════════════════════════════════════╗
    ║                         ABOUT ANURAG                             ║
    ║                                                                  ║
    ║  🎯 DevOps Engineer & Cloud Enthusiast                          ║
    ║  ☁️  AWS Solutions Architect | GCP Cloud Engineer               ║
    ║  🐳 Docker & Containerization Expert                            ║
    ║  🔧 Infrastructure as Code Specialist                           ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
  `,
};

export const easterEggs = {
  "sudo rm -rf /":
    "Permission denied. Nice try though! 😄 (But seriously, never run this command!)",
  "hack nasa": "Access denied. The FBI is on their way... just kidding! 🚀",
  whoami:
    "You are exploring Anurag Maurya's DevOps portfolio. Welcome! 👋\nI am a DevOps Engineer seeking opportunities in cloud infrastructure and automation.",
  pwd: "/home/anurag/devops-portfolio",
  "ls -la": `
total 42
drwxr-xr-x  8 anurag anurag  4096 Dec 18 09:42 .
drwxr-xr-x  3 root   root    4096 Dec 18 09:42 ..
-rw-r--r--  1 anurag anurag   220 Dec 18 09:42 .bash_logout
-rw-r--r--  1 anurag anurag  3771 Dec 18 09:42 .bashrc
drwxr-xr-x  2 anurag anurag  4096 Dec 18 09:42 .aws/
drwxr-xr-x  2 anurag anurag  4096 Dec 18 09:42 .docker/
-rw-r--r--  1 anurag anurag   807 Dec 18 09:42 .profile
drwxr-xr-x  8 anurag anurag  4096 Dec 18 09:42 projects/
-rw-r--r--  1 anurag anurag  2048 Dec 18 09:42 resume.pdf
drwxr-xr-x  4 anurag anurag  4096 Dec 18 09:42 terraform/
drwxr-xr-x  4 anurag anurag  4096 Dec 18 09:42 jenkins/
-rw-r--r--  1 anurag anurag  1024 Dec 18 09:42 docker-compose.yml
`,
  "docker ps": `
CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                    NAMES
a1b2c3d4e5f6   nginx:latest            "/docker-entrypoint.…"   2 hours ago     Up 2 hours     0.0.0.0:80->80/tcp      web-server
b2c3d4e5f6g7   mysql:8.0               "docker-entrypoint.s…"   2 hours ago     Up 2 hours     3306/tcp                database
c3d4e5f6g7h8   redis:alpine            "docker-entrypoint.s…"   2 hours ago     Up 2 hours     6379/tcp                cache
d4e5f6g7h8i9   jenkins/jenkins:lts     "/sbin/tini -- /usr/…"   3 hours ago     Up 3 hours     0.0.0.0:8080->8080/tcp  ci-cd-server
e5f6g7h8i9j0   tastygo:latest          "java -jar app.jar"      1 hour ago      Up 1 hour      0.0.0.0:3000->3000/tcp  tastygo-app
`,
  "kubectl get pods": `
NAME                                READY   STATUS    RESTARTS   AGE
tastygo-deployment-7d4b8c9f5d-abc   1/1     Running   0          2h
tastygo-deployment-7d4b8c9f5d-def   1/1     Running   0          2h
mysql-deployment-8e5c9d0f6e-789     1/1     Running   0          2h
redis-deployment-9f6d0e1g7f-012     1/1     Running   0          2h
jenkins-deployment-0g7e1f2h8g-345   1/1     Running   0          3h
nginx-ingress-1h8f2g3i9j4k-567      1/1     Running   0          4h
`,
  "aws s3 ls": `
2024-12-15 10:30:45 tastygo-app-assets
2024-12-10 14:22:33 eschool-static-files
2024-12-08 09:15:20 terraform-state-bucket
2024-12-05 16:45:12 jenkins-backup-storage
2024-12-01 11:20:30 cloudwatch-logs-archive
`,
  "terraform plan": `
Terraform will perform the following actions:

  # google_compute_instance.eschool_server will be created
  + resource "google_compute_instance" "eschool_server" {
      + machine_type = "e2-micro"
      + name         = "eschool-web-server"
      + zone         = "us-central1-a"
      + tags         = ["web-server", "http-server", "https-server"]
    }

  # google_dns_record_set.eschool_dns will be created
  + resource "google_dns_record_set" "eschool_dns" {
      + name = "eschool.co.in."
      + type = "A"
    }

Plan: 2 to add, 0 to change, 0 to destroy.

💡 Just kidding! This is a demo portfolio. Real terraform commands are powerful! 😄
`,
  "jenkins build": `
Started by user anurag
Building in workspace /var/jenkins_home/workspace/tastygo-pipeline
[Pipeline] Start of Pipeline
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] git
Cloning the remote Git repository...
Checking out Revision abc123def456 (origin/main)
[Pipeline] } // stage
[Pipeline] stage
[Pipeline] { (Build)
[Pipeline] sh
+ mvn clean compile
+ docker build -t tastygo:latest .
[Pipeline] } // stage
[Pipeline] stage
[Pipeline] { (Test)
[Pipeline] sh
+ mvn test
Tests run: 25, Failures: 0, Errors: 0, Skipped: 0
[Pipeline] } // stage
[Pipeline] stage
[Pipeline] { (Deploy)
[Pipeline] sh
+ docker push registry/tastygo:latest
+ kubectl apply -f k8s/deployment.yaml
deployment.apps/tastygo-deployment configured
[Pipeline] } // stage
[Pipeline] End of Pipeline
Finished: SUCCESS 🚀

Build completed in 3m 42s
`,
  "cat /etc/passwd":
    "root:x:0:0:root:/root:/bin/bash\nanurag:x:1000:1000:Anurag Maurya:/home/anurag:/bin/bash\njenkins:x:1001:1001:Jenkins CI:/var/jenkins_home:/bin/bash",
  "uname -a":
    "Linux devops-portfolio 5.15.0-78-generic #85-Ubuntu SMP Fri Jul 7 15:25:09 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux",
  "ps aux": `
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 168576 11788 ?        Ss   09:42   0:01 /sbin/init
anurag    1337  0.5  2.1 625388 87532 pts/0    Sl+  09:42   0:42 node devops-portfolio
anurag    2024  0.0  0.1  21532  5180 pts/1    Ss   09:42   0:00 bash
docker    3001  0.2  1.5 445672 62144 ?        Ssl  10:00   0:15 dockerd
jenkins   4001  1.2  3.2 892456 131072 ?       Ssl  10:30   0:45 java -jar jenkins.war
terraform 5001  0.1  0.8 234567 32768 ?        S    11:00   0:05 terraform apply
`,
  uptime:
    "up 156 days, 9:42, 1 user, load average: 0.15, 0.10, 0.05\nTime since AWS certification: 18 days\nTime since GCP certification: 109 days",
  date: new Date().toString(),
  fortune:
    "Infrastructure as Code is not just about automation, it's about consistency, reliability, and peace of mind. - DevOps Wisdom",
  "cowsay hello": `
 _______
< hello >
 -------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`,
  docker: asciiArt.docker,
  kubernetes: asciiArt.kubernetes,
  aws: asciiArt.aws,
  terraform: asciiArt.terraform,
  jenkins: asciiArt.jenkins,
};
