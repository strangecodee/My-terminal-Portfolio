import React, { useState, useEffect } from "react";

export const DownloadCommand: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);

  const startDownload = () => {
    setIsDownloading(true);
    setProgress(0);
    setIsCompleted(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15 + 5; // Random increment between 5-20%
        const newProgress = Math.min(prev + increment, 100);

        // Simulate varying download speeds
        setDownloadSpeed(Math.random() * 500 + 200); // 200-700 KB/s

        if (newProgress >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setIsCompleted(true);

          // Simulate actual file download
          const link = document.createElement("a");
          link.href = "/resume.pdf"; // This would be a real file in production
          link.download = "Alex_Developer_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  };

  const getProgressBar = (percentage: number) => {
    const filled = Math.round(percentage / 2); // Scale to 50 chars
    const empty = 50 - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  };

  if (isCompleted) {
    return (
      <div className="space-y-4 text-green-400">
        <div className="border border-green-400 p-4 rounded">
          <h2 className="text-xl font-bold text-teal-400 mb-4">
            ✅ Download Complete!
          </h2>

          <div className="space-y-3">
            <div className="text-gray-300">
              📄 <strong>Alex_Developer_Resume.pdf</strong> has been downloaded
              successfully!
            </div>

            <div className="bg-gray-800 p-3 rounded font-mono text-sm">
              <div className="text-green-400">
                [████████████████████████████████████████████████] 100%
              </div>
              <div className="text-gray-400 mt-1">
                File size: 2.4 MB • Download time: {Math.round(progress / 10)}s
              </div>
            </div>

            <div className="border-t border-gray-600 pt-3">
              <h3 className="text-teal-400 font-semibold mb-2">
                📋 Resume Highlights
              </h3>
              <ul className="text-gray-300 space-y-1">
                <li>• 5+ years of full-stack development experience</li>
                <li>• Expertise in React, Node.js, TypeScript, and Python</li>
                <li>• Led development of 15+ successful web applications</li>
                <li>• Experience with cloud platforms (AWS, GCP) and DevOps</li>
                <li>
                  • Strong background in agile development and team leadership
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-gray-400">
          💡 Check your Downloads folder for the PDF file. Use 'contact' if you
          have any questions!
        </div>
      </div>
    );
  }

  if (isDownloading) {
    return (
      <div className="space-y-4 text-green-400">
        <div className="border border-green-400 p-4 rounded">
          <h2 className="text-xl font-bold text-teal-400 mb-4">
            📥 Downloading Resume...
          </h2>

          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded font-mono text-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Alex_Developer_Resume.pdf</span>
                <span className="text-teal-400">{Math.round(progress)}%</span>
              </div>

              <div className="text-green-400 mb-2">
                [{getProgressBar(progress)}]
              </div>

              <div className="flex justify-between text-gray-400 text-xs">
                <span>Speed: {downloadSpeed.toFixed(0)} KB/s</span>
                <span>Size: 2.4 MB</span>
                <span>
                  ETA: {Math.max(0, Math.round((100 - progress) / 10))}s
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-teal-400">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-teal-400"></div>
              <span>Preparing download...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          📄 Resume Download
        </h2>

        <div className="space-y-4">
          <div className="text-gray-300">
            Ready to download my resume? This PDF contains my complete
            professional background, technical skills, project experience, and
            contact information.
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-teal-400 font-semibold mb-2">
              📋 What's Included:
            </h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Professional summary and objective</li>
              <li>• Technical skills and proficiencies</li>
              <li>• Work experience with detailed achievements</li>
              <li>• Education and certifications</li>
              <li>• Notable projects and contributions</li>
              <li>• Contact information and references</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-teal-400 font-semibold mb-2">
              📊 File Details:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Format:</span> PDF
              </div>
              <div>
                <span className="text-gray-400">Size:</span> 2.4 MB
              </div>
              <div>
                <span className="text-gray-400">Pages:</span> 2
              </div>
              <div>
                <span className="text-gray-400">Updated:</span> Sep 2023
              </div>
            </div>
          </div>

          <button
            onClick={startDownload}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded font-semibold transition-colors flex items-center gap-2"
          >
            <span>📥</span>
            Download Resume (PDF)
          </button>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          🤝 Let's Connect
        </h3>
        <div className="text-gray-300 space-y-2">
          <p>
            After reviewing my resume, I'd love to discuss how my skills and
            experience can contribute to your team's success.
          </p>
          <div className="flex flex-wrap gap-4 mt-3">
            <span className="text-teal-400">💼 LinkedIn:</span>
            <a
              href="https://linkedin.com/in/developer"
              className="text-teal-400 hover:underline"
            >
              linkedin.com/in/developer
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="text-teal-400">📧 Email:</span>
            <a
              href="mailto:developer@portfolio.dev"
              className="text-teal-400 hover:underline"
            >
              developer@portfolio.dev
            </a>
          </div>
        </div>
      </div>

      <div className="text-gray-400">
        💡 Use 'contact' to send me a message directly, or 'about' to learn more
        about my background.
      </div>
    </div>
  );
};
