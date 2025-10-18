"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { Volume2, VolumeOff } from "lucide-react";

export function VolumeControl({
  volume,
  handleMute,
  setVolume,
}: {
  volume: number;
  handleMute: () => void;
  setVolume: (v: number) => void;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleMute}>
            {volume > 0 ? <Volume2 /> : <VolumeOff />}
          </button>
        </TooltipTrigger>
        <TooltipContent
          hideArrow
          side="top"
          className="bg-neutral-900/50 border border-white/10 p-2 mb-5 mr-1 rounded-lg flex items-center justify-center"
        >
          <Slider
            orientation="vertical"
            value={[volume]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={(v) => setVolume(v[0])}
            className="data-[orientation=vertical]:min-h-20"
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
