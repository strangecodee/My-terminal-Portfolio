import React from "react";
import type { Project } from "../../types/terminal";

interface ProjectDetailCommandProps {
  project: Project;
}

export const ProjectDetailCommand: React.FC<ProjectDetailCommandProps> = ({
  project,
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
      <div className="border border-green-400 p-4 rounded-sm">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-bold text-teal-400">{project.name}</h2>
          <span className={`${getStatusColor(project.status)} font-semibold`}>
            {getStatusIcon(project.status)} {project.status.toUpperCase()}
          </span>
        </div>

        <div className="text-gray-300 mb-4 leading-relaxed">
          {project.longDescription}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-teal-400 font-semibold mb-2">📅 Timeline</h3>
            <div className="text-gray-300">
              <div>
                Started: {new Date(project.startDate).toLocaleDateString()}
              </div>
              {project.endDate && (
                <div>
                  Completed: {new Date(project.endDate).toLocaleDateString()}
                </div>
              )}
              {project.status === "in-progress" && (
                <div className="text-yellow-400">Currently in development</div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-teal-400 font-semibold mb-2">🔗 Links</h3>
            <div className="space-y-1">
              {project.githubUrl && (
                <div>
                  <span className="text-gray-400">GitHub:</span>{" "}
                  <a
                    href={project.githubUrl}
                    className="text-teal-400 hover:underline"
                  >
                    {project.githubUrl}
                  </a>
                </div>
              )}
              {project.liveUrl && (
                <div>
                  <span className="text-gray-400">Live Demo:</span>{" "}
                  <a
                    href={project.liveUrl}
                    className="text-teal-400 hover:underline"
                  >
                    {project.liveUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-teal-400 font-semibold mb-2">
            🛠️ Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-teal-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-teal-400 font-semibold mb-2">🎯 Key Features</h3>
          <div className="text-gray-300">
            {project.name === "E-Commerce Platform" && (
              <ul className="list-disc list-inside space-y-1">
                <li>User authentication and authorization</li>
                <li>Product catalog with search and filtering</li>
                <li>Shopping cart and checkout process</li>
                <li>Payment integration with Stripe</li>
                <li>Order management and tracking</li>
                <li>Admin dashboard for inventory management</li>
                <li>Responsive design for mobile and desktop</li>
              </ul>
            )}
            {project.name === "Task Management App" && (
              <ul className="list-disc list-inside space-y-1">
                <li>Real-time collaboration with Socket.io</li>
                <li>Drag-and-drop task management</li>
                <li>Team workspaces and project boards</li>
                <li>File attachments and comments</li>
                <li>Deadline notifications and reminders</li>
                <li>User roles and permissions</li>
                <li>Activity tracking and reporting</li>
              </ul>
            )}
            {project.name === "Weather Dashboard" && (
              <ul className="list-disc list-inside space-y-1">
                <li>Current weather conditions display</li>
                <li>7-day weather forecast</li>
                <li>Interactive weather maps</li>
                <li>Historical weather data charts</li>
                <li>Location-based weather alerts</li>
                <li>Customizable dashboard widgets</li>
                <li>Data visualization with D3.js</li>
              </ul>
            )}
            {project.name === "AI Chat Bot" && (
              <ul className="list-disc list-inside space-y-1">
                <li>Natural language processing</li>
                <li>Context-aware conversations</li>
                <li>Machine learning model training</li>
                <li>Multi-language support</li>
                <li>Conversation history and analytics</li>
                <li>Integration with external APIs</li>
                <li>Real-time chat interface</li>
              </ul>
            )}
            {project.name === "Portfolio Terminal" && (
              <ul className="list-disc list-inside space-y-1">
                <li>Interactive command-line interface</li>
                <li>Command history and autocomplete</li>
                <li>GitHub API integration</li>
                <li>Typing animations and sound effects</li>
                <li>Theme switching capabilities</li>
                <li>Easter eggs and fun commands</li>
                <li>Responsive terminal design</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-gray-400">
        💡 Use 'projects' to go back to the project list or 'github-stats' to
        see my GitHub activity.
      </div>
    </div>
  );
};
