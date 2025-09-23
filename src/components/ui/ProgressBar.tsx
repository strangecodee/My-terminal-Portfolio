import React from "react";

interface ProgressBarProps {
  progress: number;
  message?: string;
  style?: "default" | "terminal" | "download" | "loading";
  showPercentage?: boolean;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  message,
  style = "default",
  showPercentage = true,
  animated = true,
}) => {
  const getProgressBar = (percentage: number) => {
    const filled = Math.round(percentage / 2); // Scale to 50 chars
    const empty = 50 - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  };

  if (style === "terminal") {
    return (
      <div className="space-y-2">
        {message && <div className="text-teal-400">{message}</div>}
        <div className="font-mono text-green-400">
          [{getProgressBar(progress)}]{" "}
          {showPercentage && `${Math.round(progress)}%`}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {message && <div className="text-gray-300">{message}</div>}
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`bg-teal-500 h-2 rounded-full transition-all duration-300 ${
            animated ? "ease-out" : ""
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {showPercentage && (
        <div className="text-right text-sm text-gray-400">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};
