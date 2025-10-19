"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { BiSolidDownArrow } from "react-icons/bi";

interface ProgressProps {
  value: number;
  label?: string;
  showPercent?: boolean;
}

export default function Progress({
  value,
  label = "You",
  showPercent = true,
}: ProgressProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="space-y-1">
      <div
        style={{
          opacity: inView ? 1 : 0,
          marginLeft: `calc(${value}% - 20px)`,
        }}
        className="w-fit text-xs text-neutral-400 flex flex-col items-center transition-opacity duration-700"
      >
        <div className="w-10 h-10 rounded-full border-2 border-neutral-400 flex-center text-xs">
          {label}
        </div>
        <BiSolidDownArrow />
      </div>

      <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
        <div
          className={`h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: inView ? `${value}%` : "0%" }}
        />
      </div>

      {showPercent && (
        <p
          className="text-sm transition-opacity duration-700"
          style={{
            opacity: inView ? 1 : 0,
            marginLeft: `calc(${value}% - 10px)`,
          }}
        >
          {value}%
        </p>
      )}
    </div>
  );
}
