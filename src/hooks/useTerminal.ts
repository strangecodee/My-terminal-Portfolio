import { useState, useCallback } from "react";
import { TerminalState, CommandOutput } from "../types/terminal";

const initialState: TerminalState = {
  outputHistory: [],
  commandHistory: [],
  currentHistoryIndex: -1,
  isProcessingCommand: false,
  theme: "dark",
};

export const useTerminal = () => {
  const [state, setState] = useState<TerminalState>(initialState);

  const addToHistory = useCallback((command: string) => {
    setState((prev) => ({
      ...prev,
      commandHistory: [...prev.commandHistory, command],
      currentHistoryIndex: -1, // Reset to newest position
    }));
  }, []);

  const addOutput = useCallback(
    (command: string, output: React.ReactNode, executionTime?: number) => {
      const newOutput: CommandOutput = {
        id: Date.now().toString(),
        command,
        output,
        timestamp: new Date(),
        executionTime,
      };

      setState((prev) => ({
        ...prev,
        outputHistory: [...prev.outputHistory, newOutput],
      }));
    },
    []
  );

  const clearHistory = useCallback(() => {
    setState((prev) => ({
      ...prev,
      outputHistory: [],
      currentHistoryIndex: -1,
    }));
  }, []);

  const setProcessing = useCallback((isProcessing: boolean) => {
    setState((prev) => ({
      ...prev,
      isProcessingCommand: isProcessing,
    }));
  }, []);

  const setTheme = useCallback((theme: "light" | "dark") => {
    setState((prev) => ({
      ...prev,
      theme,
    }));

    // Update document class for theme switching
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const getPreviousCommand = useCallback(() => {
    setState((prev) => {
      const { commandHistory, currentHistoryIndex } = prev;
      if (commandHistory.length === 0) return prev;

      let newIndex;
      if (currentHistoryIndex === -1) {
        // Start from the most recent command
        newIndex = commandHistory.length - 1;
      } else if (currentHistoryIndex > 0) {
        // Go to previous command
        newIndex = currentHistoryIndex - 1;
      } else {
        // Already at oldest command, stay there
        newIndex = currentHistoryIndex;
      }

      return {
        ...prev,
        currentHistoryIndex: newIndex,
      };
    });

    // Return the command at the new index
    const currentIndex =
      state.currentHistoryIndex === -1
        ? state.commandHistory.length - 1
        : Math.max(0, state.currentHistoryIndex - 1);

    return state.commandHistory[currentIndex] || null;
  }, [state.commandHistory, state.currentHistoryIndex]);

  const getNextCommand = useCallback(() => {
    setState((prev) => {
      const { commandHistory, currentHistoryIndex } = prev;
      if (commandHistory.length === 0 || currentHistoryIndex === -1) {
        return prev;
      }

      let newIndex;
      if (currentHistoryIndex < commandHistory.length - 1) {
        // Go to next command
        newIndex = currentHistoryIndex + 1;
      } else {
        // At newest command, go to "current" (draft) position
        newIndex = -1;
      }

      return {
        ...prev,
        currentHistoryIndex: newIndex,
      };
    });

    // Return the command at the new index, or null if at current position
    const newIndex =
      state.currentHistoryIndex < state.commandHistory.length - 1
        ? state.currentHistoryIndex + 1
        : -1;

    return newIndex === -1 ? null : state.commandHistory[newIndex];
  }, [state.commandHistory, state.currentHistoryIndex]);

  const getCurrentHistoryIndex = useCallback(() => {
    return state.currentHistoryIndex;
  }, [state.currentHistoryIndex]);

  const getHistoryLength = useCallback(() => {
    return state.commandHistory.length;
  }, [state.commandHistory.length]);

  const getAutoComplete = useCallback((input: string) => {
    const commands = [
      "help",
      "about",
      "skills",
      "projects",
      "certifications",
      "contact",
      "clear",
      "theme light",
      "theme dark",
      "whoami",
      "pwd",
      "ls",
      "docker ps",
      "docker images",
      "docker run",
      "docker stop",
      "kubectl get pods",
      "kubectl get services",
      "kubectl describe",
      "terraform plan",
      "terraform apply",
      "terraform destroy",
      "aws s3 ls",
      "aws ec2 describe-instances",
      "aws lambda list-functions",
      "gcloud compute instances list",
      "gcloud storage ls",
      "git status",
      "git log",
      "git branch",
      "git checkout",
      "npm install",
      "npm start",
      "npm test",
      "npm run build",
      "python --version",
      "node --version",
      "java -version",
    ];

    if (!input.trim()) return [];

    return commands
      .filter((cmd) => cmd.toLowerCase().startsWith(input.toLowerCase()))
      .slice(0, 10);
  }, []);

  return {
    state,
    addToHistory,
    addOutput,
    clearHistory,
    setProcessing,
    setTheme,
    getPreviousCommand,
    getNextCommand,
    getCurrentHistoryIndex,
    getHistoryLength,
    getAutoComplete,
  };
};
