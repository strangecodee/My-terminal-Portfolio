import React from "react";
import { certifications } from "../../data/mockData";

export const CertificationsCommand: React.FC = () => {
  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded-sm">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          🏆 Professional Certifications
        </h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border border-gray-600 p-4 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${cert.color} mb-2`}>
                    {cert.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Issuer:</span>
                      <span className="text-gray-300">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Issued:</span>
                      <span className="text-gray-300">{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Credential ID:</span>
                      <span className="text-gray-300 font-mono text-sm">
                        {cert.credentialId}
                      </span>
                    </div>
                  </div>

                  {cert.name.includes("AWS") && (
                    <div className="mt-3 p-3 bg-gray-800 rounded-sm">
                      <h4 className="text-teal-400 font-semibold mb-2">
                        Key Competencies:
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Design and deploy scalable AWS architectures</li>
                        <li>
                          • Implement security best practices and compliance
                        </li>
                        <li>
                          • Optimize costs and performance in cloud environments
                        </li>
                        <li>
                          • Design fault-tolerant and highly available systems
                        </li>
                        <li>
                          • Select appropriate AWS services for specific use
                          cases
                        </li>
                      </ul>
                    </div>
                  )}

                  {cert.name.includes("Google Cloud") && (
                    <div className="mt-3 p-3 bg-gray-800 rounded-sm">
                      <h4 className="text-teal-400 font-semibold mb-2">
                        Key Competencies:
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Deploy and manage Google Cloud infrastructure</li>
                        <li>
                          • Configure access and security for cloud resources
                        </li>
                        <li>• Monitor and maintain cloud solutions</li>
                        <li>• Implement data storage and database solutions</li>
                        <li>• Configure network services and load balancing</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          📈 Certification Journey
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="text-gray-300">
              <strong>December 2024:</strong> Achieved AWS Solutions Architect
              Associate certification
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="text-gray-300">
              <strong>September 2024:</strong> Earned Google Cloud Associate
              Cloud Engineer certification
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="text-gray-300">
              <strong>Future Goals:</strong> Planning to pursue Kubernetes (CKA)
              and DevOps certifications
            </div>
          </div>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          🎯 Certification Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-3 rounded-sm">
            <h4 className="text-orange-400 font-semibold mb-2">
              AWS Expertise
            </h4>
            <p className="text-gray-300 text-sm">
              Validates ability to design and deploy scalable, highly available
              systems on AWS. Demonstrates proficiency in cloud architecture
              best practices and cost optimization.
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded-sm">
            <h4 className="text-blue-400 font-semibold mb-2">
              GCP Proficiency
            </h4>
            <p className="text-gray-300 text-sm">
              Confirms skills in deploying applications, monitoring operations,
              and managing enterprise solutions on Google Cloud Platform.
            </p>
          </div>
        </div>
      </div>

      <div className="text-gray-400">
        💡 These certifications validate my cloud expertise and commitment to
        continuous learning in DevOps and cloud technologies.
      </div>
    </div>
  );
};
