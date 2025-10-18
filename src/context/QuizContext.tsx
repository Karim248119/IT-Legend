"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type Answers = Record<number, string>;

interface QuizContextType {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  answers: Answers;
  setAnswer: (index: number, answer: string) => void;
  timeLeft: number;
  setTimeLeft: (seconds: number | ((prev: number) => number)) => void;
}

const QuizContext = createContext<QuizContextType | null>(null);

export function QuizProvider({
  children,
  duration,
}: {
  children: ReactNode;
  duration: number;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [timeLeft, setTimeLeft] = useState(duration);

  const setAnswer = useCallback((index: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [index]: answer }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        answers,
        setAnswer,
        timeLeft,
        setTimeLeft,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used inside QuizProvider");
  return ctx;
}
