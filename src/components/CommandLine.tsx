import React, { useState, useRef, useEffect } from "react";
import { useTerminal } from "../hooks/useTerminal";

interface CommandLineProps {
  onExecuteCommand: (command: string) => void;
  disabled?: boolean;
}

export const CommandLine: React.FC<CommandLineProps> = ({
  onExecuteCommand,
  disabled = false,
}) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [draftInput, setDraftInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { state, getPreviousCommand, getNextCommand, getAutoComplete } =
    useTerminal();

  useEffect(() => {
    if (inputRef.current && !disabled) {
      inputRef.current.focus();
    }
  }, [disabled, state.outputHistory.length]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 100);

    switch (e.key) {
      case "Enter":
        if (selectedSuggestion >= 0 && suggestions[selectedSuggestion]) {
          setInput(suggestions[selectedSuggestion]);
          setSuggestions([]);
          setSelectedSuggestion(-1);
          setShowSuggestions(false);
        } else if (input.trim()) {
          onExecuteCommand(input.trim());
          setInput("");
          setDraftInput("");
          setSuggestions([]);
          setSelectedSuggestion(-1);
          setShowSuggestions(false);
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (suggestions.length > 0 && showSuggestions) {
          setSelectedSuggestion((prev) =>
            prev <= 0 ? suggestions.length - 1 : prev - 1
          );
        } else {
          if (state.currentHistoryIndex === -1 && input.trim()) {
            setDraftInput(input);
          }
          const prevCommand = getPreviousCommand();
          if (prevCommand !== null) {
            setInput(prevCommand);
          }
        }
        break;

      case "ArrowDown":
        e.preventDefault();
        if (suggestions.length > 0 && showSuggestions) {
          setSelectedSuggestion((prev) =>
            prev >= suggestions.length - 1 ? 0 : prev + 1
          );
        } else {
          const nextCommand = getNextCommand();
          if (nextCommand !== null) {
            setInput(nextCommand);
          } else {
            setInput(draftInput);
            if (draftInput === "") {
              setDraftInput("");
            }
          }
        }
        break;

      case "Tab": {
        e.preventDefault();
        const completions = getAutoComplete(input);
        if (completions.length === 1) {
          setInput(completions[0]);
          setSuggestions([]);
          setShowSuggestions(false);
        } else if (completions.length > 1) {
          setSuggestions(completions);
          setSelectedSuggestion(0);
          setShowSuggestions(true);
        }
        break;
      }

      case "Escape":
        setSuggestions([]);
        setSelectedSuggestion(-1);
        setShowSuggestions(false);
        break;

      case "l":
        if (e.ctrlKey) {
          e.preventDefault();
          onExecuteCommand("clear");
        }
        break;

      case "c":
        if (e.ctrlKey) {
          e.preventDefault();
          setInput("");
          setDraftInput("");
          setSuggestions([]);
          setSelectedSuggestion(-1);
          setShowSuggestions(false);
        }
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 150);

    if (state.currentHistoryIndex === -1) {
      setDraftInput(value);
    }

    if (value.trim()) {
      const completions = getAutoComplete(value);
      setSuggestions(completions.slice(0, 6));
      setSelectedSuggestion(-1);
      setShowSuggestions(completions.length > 0);
    } else {
      setSuggestions([]);
      setSelectedSuggestion(-1);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setSuggestions([]);
    setSelectedSuggestion(-1);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      {/* Enhanced responsive command input line */}
      <div
        className={`flex items-center p-3 sm:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] ${
          state.theme === "dark"
            ? "bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/70 hover:bg-gray-800/50"
            : "bg-white/50 border border-ubuntu-border/50 hover:border-ubuntu-border shadow-sm hover:shadow-md"
        } ${disabled ? "opacity-60 animate-pulse" : "hover:shadow-lg"} ${
          isTyping ? "animate-typing-glow" : ""
        }`}
      >
        {/* Responsive terminal prompt */}
        <div
          className={`mr-2 sm:mr-3 font-mono font-medium flex-shrink-0 transition-all duration-300 text-xs sm:text-sm ${
            state.theme === "dark" ? "text-green-400" : "text-ubuntu-dark"
          }`}
        >
          <span
            className={`transition-all duration-300 hover:animate-pulse ${
              state.theme === "dark" ? "text-teal-400" : "text-ubuntu-accent"
            }`}
          >
            <span className="hidden sm:inline">anurag@devops-portfolio</span>
            <span className="sm:hidden">anurag</span>
          </span>
          <span
            className={`animate-fade-blink ${
              state.theme === "dark" ? "text-white" : "text-ubuntu-dark"
            }`}
          >
            :
          </span>
          <span
            className={`transition-all duration-300 hover:animate-pulse ${
              state.theme === "dark" ? "text-blue-400" : "text-ubuntu-purple"
            }`}
          >
            <span className="hidden md:inline">~/devops-portfolio</span>
            <span className="md:hidden">~</span>
          </span>
          <span
            className={`animate-fade-blink ${
              state.theme === "dark" ? "text-white" : "text-ubuntu-dark"
            }`}
          >
            ${" "}
          </span>
        </div>

        {/* Enhanced responsive input field */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`flex-1 bg-transparent border-none outline-none font-mono text-sm sm:text-base placeholder-opacity-50 transition-all duration-300 min-w-0 ${
            state.theme === "dark"
              ? "text-green-400 caret-green-400 placeholder-gray-500"
              : "text-ubuntu-dark caret-ubuntu-accent placeholder-ubuntu-muted"
          } ${disabled ? "cursor-not-allowed" : ""} ${
            isTyping ? "animate-text-glow" : ""
          }`}
          placeholder={disabled ? "Processing..." : "Type a command..."}
          autoComplete="off"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          aria-label="Terminal command input"
        />

        {/* Enhanced responsive cursor */}
        {!disabled && (
          <span
            className={`ml-1 font-mono text-sm sm:text-base animate-cursor-blink flex-shrink-0 ${
              state.theme === "dark" ? "text-green-400" : "text-ubuntu-accent"
            }`}
          >
            █
          </span>
        )}

        {/* Responsive status indicators */}
        <div className="ml-2 sm:ml-3 flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          {input.length > 0 && (
            <span
              className={`text-xs px-1.5 sm:px-2 py-1 rounded-full transition-all duration-300 animate-scale-in ${
                state.theme === "dark"
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                  : "bg-ubuntu-accent/10 text-ubuntu-accent border border-ubuntu-accent/30"
              }`}
            >
              {input.length}
            </span>
          )}
          {state.currentHistoryIndex >= 0 && (
            <span
              className={`text-xs px-1.5 sm:px-2 py-1 rounded-full transition-all duration-300 animate-scale-in ${
                state.theme === "dark"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-ubuntu-purple/10 text-ubuntu-purple border border-ubuntu-purple/30"
              }`}
            >
              ↑{state.commandHistory.length - state.currentHistoryIndex}
            </span>
          )}
          {isTyping && (
            <div
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-ping ${
                state.theme === "dark" ? "bg-teal-400" : "bg-ubuntu-accent"
              }`}
            ></div>
          )}
        </div>
      </div>

      {/* Enhanced responsive suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          className={`absolute bottom-full left-0 right-0 mb-2 rounded-lg shadow-2xl z-50 backdrop-blur-md border animate-slide-up-bounce overflow-hidden ${
            state.theme === "dark"
              ? "bg-gray-800/95 border-gray-600/50 shadow-black/50"
              : "bg-white/95 border-ubuntu-border/50 shadow-black/10"
          }`}
        >
          {/* Responsive suggestions header */}
          <div
            className={`p-2 sm:p-3 border-b text-xs font-medium flex items-center gap-2 ${
              state.theme === "dark"
                ? "text-gray-400 border-gray-700 bg-gray-700/30"
                : "text-ubuntu-muted border-ubuntu-border/30 bg-gray-50/50"
            }`}
          >
            <span className="animate-bounce">💡</span>
            <span className="flex-1">
              Command Suggestions ({suggestions.length})
            </span>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-1 h-1 rounded-full animate-pulse ${
                    state.theme === "dark" ? "bg-teal-400" : "bg-ubuntu-accent"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          {/* Responsive suggestions list */}
          <div className="max-h-48 sm:max-h-64 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`px-3 sm:px-4 py-2 sm:py-3 cursor-pointer font-mono text-xs sm:text-sm transition-all duration-200 flex items-center justify-between group animate-fade-in-stagger hover:scale-[1.02] touch-manipulation min-h-[44px] ${
                  index === selectedSuggestion
                    ? state.theme === "dark"
                      ? "bg-teal-600/20 text-teal-300 border-l-4 border-teal-400 animate-glow-pulse"
                      : "bg-ubuntu-accent/10 text-ubuntu-accent border-l-4 border-ubuntu-accent animate-glow-pulse"
                    : state.theme === "dark"
                    ? "text-green-400 hover:bg-gray-700/50 hover:text-teal-300"
                    : "text-ubuntu-dark hover:bg-ubuntu-accent/5 hover:text-ubuntu-accent"
                } ${
                  index === suggestions.length - 1
                    ? ""
                    : "border-b border-opacity-20"
                } ${
                  state.theme === "dark"
                    ? "border-gray-700"
                    : "border-ubuntu-border"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSuggestionClick(suggestion)
                }
                aria-label={`Select suggestion: ${suggestion}`}
              >
                <span className="flex-1 group-hover:animate-pulse break-all">
                  {suggestion}
                </span>
                <span
                  className={`text-xs opacity-60 group-hover:opacity-100 transition-all duration-200 ml-2 flex-shrink-0 ${
                    index === selectedSuggestion
                      ? "opacity-100 animate-bounce"
                      : ""
                  }`}
                >
                  {index === selectedSuggestion ? "↵" : "→"}
                </span>
              </div>
            ))}
          </div>

          {/* Responsive suggestions footer */}
          <div
            className={`p-2 sm:p-3 border-t text-xs animate-fade-in ${
              state.theme === "dark"
                ? "text-gray-500 border-gray-700 bg-gray-800/50"
                : "text-ubuntu-muted border-ubuntu-border/30 bg-gray-50/50"
            }`}
          >
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="animate-pulse">⌨️</span>
              <span className="text-center sm:text-left">
                Use ↑↓ to navigate, Tab to complete, Enter to execute
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
