"use client";
import { useQuiz } from "@/context/QuizContext";
import Header from "../Header";
import { cn } from "@/lib/utils";
import { QuizData } from "@/types/courses";

export default function QuizCard({
  data,
  index,
}: {
  data: QuizData;
  index: number;
}) {
  const { answers, setAnswer } = useQuiz();
  const selectedOption = answers[index];

  return (
    <div className="bg-white rounded-lg p-5 md:px-52">
      <Header size="sm">{data.question}</Header>

      <div>
        {data.options.map((option) => {
          const isSelected = selectedOption === option.label;
          const isCorrect = option.label === data.answer;
          const isWrong = isSelected && !isCorrect;

          return (
            <button
              key={option.label}
              onClick={() => setAnswer(index, option.label)}
              disabled={!!selectedOption}
              className={cn(
                "flex w-full items-center gap-2 p-3 border rounded-lg my-2 cursor-pointer transition-colors duration-300",
                {
                  "bg-green-200 border-green-400 text-green-800":
                    selectedOption && isCorrect,
                  "bg-red-200 border-red-400 text-red-800": isWrong,
                  "bg-gray-100 hover:bg-gray-200": !selectedOption,
                }
              )}
            >
              <div className="w-6 h-6 flex items-center justify-center border border-current/50 rounded-full">
                {option.label}
              </div>
              <p>{option.text}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
