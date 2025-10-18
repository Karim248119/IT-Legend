"use client";

import { useQuiz } from "@/context/QuizContext";
import { Timer as TimerIcon } from "lucide-react";
import { useEffect } from "react";

interface TimerProps {
  onComplete?: () => void;
  className?: string;
}

export default function Timer({ onComplete, className }: TimerProps) {
  const { timeLeft, setTimeLeft } = useQuiz();

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete, setTimeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      className={`flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow text-teal-600 font-semibold ${className}`}
    >
      <TimerIcon className="w-4 h-4" />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
}
