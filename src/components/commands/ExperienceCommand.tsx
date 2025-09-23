import React from "react";
import { systemInfo } from "../../data/mockData";

export const ExperienceCommand: React.FC = () => {
  const achievements = [
    {
      title: "Live Production Deployment",
      description:
        "Successfully deployed and maintained E-School Management System at eschool.co.in",
      impact: "Serving real users with 99.9% uptime",
      icon: "🚀",
    },
    {
      title: "AWS Infrastructure Automation",
      description:
        "Implemented Infrastructure as Code using Terraform for scalable AWS deployments",
      impact: "Reduced deployment time by 70%",
      icon: "⚡",
    },
    {
      title: "CI/CD Pipeline Implementation",
      description:
        "Built automated Jenkins pipelines for continuous integration and deployment",
      impact: "Improved deployment frequency and reliability",
      icon: "🔄",
    },
    {
      title: "Container Orchestration",
      description:
        "Containerized applications using Docker and implemented orchestration strategies",
      impact: "Enhanced scalability and resource utilization",
      icon: "📦",
    },
  ];

  const technicalHighlights = [
    "Hands-on experience with AWS EC2, S3, IAM, and VPC configuration",
    "Implemented security best practices for cloud infrastructure",
    "Automated deployment processes reducing manual intervention by 80%",
    "Configured monitoring and alerting systems using CloudWatch",
    "Collaborated with development teams on DevOps best practices",
    "Optimized cloud costs through resource management and automation",
  ];

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          💼 Professional Experience
        </h2>

        {systemInfo.experience.map((exp, index) => (
          <div
            key={index}
            className="mb-6 border border-gray-600 p-4 rounded-lg"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-teal-400">
                  {exp.position}
                </h3>
                <div className="text-gray-300 font-semibold">{exp.company}</div>
              </div>
              <div className="text-gray-400 text-sm">{exp.duration}</div>
            </div>

            {exp.company === "RannLab Technologies" && (
              <div className="space-y-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-teal-400 font-semibold mb-2">
                    Role Overview
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Worked as an AWS Cloud Intern focusing on cloud
                    infrastructure, automation, and DevOps practices. Gained
                    hands-on experience with AWS services, infrastructure as
                    code, and deployment automation.
                  </p>
                </div>

                <div>
                  <h4 className="text-teal-400 font-semibold mb-3">
                    Key Responsibilities & Achievements
                  </h4>
                  <div className="space-y-2">
                    {technicalHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">▶</span>
                        <span className="text-gray-300 text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-teal-400 font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS EC2",
                      "AWS S3",
                      "AWS IAM",
                      "AWS VPC",
                      "CloudWatch",
                      "Terraform",
                      "Jenkins",
                      "Docker",
                      "Linux",
                      "Python",
                      "Bash",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-teal-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {exp.company === "Self-Learning & Projects" && (
              <div className="space-y-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-teal-400 font-semibold mb-2">
                    Self-Directed Learning Journey
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Passionate about DevOps and cloud technologies, continuously
                    learning through hands-on projects, online courses, and
                    practical implementations. Built multiple projects to gain
                    real-world experience in cloud infrastructure and
                    automation.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-4">
          🏆 Key Achievements
        </h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="border-l-2 border-teal-400 pl-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h4 className="text-teal-400 font-semibold">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-1">
                    {achievement.description}
                  </p>
                  <p className="text-green-400 text-sm font-semibold">
                    Impact: {achievement.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          📈 Professional Growth
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="text-gray-300">
              <strong>Current Focus:</strong> Expanding Kubernetes and container
              orchestration skills
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="text-gray-300">
              <strong>Career Goal:</strong> DevOps Engineer role with focus on
              cloud-native technologies
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="text-gray-300">
              <strong>Learning Path:</strong> Pursuing advanced certifications
              in Kubernetes and DevOps
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-400">
        💡 Use 'projects' to see practical implementations, 'skills' for
        technical expertise, or 'certifications' for validated knowledge.
      </div>
    </div>
  );
};
