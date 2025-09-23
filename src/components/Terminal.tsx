import React, { useEffect, useRef, useState } from "react";
import { useTerminal } from "../hooks/useTerminal";
import { CommandProcessor } from "./CommandProcessor";
import { CommandLine } from "./CommandLine";
import { OutputDisplay } from "./OutputDisplay";
import { asciiArt } from "../data/mockData";

export const Terminal: React.FC = () => {
  const {
    state,
    addToHistory,
    addOutput,
    clearHistory,
    setProcessing,
    setTheme,
  } = useTerminal();
  const [commandProcessor] = useState(() => new CommandProcessor());
  const terminalRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [bootSequence, setBootSequence] = useState<string[]>([]);

  useEffect(() => {
    // Set initial theme and simulate realistic boot sequence
    document.documentElement.classList.add("dark");

    const bootMessages = [
      "Initializing DevOps Terminal...",
      "Loading system modules...",
      "Mounting file systems...",
      "Starting network services...",
      "Loading AWS CLI...",
      "Loading kubectl...",
      "Loading Docker daemon...",
      "Loading Terraform...",
      "Initializing portfolio data...",
      "System ready!",
    ];

    let messageIndex = 0;
    const bootInterval = setInterval(() => {
      if (messageIndex < bootMessages.length) {
        setBootSequence((prev) => [...prev, bootMessages[messageIndex]]);
        setLoadingProgress(((messageIndex + 1) / bootMessages.length) * 100);
        messageIndex++;
      } else {
        clearInterval(bootInterval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 200);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new output is added with smooth animation
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [state.outputHistory]);

  const handleExecuteCommand = async (command: string) => {
    if (!command.trim()) return;

    setShowWelcome(false);
    addToHistory(command);
    setProcessing(true);

    try {
      // Handle special commands that affect terminal state
      if (command.toLowerCase() === "clear") {
        clearHistory();
        setShowWelcome(false);
        setProcessing(false);
        return;
      }

      if (command.toLowerCase().startsWith("theme ")) {
        const theme = command.split(" ")[1];
        if (theme === "light" || theme === "dark") {
          setTheme(theme);
        }
      }

      const result = await commandProcessor.processCommand(command);

      if (result.output !== null) {
        addOutput(command, result.output, result.executionTime);
      }
    } catch (error) {
      addOutput(
        command,
        <div className="text-red-400 animate-shake">
          <div className="flex items-center gap-2">
            <span className="animate-pulse">❌</span>
            Error:{" "}
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </div>
        </div>
      );
    } finally {
      setProcessing(false);
    }
  };

  const handleThemeToggle = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden px-4">
        {/* Enhanced animated background particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 max-w-sm sm:max-w-md mx-auto w-full">
          {/* Enhanced responsive loading spinner */}
          <div className="relative mb-6 sm:mb-8">
            <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-4 border-teal-400/30 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-400 animate-spin-fast"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Responsive progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full transition-all duration-300 ease-out animate-shimmer shadow-lg"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>

          {/* Responsive boot sequence messages */}
          <div className="space-y-2 font-mono text-xs sm:text-sm">
            {bootSequence.map((message, index) => (
              <div
                key={index}
                className="text-teal-400 animate-fade-in-up flex items-center gap-2 justify-center sm:justify-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="animate-pulse flex-shrink-0">▶</span>
                <span className="typewriter text-center sm:text-left break-words">
                  {message}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 text-gray-400 font-mono text-xs animate-pulse">
            Loading Anurag's DevOps Portfolio...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-all duration-700 font-ubuntu animate-fade-in ${
        state.theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-400"
          : "bg-gradient-to-br from-ubuntu-light via-white to-gray-50 text-ubuntu-dark"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6 max-w-7xl">
        {/* Enhanced responsive terminal header */}
        <div
          className={`rounded-t-lg border-2 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-3xl sm:hover:scale-[1.01] ${
            state.theme === "dark"
              ? "border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 shadow-gray-900/50 hover:shadow-teal-500/10"
              : "border-ubuntu-border bg-gradient-to-r from-white to-gray-50 shadow-black/10 hover:shadow-ubuntu-accent/10"
          }`}
        >
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
            {/* Terminal controls - responsive sizing */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer animate-glow-pulse touch-manipulation ${
                  state.theme === "dark"
                    ? "bg-red-500 hover:bg-red-400 shadow-lg shadow-red-500/50"
                    : "bg-ubuntu-close hover:bg-red-400 shadow-lg shadow-red-400/50"
                }`}
                title="Close"
              ></div>
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer animate-glow-pulse touch-manipulation ${
                  state.theme === "dark"
                    ? "bg-yellow-500 hover:bg-yellow-400 shadow-lg shadow-yellow-500/50"
                    : "bg-ubuntu-minimize hover:bg-yellow-400 shadow-lg shadow-yellow-400/50"
                }`}
                title="Minimize"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer animate-glow-pulse touch-manipulation ${
                  state.theme === "dark"
                    ? "bg-green-500 hover:bg-green-400 shadow-lg shadow-green-500/50"
                    : "bg-ubuntu-maximize hover:bg-green-400 shadow-lg shadow-green-400/50"
                }`}
                title="Maximize"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>

            {/* Responsive terminal title */}
            <div
              className={`text-xs sm:text-sm font-mono font-medium px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 hidden sm:flex items-center ${
                state.theme === "dark"
                  ? "text-gray-300 bg-gray-700/50 border border-gray-600 hover:border-teal-400/50"
                  : "text-ubuntu-muted bg-white/70 border border-ubuntu-border shadow-sm hover:border-ubuntu-accent/50"
              }`}
            >
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 animate-heartbeat"></span>
              <span className="hidden md:inline">
                anurag@devops-portfolio: ~/devops-portfolio
              </span>
              <span className="md:hidden">~/devops-portfolio</span>
            </div>

            {/* Enhanced responsive theme toggle */}
            <button
              onClick={handleThemeToggle}
              className={`group px-2 sm:px-3 lg:px-4 py-2 rounded-lg text-xs sm:text-sm font-ubuntu font-medium transition-all duration-300 transform hover:scale-110 active:scale-95 hover:rotate-3 touch-manipulation min-h-[44px] ${
                state.theme === "dark"
                  ? "bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-gray-600 hover:to-gray-500 border border-gray-500 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
                  : "bg-gradient-to-r from-ubuntu-button to-ubuntu-button-hover text-white hover:from-ubuntu-button-hover hover:to-red-600 shadow-lg hover:shadow-xl hover:shadow-ubuntu-accent/30"
              }`}
              aria-label={`Switch to ${
                state.theme === "dark" ? "light" : "dark"
              } theme`}
            >
              <span className="flex items-center gap-1 sm:gap-2">
                <span className="animate-spin-slow text-base sm:text-lg">
                  {state.theme === "dark" ? "☀️" : "🌙"}
                </span>
                <span className="hidden sm:inline group-hover:animate-pulse">
                  {state.theme === "dark" ? "Light" : "Dark"}
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced responsive terminal body */}
        <div
          ref={terminalRef}
          className={`rounded-b-lg border-2 border-t-0 p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm overflow-y-auto shadow-2xl backdrop-blur-sm transition-all duration-500 ${
            state.theme === "dark"
              ? "border-gray-600 bg-gradient-to-b from-black to-gray-900 shadow-gray-900/50"
              : "border-ubuntu-border bg-gradient-to-b from-white to-gray-50 shadow-black/10"
          }`}
          style={{
            height: "calc(100vh - 140px)",
            minHeight: "400px",
            maxHeight: "800px",
          }}
        >
          {/* Enhanced responsive welcome message */}
          {showWelcome && (
            <div className="mb-6 sm:mb-8 animate-slide-up-stagger">
              <pre
                className={`text-xs leading-tight mb-4 sm:mb-6 transition-colors duration-500 animate-typewriter overflow-x-auto ${
                  state.theme === "dark"
                    ? "text-teal-400"
                    : "text-ubuntu-accent"
                }`}
              >
                {asciiArt.welcome}
              </pre>
              <div
                className={`space-y-3 sm:space-y-4 ${
                  state.theme === "dark" ? "text-gray-300" : "text-ubuntu-muted"
                }`}
              >
                <h1
                  className="text-base sm:text-lg lg:text-xl font-medium animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  Welcome to Anurag Maurya's DevOps Portfolio Terminal!
                </h1>

                {/* Responsive certification badges */}
                <div
                  className="flex flex-col sm:flex-row flex-wrap gap-2 animate-fade-in-up"
                  style={{ animationDelay: "0.7s" }}
                >
                  <span
                    className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium animate-bounce-gentle text-center sm:text-left ${
                      state.theme === "dark"
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                        : "bg-ubuntu-accent/10 text-ubuntu-accent border border-ubuntu-accent/30"
                    }`}
                  >
                    🚀 AWS Certified Solutions Architect
                  </span>
                  <span
                    className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium animate-bounce-gentle text-center sm:text-left ${
                      state.theme === "dark"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-ubuntu-purple/10 text-ubuntu-purple border border-ubuntu-purple/30"
                    }`}
                    style={{ animationDelay: "0.2s" }}
                  >
                    🌐 GCP Associate Cloud Engineer
                  </span>
                </div>

                <p
                  className="animate-fade-in-up text-sm sm:text-base"
                  style={{ animationDelay: "0.9s" }}
                >
                  Type{" "}
                  <kbd
                    className={`px-2 py-1 rounded font-semibold transition-all duration-300 hover:scale-110 animate-glow touch-manipulation ${
                      state.theme === "dark"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:bg-teal-500/30"
                        : "bg-ubuntu-accent/10 text-ubuntu-accent border border-ubuntu-accent/30 hover:bg-ubuntu-accent/20"
                    }`}
                  >
                    'help'
                  </kbd>{" "}
                  to see available commands or try these popular ones:
                </p>

                {/* Responsive command buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-3 mt-4">
                  {[
                    "about",
                    "skills",
                    "projects",
                    "certifications",
                    "docker ps",
                  ].map((cmd, index) => (
                    <button
                      key={cmd}
                      onClick={() => handleExecuteCommand(cmd)}
                      className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-fade-in-up hover:animate-pulse touch-manipulation min-h-[44px] ${
                        state.theme === "dark"
                          ? "text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-400/70 hover:shadow-lg hover:shadow-teal-400/20"
                          : "text-ubuntu-accent hover:bg-ubuntu-accent/20 border border-ubuntu-accent/30 hover:border-ubuntu-accent/70 hover:shadow-lg hover:shadow-ubuntu-accent/20"
                      }`}
                      style={{ animationDelay: `${1.1 + index * 0.1}s` }}
                      aria-label={`Execute ${cmd} command`}
                    >
                      • {cmd}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Responsive command history */}
          <OutputDisplay outputs={state.outputHistory} typingEnabled={true} />

          {/* Responsive current command input */}
          <div className="mt-4 sm:mt-6 animate-slide-in-bottom">
            <CommandLine
              onExecuteCommand={handleExecuteCommand}
              disabled={state.isProcessingCommand}
            />
          </div>

          {/* Enhanced responsive processing indicator */}
          {state.isProcessingCommand && (
            <div
              className={`flex items-center mt-4 p-3 sm:p-4 rounded-lg backdrop-blur-sm animate-fade-in-up ${
                state.theme === "dark"
                  ? "text-teal-400 bg-teal-500/10 border border-teal-500/30 shadow-lg shadow-teal-500/20"
                  : "text-ubuntu-accent bg-ubuntu-accent/10 border border-ubuntu-accent/30 shadow-lg shadow-ubuntu-accent/20"
              }`}
            >
              <div className="relative mr-3 sm:mr-4 flex-shrink-0">
                <div
                  className={`animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-2 border-transparent ${
                    state.theme === "dark"
                      ? "border-t-teal-400"
                      : "border-t-ubuntu-accent"
                  }`}
                ></div>
                <div
                  className={`absolute inset-0 rounded-full border-2 border-transparent animate-spin-reverse ${
                    state.theme === "dark"
                      ? "border-b-teal-400/50"
                      : "border-b-ubuntu-accent/50"
                  }`}
                ></div>
              </div>
              <span className="font-medium animate-pulse text-xs sm:text-sm">
                Processing command...
              </span>
              <div className="ml-auto flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-bounce ${
                      state.theme === "dark"
                        ? "bg-teal-400"
                        : "bg-ubuntu-accent"
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced responsive footer */}
        <div
          className={`mt-4 sm:mt-6 text-center text-xs space-y-2 sm:space-y-3 animate-fade-in-up ${
            state.theme === "dark" ? "text-gray-400" : "text-ubuntu-muted"
          }`}
          style={{ animationDelay: "1.5s" }}
        >
          <p className="font-medium animate-pulse px-4">
            Anurag Maurya - DevOps Engineer Portfolio • Built with React,
            TypeScript, and Tailwind CSS
          </p>

          {/* Responsive keyboard shortcuts */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 items-center px-4">
            {[
              { keys: ["↑↓"], label: "History" },
              { keys: ["Tab"], label: "Autocomplete" },
              { keys: ["Ctrl+L"], label: "Clear" },
              { keys: ["Enter"], label: "Execute" },
            ].map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center gap-2 animate-slide-in-left justify-center sm:justify-start"
                style={{ animationDelay: `${1.7 + index * 0.1}s` }}
              >
                <kbd
                  className={`px-2 py-1 rounded text-xs font-mono transition-all duration-300 hover:scale-110 touch-manipulation ${
                    state.theme === "dark"
                      ? "bg-gray-700 text-gray-300 border border-gray-600 hover:border-teal-400/50"
                      : "bg-white text-ubuntu-dark border border-ubuntu-border shadow-sm hover:border-ubuntu-accent/50"
                  }`}
                >
                  {shortcut.keys.join("+")}
                </kbd>
                <span className="hover:animate-pulse text-xs">
                  {shortcut.label}
                </span>
              </div>
            ))}
          </div>

          {/* Responsive command examples */}
          <div
            className="text-xs opacity-75 animate-fade-in-up px-4"
            style={{ animationDelay: "2s" }}
          >
            <p className="mb-2">Try DevOps commands:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["docker ps", "kubectl get pods", "terraform plan"].map(
                (cmd, index) => (
                  <code
                    key={cmd}
                    className={`px-2 py-1 rounded transition-all duration-300 hover:scale-110 cursor-pointer touch-manipulation ${
                      state.theme === "dark"
                        ? "text-teal-400 hover:text-teal-300 bg-gray-800/50"
                        : "text-ubuntu-accent hover:text-ubuntu-accent/80 bg-gray-100/50"
                    }`}
                    onClick={() => handleExecuteCommand(cmd)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleExecuteCommand(cmd)
                    }
                    aria-label={`Execute ${cmd} command`}
                  >
                    {cmd}
                  </code>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
