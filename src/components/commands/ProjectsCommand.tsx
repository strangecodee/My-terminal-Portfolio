import React from "react";
import { Project } from "../../types/terminal";

interface ProjectsCommandProps {
  projects: Project[];
}

export const ProjectsCommand: React.FC<ProjectsCommandProps> = ({
  projects,
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "🚧";
      case "planned":
        return "📋";
      default:
        return "❓";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "in-progress":
        return "text-yellow-400";
      case "planned":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          📁 Available Projects
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={project.id} className="border-l-2 border-teal-400 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">[{project.id}]</span>
                <span className="text-teal-400 font-semibold">
                  {project.name}
                </span>
                <span className={getStatusColor(project.status)}>
                  {getStatusIcon(project.status)} {project.status}
                </span>
              </div>

              <div className="text-gray-300 mb-2">{project.description}</div>

              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-gray-700 text-teal-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs text-gray-400">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <div className="text-sm text-gray-400">
                💡 Type{" "}
                <span className="text-teal-400">project {project.id}</span> or{" "}
                <span className="text-teal-400">
                  project {project.name.toLowerCase().replace(/\s+/g, "-")}
                </span>{" "}
                for details
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          📊 Project Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {projects.length}
            </div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {projects.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {projects.filter((p) => p.status === "in-progress").length}
            </div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-400">
              {new Set(projects.flatMap((p) => p.technologies)).size}
            </div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </div>
      </div>

      <div className="text-gray-400">
        🔍 Use 'project &lt;id&gt;' to view detailed information about a
        specific project.
      </div>
    </div>
  );
};
