import React from "react";
import { systemInfo } from "../../data/mockData";

export const SkillsCommand: React.FC = () => {
  const skillCategories = {
    "Cloud Platforms": [
      {
        name: "Amazon Web Services (AWS)",
        level: 85,
        description: "EC2, S3, IAM, VPC, CloudWatch, Lambda",
      },
      {
        name: "Google Cloud Platform (GCP)",
        level: 75,
        description: "Compute Engine, Cloud Storage, IAM, Networking",
      },
    ],
    "DevOps Tools": [
      {
        name: "Docker & Containerization",
        level: 80,
        description:
          "Container orchestration, Docker Compose, multi-stage builds",
      },
      {
        name: "Jenkins CI/CD",
        level: 75,
        description: "Pipeline automation, build & deployment workflows",
      },
      {
        name: "Terraform",
        level: 70,
        description: "Infrastructure as Code, AWS resource provisioning",
      },
    ],
    "Programming & Scripting": [
      {
        name: "Python",
        level: 75,
        description: "Automation scripts, AWS SDK, data processing",
      },
      {
        name: "Bash Scripting",
        level: 80,
        description: "System administration, deployment automation",
      },
      {
        name: "JavaScript",
        level: 70,
        description: "Web development, Node.js, React applications",
      },
    ],
    "System Administration": [
      {
        name: "Linux Administration",
        level: 85,
        description: "Ubuntu, CentOS, system monitoring, security",
      },
      {
        name: "Networking",
        level: 70,
        description: "VPC, subnets, security groups, load balancing",
      },
      {
        name: "Monitoring & Logging",
        level: 75,
        description: "CloudWatch, system metrics, log analysis",
      },
    ],
    "Web Technologies": [
      {
        name: "HTML/CSS",
        level: 80,
        description: "Responsive design, modern CSS frameworks",
      },
      {
        name: "React.js",
        level: 70,
        description: "Component development, state management",
      },
      {
        name: "Git & GitHub",
        level: 85,
        description: "Version control, collaboration, CI/CD integration",
      },
    ],
  };

  const getSkillBar = (level: number) => {
    const filled = Math.round(level / 5); // Scale to 20 chars
    const empty = 20 - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  };

  const getSkillColor = (level: number) => {
    if (level >= 80) return "text-green-400";
    if (level >= 70) return "text-yellow-400";
    if (level >= 60) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          🛠️ Technical Skills Matrix
        </h2>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-bold text-teal-400 mb-3">{category}</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="border-l-2 border-gray-600 pl-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 font-semibold">
                      {skill.name}
                    </span>
                    <span className={`text-sm ${getSkillColor(skill.level)}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="font-mono text-sm mb-2">
                    <span className={getSkillColor(skill.level)}>
                      {getSkillBar(skill.level)}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          📊 Skill Level Legend
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded"></div>
            <span className="text-sm text-gray-300">Expert (80%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded"></div>
            <span className="text-sm text-gray-300">Proficient (70-79%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded"></div>
            <span className="text-sm text-gray-300">Intermediate (60-69%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded"></div>
            <span className="text-sm text-gray-300">Beginner (50-59%)</span>
          </div>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          🚀 Currently Learning
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="text-yellow-400 font-semibold mb-2">Kubernetes</h4>
            <p className="text-gray-300 text-sm">
              Container orchestration, pod management, services, and deployments
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="text-blue-400 font-semibold mb-2">Ansible</h4>
            <p className="text-gray-300 text-sm">
              Configuration management and infrastructure automation
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="text-purple-400 font-semibold mb-2">
              Prometheus & Grafana
            </h4>
            <p className="text-gray-300 text-sm">
              Advanced monitoring, alerting, and visualization
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="text-green-400 font-semibold mb-2">GitLab CI/CD</h4>
            <p className="text-gray-300 text-sm">
              Advanced pipeline automation and GitOps practices
            </p>
          </div>
        </div>
      </div>

      <div className="text-gray-400">
        💡 Use 'projects' to see these skills in action, 'certifications' for
        validated expertise, or 'experience' for professional background.
      </div>
    </div>
  );
};
