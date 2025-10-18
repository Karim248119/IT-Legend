"use client";
import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText, X } from "lucide-react";
import QuizSlider from "../Quiz/QuizSlider";
import { QuizProvider } from "@/context/QuizContext";

const QuizDialog = ({
  title,
  questions,
  duration,
}: {
  title: string;
  questions: number;
  duration: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-between py-3 border-b text-xs cursor-pointer">
          <div className="flex items-center gap-2 text-neutral-600">
            <FileText className="w-4" />
            <p>{title}</p>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-emerald-500 bg-emerald-500/10 px-1 py-0.5 rounded-sm">
              {questions} Q
            </span>
            <span className="text-red-500 bg-red-500/10 px-1 py-0.5 rounded-sm">
              {duration} min
            </span>
          </div>
        </div>
      </DialogTrigger>
      <QuizProvider duration={duration}>
        <DialogOverlay className="w-screen h-screen">
          <DialogClose asChild>
            <button className="absolute z-20 top-5 right-10 p-1 text-sm rounded-lg text-white  border-2 cursor-pointer">
              <X className="w-4 md:w-6" />
            </button>
          </DialogClose>
          <QuizSlider />
        </DialogOverlay>
      </QuizProvider>
    </Dialog>
  );
};

export default QuizDialog;
