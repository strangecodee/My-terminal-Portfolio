import React from "react";
import { portfolioData } from "../../data/mockData";

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

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded-sm">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          💼 Professional Experience
        </h2>

        {portfolioData.experience.map((exp, index) => (
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

            <div className="space-y-4">
              <div className="bg-gray-800 p-3 rounded-sm">
                <h4 className="text-teal-400 font-semibold mb-2">
                  Role Overview
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div>
                <h4 className="text-teal-400 font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-teal-300 px-2 py-1 rounded-sm text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
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

      <div className="border border-green-400 p-4 rounded-sm">
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
