import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50,
  onComplete,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};
