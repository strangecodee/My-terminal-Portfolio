import React, { useState, useEffect } from "react";
import type { CommandOutput } from "../types/terminal";
import { useTerminal } from "../hooks/useTerminal";

interface OutputDisplayProps {
  outputs: CommandOutput[];
  typingEnabled?: boolean;
}

export const OutputDisplay: React.FC<OutputDisplayProps> = ({
  outputs,
  typingEnabled = true,
}) => {
  const { state } = useTerminal();
  const [visibleOutputs, setVisibleOutputs] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Animate new outputs with staggered timing
    outputs.forEach((output, index) => {
      if (!visibleOutputs.has(output.id)) {
        setTimeout(() => {
          setVisibleOutputs((prev) => new Set([...prev, output.id]));
        }, index * 150);
      }
    });
  }, [outputs.length]);

  return (
    <div className="space-y-4 sm:space-y-6">
      {outputs.map((output, index) => {
        const isVisible = visibleOutputs.has(output.id);

        return (
          <div
            key={output.id}
            className={`space-y-2 sm:space-y-3 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            {/* Enhanced responsive command input echo */}
            <div
              className={`flex items-start sm:items-center font-mono p-2 sm:p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] animate-slide-in-left ${
                state.theme === "dark"
                  ? "text-green-400 bg-gray-800/20 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/30"
                  : "text-ubuntu-dark bg-white/30 border border-ubuntu-border/30 hover:border-ubuntu-border/50 hover:bg-white/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start sm:items-center flex-wrap flex-1 min-w-0">
                {/* Responsive terminal prompt in output */}
                <div className="flex items-center flex-shrink-0 text-xs sm:text-sm">
                  <span
                    className={`transition-all duration-300 hover:animate-pulse ${
                      state.theme === "dark"
                        ? "text-teal-400"
                        : "text-ubuntu-accent"
                    }`}
                  >
                    <span className="hidden sm:inline">
                      anurag@devops-portfolio
                    </span>
                    <span className="sm:hidden">anurag</span>
                  </span>
                  <span
                    className={`mx-1 animate-fade-blink ${
                      state.theme === "dark" ? "text-white" : "text-ubuntu-dark"
                    }`}
                  >
                    :
                  </span>
                  <span
                    className={`transition-all duration-300 hover:animate-pulse ${
                      state.theme === "dark"
                        ? "text-blue-400"
                        : "text-ubuntu-purple"
                    }`}
                  >
                    <span className="hidden md:inline">~/devops-portfolio</span>
                    <span className="md:hidden">~</span>
                  </span>
                  <span
                    className={`mx-1 animate-fade-blink ${
                      state.theme === "dark" ? "text-white" : "text-ubuntu-dark"
                    }`}
                  >
                    $
                  </span>
                </div>

                {/* Command text with responsive wrapping */}
                <span className="ml-2 font-medium animate-typewriter text-xs sm:text-sm break-all">
                  {output.command}
                </span>
              </div>

              {/* Responsive command timestamp */}
              <div
                className={`ml-auto text-xs px-2 sm:px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 animate-fade-in flex-shrink-0 mt-1 sm:mt-0 ${
                  state.theme === "dark"
                    ? "text-gray-400 bg-gray-700/50 hover:bg-gray-700/70"
                    : "text-ubuntu-muted bg-ubuntu-light/50 hover:bg-ubuntu-light/70"
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="animate-pulse">🕐</span>
                  <span className="hidden sm:inline">
                    {output.timestamp.toLocaleTimeString()}
                  </span>
                  <span className="sm:hidden">
                    {output.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced responsive command output */}
            <div
              className={`pl-2 sm:pl-4 transition-all duration-300 animate-slide-in-right ${
                state.theme === "dark" ? "text-green-400" : "text-ubuntu-dark"
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div
                className={`p-3 sm:p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-[1.005] animate-content-reveal overflow-x-auto ${
                  state.theme === "dark"
                    ? "bg-black/20 border-gray-700/30 hover:border-gray-600/50 hover:bg-black/30"
                    : "bg-white/50 border-ubuntu-border/30 shadow-sm hover:border-ubuntu-border/50 hover:bg-white/70"
                }`}
              >
                <div className="text-xs sm:text-sm leading-relaxed">
                  {output.output}
                </div>
              </div>
            </div>

            {/* Enhanced responsive execution status */}
            {output.executionTime && (
              <div
                className={`flex flex-col sm:flex-row sm:items-center justify-between text-xs pl-2 sm:pl-4 gap-2 sm:gap-0 animate-fade-in-up ${
                  state.theme === "dark" ? "text-gray-500" : "text-ubuntu-muted"
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-success-pulse flex-shrink-0 ${
                      state.theme === "dark"
                        ? "bg-green-400"
                        : "bg-ubuntu-accent"
                    }`}
                  ></div>
                  <span className="animate-fade-in">
                    Command executed successfully
                  </span>
                </div>
                <div
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs transition-all duration-300 hover:scale-110 animate-slide-in-right self-start sm:self-auto ${
                    state.theme === "dark"
                      ? "bg-gray-700/50 text-gray-400 hover:bg-gray-700/70"
                      : "bg-ubuntu-light/50 text-ubuntu-muted border border-ubuntu-border/30 hover:bg-ubuntu-light/70"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="animate-spin-slow">⚡</span>
                    <span>{output.executionTime}ms</span>
                  </div>
                </div>
              </div>
            )}

            {/* Responsive separator line */}
            {index < outputs.length - 1 && (
              <div
                className={`border-b opacity-20 transition-all duration-500 animate-expand-width mx-2 sm:mx-0 ${
                  state.theme === "dark"
                    ? "border-gray-600"
                    : "border-ubuntu-border"
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
