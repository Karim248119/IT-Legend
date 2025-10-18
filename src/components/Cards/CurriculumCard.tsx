import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import React from "react";
import TopicDialog from "@/components/Dialogs/TopicDialog";
import QuizDialog from "@/components/Dialogs/QuizDialog";
import { Curriculum } from "@/types/courses";

export default function CurriculumCard({ item }: { item: Curriculum }) {
  const [collpsed, setCollapsed] = React.useState(true);
  return (
    <div className="border md:space-y-3 text-sm">
      <button
        className="p-5 md:border-b-0 border-b w-full flex items-center justify-between"
        onClick={() => setCollapsed(!collpsed)}
      >
        <h3 className="font-semibold text-lg">
          <span className="hidden md:block">{item.duration}</span>
          <span className="md:hidden">{item.name}</span>
        </h3>
        <div className="md:hidden block">
          {collpsed ? <Minus className="w-4" /> : <Plus className="w-4" />}
        </div>
      </button>
      <p className="text-neutral-500 px-5 hidden md:block">
        Advanced story telling techniques for writers: Personas, Characters, &
        Plot
      </p>
      <div
        className={cn(
          "px-5 overflow-hidden duration-500",
          collpsed ? "h-0 md:h-auto" : "h-auto"
        )}
      >
        {item.topics.map((topic, index) => (
          <div
            key={index}
            className={cn(index === item.topics.length - 1 ? "border-b-0" : "")}
          >
            {topic.questions && topic.duration ? (
              <QuizDialog
                title={topic.title}
                questions={topic.questions}
                duration={topic.duration}
              />
            ) : (
              <TopicDialog title={topic.title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
