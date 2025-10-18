"use client";

import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Settings, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiSpeedtest } from "react-icons/si";

const speeds = [0.5, 1, 1.25, 1.5, 2];

export function SpeedPopover({
  speed,
  setSpeed,
}: {
  speed: number;
  setSpeed: (s: number) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <Settings />
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className="md:w-40 w-20 bg-neutral-900/90 border border-white/10 text-white rounded-xl md:space-y-2  md:p-3 py-1 px-2"
      >
        <div className="flex items-center gap-1 md:text-xs text-[10px] font-bold md:mb-2 mb-0.5 border-b md:py-2 py-0.5 tracking-wider">
          <SiSpeedtest />
          <span>Speed</span>
        </div>
        <div className=" gap-1">
          {speeds.map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={cn(
                "w-full md:text-sm text-[10px] rounded-md hover:bg-neutral-800 flex items-center gap-1 md:py-1 md:px-2"
              )}
            >
              <span className="w-3 h-3">
                {s === speed && <Check className="w-3 h-3" />}
              </span>
              <span>{s}x</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
