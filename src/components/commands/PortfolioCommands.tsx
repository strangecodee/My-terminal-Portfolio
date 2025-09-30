import React from "react";

export const AboutCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-purple-400 font-semibold">👨‍💻 About Me</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="text-gray-300 space-y-2">
        <p>
          Hi! I'm a passionate DevOps Engineer with 5+ years of experience in
          cloud infrastructure, automation, and CI/CD pipelines. I specialize in
          AWS, Kubernetes, Docker, and Infrastructure as Code.
        </p>
        <p>
          My expertise includes building scalable systems, implementing
          monitoring solutions, and ensuring high availability for
          mission-critical applications.
        </p>
        <p>
          When I'm not working with infrastructure, I enjoy contributing to
          open-source projects, learning new technologies, and sharing knowledge
          with the developer community.
        </p>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Passionate about DevOps and cloud technologies
    </div>
  </div>
);

export const SkillsCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-purple-400 font-semibold">🛠️ Technical Skills</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
        <div>
          <h4 className="text-green-400 font-semibold mb-2">Cloud Platforms</h4>
          <ul className="space-y-1 text-sm">
            <li>• AWS (EC2, S3, Lambda, CloudFormation)</li>
            <li>• Google Cloud Platform</li>
            <li>• Azure (basic)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">Containerization</h4>
          <ul className="space-y-1 text-sm">
            <li>• Docker & Docker Compose</li>
            <li>• Kubernetes (EKS, GKE)</li>
            <li>• Helm Charts</li>
          </ul>
        </div>
        <div>
          <h4 className="text-yellow-400 font-semibold mb-2">
            Infrastructure as Code
          </h4>
          <ul className="space-y-1 text-sm">
            <li>• Terraform</li>
            <li>• AWS CloudFormation</li>
            <li>• Ansible</li>
          </ul>
        </div>
        <div>
          <h4 className="text-red-400 font-semibold mb-2">CI/CD & Tools</h4>
          <ul className="space-y-1 text-sm">
            <li>• Jenkins</li>
            <li>• GitLab CI</li>
            <li>• GitHub Actions</li>
            <li>• Monitoring: Prometheus, Grafana</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Always learning and adapting to new technologies
    </div>
  </div>
);

export const ProjectsCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-purple-400 font-semibold">🚀 Featured Projects</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 space-y-4">
      <div className="border-b border-gray-700 pb-3">
        <h4 className="text-green-400 font-semibold">
          Microservices Infrastructure
        </h4>
        <p className="text-gray-300 text-sm mt-1">
          Designed and implemented a complete microservices architecture on AWS
          using Kubernetes, with automated CI/CD pipelines and monitoring.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
            Kubernetes
          </span>
          <span className="bg-orange-900/50 text-orange-300 px-2 py-1 rounded text-xs">
            AWS
          </span>
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
            Jenkins
          </span>
        </div>
      </div>
      <div className="border-b border-gray-700 pb-3">
        <h4 className="text-blue-400 font-semibold">
          Cloud Migration Platform
        </h4>
        <p className="text-gray-300 text-sm mt-1">
          Built an automated platform for migrating legacy applications to
          cloud, reducing migration time by 70% using Infrastructure as Code.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
            Terraform
          </span>
          <span className="bg-orange-900/50 text-orange-300 px-2 py-1 rounded text-xs">
            AWS
          </span>
          <span className="bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded text-xs">
            Python
          </span>
        </div>
      </div>
      <div>
        <h4 className="text-yellow-400 font-semibold">Monitoring Dashboard</h4>
        <p className="text-gray-300 text-sm mt-1">
          Created a comprehensive monitoring solution with custom dashboards,
          alerting, and automated incident response.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-red-900/50 text-red-300 px-2 py-1 rounded text-xs">
            Prometheus
          </span>
          <span className="bg-orange-900/50 text-orange-300 px-2 py-1 rounded text-xs">
            Grafana
          </span>
          <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
            Kubernetes
          </span>
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Check out my GitHub for more projects
    </div>
  </div>
);

export const ContactCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-purple-400 font-semibold">📬 Contact Information</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <div className="space-y-3 text-gray-300">
        <div className="flex items-center space-x-3">
          <span className="text-blue-400">📧</span>
          <span>devops.engineer@example.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-green-400">💼</span>
          <span>LinkedIn: /in/devops-engineer</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-gray-400">🐙</span>
          <span>GitHub: github.com/devops-engineer</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-cyan-400">🐦</span>
          <span>Twitter: @devops_engineer</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-purple-400">📍</span>
          <span>San Francisco, CA</span>
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Feel free to reach out for collaborations
    </div>
  </div>
);

export const ExperienceCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-purple-400 font-semibold">
      💼 Professional Experience
    </div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700 space-y-4">
      <div className="border-b border-gray-700 pb-3">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-green-400 font-semibold">
            Senior DevOps Engineer
          </h4>
          <span className="text-gray-400 text-sm">2022 - Present</span>
        </div>
        <p className="text-blue-300 text-sm mb-2">TechCorp Inc.</p>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Led migration of 50+ applications to Kubernetes</li>
          <li>
            • Implemented GitOps workflows reducing deployment time by 60%
          </li>
          <li>• Built monitoring stack serving 1000+ microservices</li>
        </ul>
      </div>
      <div className="border-b border-gray-700 pb-3">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-blue-400 font-semibold">DevOps Engineer</h4>
          <span className="text-gray-400 text-sm">2020 - 2022</span>
        </div>
        <p className="text-blue-300 text-sm mb-2">CloudTech Solutions</p>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Automated infrastructure provisioning with Terraform</li>
          <li>• Set up CI/CD pipelines for 30+ development teams</li>
          <li>• Reduced infrastructure costs by 40% through optimization</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-yellow-400 font-semibold">
            Systems Administrator
          </h4>
          <span className="text-gray-400 text-sm">2018 - 2020</span>
        </div>
        <p className="text-blue-300 text-sm mb-2">StartupXYZ</p>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Managed AWS infrastructure for production systems</li>
          <li>• Implemented backup and disaster recovery solutions</li>
          <li>• Built internal tools improving team productivity</li>
        </ul>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 5+ years of hands-on DevOps experience
    </div>
  </div>
);
