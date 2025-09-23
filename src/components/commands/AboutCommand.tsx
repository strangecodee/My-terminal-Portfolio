import React from "react";
import { SystemInfo } from "../../types/terminal";
import { certifications } from "../../data/mockData";

interface AboutCommandProps {
  systemInfo: SystemInfo;
}

export const AboutCommand: React.FC<AboutCommandProps> = ({ systemInfo }) => {
  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded">
        <h2 className="text-xl font-bold text-teal-400 mb-3">
          👨‍💻 System Information - Anurag Maurya
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-2">
              <span className="text-gray-400">OS:</span> {systemInfo.os}
            </div>
            <div className="mb-2">
              <span className="text-gray-400">Shell:</span> {systemInfo.shell}
            </div>
            <div className="mb-2">
              <span className="text-gray-400">User:</span> {systemInfo.user}
            </div>
            <div className="mb-2">
              <span className="text-gray-400">Hostname:</span>{" "}
              {systemInfo.hostname}
            </div>
            <div className="mb-2">
              <span className="text-gray-400">Uptime:</span> {systemInfo.uptime}
            </div>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-400">Email:</span>
              <a
                href={`mailto:${systemInfo.contact.email}`}
                className="text-teal-400 hover:underline ml-1"
              >
                {systemInfo.contact.email}
              </a>
            </div>
            <div className="mb-2">
              <span className="text-gray-400">Phone:</span>
              <a
                href="tel:+919027252715"
                className="text-teal-400 hover:underline ml-1"
              >
                +91 9027252715
              </a>
            </div>
            <div className="mb-2">
              <span className="text-gray-400">Location:</span>{" "}
              {systemInfo.contact.location}
            </div>
            <div className="mb-2">
              <span className="text-gray-400">GitHub:</span>
              <a
                href={systemInfo.contact.github}
                className="text-teal-400 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {systemInfo.contact.github}
              </a>
            </div>
            <div className="mb-2">
              <span className="text-gray-400">LinkedIn:</span>
              <a
                href={systemInfo.contact.linkedin}
                className="text-teal-400 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {systemInfo.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          🎯 Professional Summary
        </h3>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-teal-400">Cloud & DevOps Engineer</strong>{" "}
            with hands-on AWS experience and dual cloud certifications.
            Passionate about infrastructure automation, CI/CD pipelines, and
            scalable cloud solutions. Proven track record in deploying
            production applications with Docker containerization, Terraform IaC,
            and Jenkins automation. Currently seeking opportunities to
            contribute to impactful, scalable projects in dynamic Agile
            environments.
          </p>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          🏆 Professional Certifications
        </h3>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="border-l-2 border-teal-400 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{cert.icon}</span>
                <span className={`font-semibold ${cert.color}`}>
                  {cert.name}
                </span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                  CERTIFIED
                </span>
              </div>
              <div className="text-gray-400 text-sm">
                {cert.issuer} • {cert.date}
              </div>
              <div className="text-gray-500 text-xs">
                Credential ID: {cert.credentialId}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          ☁️ DevOps & Cloud Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {systemInfo.skills.map((skill, index) => (
            <div key={index} className="text-green-400 flex items-center">
              <span className="text-teal-400 mr-2">▶</span>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          💼 Professional Experience
        </h3>
        {systemInfo.experience.map((exp, index) => (
          <div key={index} className="mb-3 border-l-2 border-teal-400 pl-4">
            <div className="text-teal-400 font-semibold">{exp.position}</div>
            <div className="text-gray-300">{exp.company}</div>
            <div className="text-gray-400 text-sm">{exp.duration}</div>
            {exp.company === "RannLab Technologies Pvt. Ltd." && (
              <div className="text-gray-300 text-sm mt-1">
                • Managed AWS cloud infrastructure (EC2, S3, IAM, CloudWatch)
                <br />
                • Built automated alert systems for server monitoring
                <br />
                • Configured CI/CD pipelines in Jenkins for automated deployment
                <br />• Worked on infrastructure automation using Ansible
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">🎓 Education</h3>
        {systemInfo.education.map((edu, index) => (
          <div key={index} className="mb-2 border-l-2 border-teal-400 pl-4">
            <div className="text-teal-400 font-semibold">{edu.degree}</div>
            <div className="text-gray-300">{edu.institution}</div>
            <div className="text-gray-400 text-sm">{edu.year}</div>
          </div>
        ))}
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          📈 Career Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center bg-gray-800 p-3 rounded">
            <div className="text-2xl font-bold text-green-400">4</div>
            <div className="text-sm text-gray-400">Months AWS Experience</div>
          </div>
          <div className="text-center bg-gray-800 p-3 rounded">
            <div className="text-2xl font-bold text-blue-400">2</div>
            <div className="text-sm text-gray-400">Cloud Certifications</div>
          </div>
          <div className="text-center bg-gray-800 p-3 rounded">
            <div className="text-2xl font-bold text-orange-400">5+</div>
            <div className="text-sm text-gray-400">DevOps Projects</div>
          </div>
        </div>
      </div>

      <div className="text-gray-400 mt-4">
        💡 Use 'projects' to explore my DevOps work, 'skills' for detailed tech
        stack, 'certifications' for credentials, or 'contact' to get in touch!
      </div>
    </div>
  );
};
