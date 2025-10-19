import Timer from "@/components/Quiz/Timer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuizController({
  scrollPrev,
  scrollNext,
  canScrollPrev,
  canScrollNext,
}: {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}) {
  return (
    <div className="w-full  flex items-center justify-between px-10">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={`p-3 rounded-full bg-white/80 text-teal-500 shadow transition hover:bg-white ${
          !canScrollPrev && "opacity-50 cursor-not-allowed"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <Timer />
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={`p-3 rounded-full bg-white/80 text-teal-500 shadow transition hover:bg-white ${
          !canScrollNext && "opacity-50 cursor-not-allowed"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
