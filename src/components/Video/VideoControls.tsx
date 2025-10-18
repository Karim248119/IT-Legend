"use client";

import React from "react";
import { Play, Pause, Maximize } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { VolumeControl } from "./VolumeControl";
import { SpeedPopover } from "./SpeedPopover";

interface VideoControlsProps {
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  speed: number;
  handlePlayPause: () => void;
  handleSeek: (value: number[]) => void;
  handleMute: () => void;
  setVolume: (volume: number) => void;
  setSpeed: (speed: number) => void;
  formatTime: (time: number) => string;
  handleFullscreen: () => void;
  showControls: boolean;
}

export function VideoControls({
  isPlaying,
  volume,
  currentTime,
  duration,
  speed,
  handlePlayPause,
  handleSeek,
  handleMute,
  setVolume,
  setSpeed,
  formatTime,
  handleFullscreen,
  showControls,
}: VideoControlsProps) {
  return (
    <div
      className={`w-full absolute md:bottom-10 bottom-4 md:px-10 px-4 space-y-2 gap-4 transition-opacity duration-500 ${
        showControls ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Seek bar */}
      <div className="flex items-center w-full gap-2">
        <Slider
          value={[currentTime]}
          min={0}
          max={duration || 0}
          step={0.1}
          onValueChange={handleSeek}
          className="flex-1"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={handlePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <VolumeControl
            volume={volume}
            handleMute={handleMute}
            setVolume={setVolume}
          />

          <div className="flex items-center gap-2 text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SpeedPopover speed={speed} setSpeed={setSpeed} />
          <button onClick={handleFullscreen}>
            <Maximize />
          </button>
        </div>
      </div>
    </div>
  );
}
