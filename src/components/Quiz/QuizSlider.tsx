"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { QuizData } from "@/data";
import QuizCard from "./QuizCard";
import QuizController from "./QuizController";
import { useQuiz } from "@/context/QuizContext";

export default function QuizSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    align: "center",
  });
  const { selectedIndex, setSelectedIndex } = useQuiz();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const slides = Array.from({ length: 5 });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(selectedIndex, false);
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect, selectedIndex]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full h-full bg-teal-500 flex flex-col gap-10 py-20">
      <div className="flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-8 h-8 rounded-full flex-center text-sm font-semibold duration-300 
              ${
                selectedIndex === index
                  ? "bg-white text-teal-500"
                  : "border border-white text-white hover:bg-white hover:text-teal-500"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="relative ">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((_, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] md:flex-[0_0_80%] px-1 md:px-5 transition-all duration-300"
              >
                <QuizCard
                  data={{
                    ...QuizData,
                    question: `${index + 1}. ${QuizData.question}`,
                  }}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <QuizController
        {...{ scrollPrev, scrollNext, canScrollPrev, canScrollNext }}
      />
    </div>
  );
}
