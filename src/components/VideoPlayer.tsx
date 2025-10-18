"use client";

import React, { useRef, useState } from "react";
import Video from "next-video/player";
import { Play } from "lucide-react";
import type { PlayerProps } from "next-video/dist/components/types.js";

interface VideoPlayerProps extends PlayerProps {
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ ...props }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
      <Video
        ref={videoRef}
        controls={true}
        controlsList=""
        onPlay={() => setHasStarted(true)}
        {...props}
        className="w-full h-full object-cover"
      />

      {!hasStarted && (
        <button
          onClick={() => {
            setHasStarted(true);
          }}
          className=" absolute-center w-20 aspect-square rounded-full bg-red-600 text-white flex justify-center items-center hover:bg-red-700 transition-transform duration-200 hover:scale-110 shadow-lg"
        >
          <Play size={38} />
        </button>
      )}
    </div>
  );
}
