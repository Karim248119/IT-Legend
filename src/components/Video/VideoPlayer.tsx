"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useVideoControls } from "@/hooks/useVideoControls";
import { VideoControls } from "./VideoControls";
import { FaPlay } from "react-icons/fa6";

type OrientationLockType =
  | "any"
  | "natural"
  | "landscape"
  | "portrait"
  | "portrait-primary"
  | "portrait-secondary"
  | "landscape-primary"
  | "landscape-secondary";

export default function VideoPlayer({ src }: { src: string }) {
  const [showControls, setShowControls] = useState(false);
  const [showCenterPlay, setShowCenterPlay] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const controls = useVideoControls(videoRef);

  const { ref: intersectionRef, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (intersectionRef && containerRef.current) {
      intersectionRef(containerRef.current);
    }
  }, [intersectionRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!inView && !video.paused) {
      video.pause();
      setShowCenterPlay(true);
    }
  }, [inView]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!document.fullscreenElement;
      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (orientation: OrientationLockType) => Promise<void>;
        unlock?: () => void;
      };
      if (!isFull && orientation?.unlock) {
        try {
          orientation.unlock();
        } catch {}
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    const orientation = screen.orientation as ScreenOrientation & {
      lock?: (orientation: OrientationLockType) => Promise<void>;
      unlock?: () => void;
    };

    if (!document.fullscreenElement) {
      try {
        await container.requestFullscreen();
        await orientation.lock?.("landscape").catch(() => {});
      } catch {}
    } else {
      try {
        await document.exitFullscreen();
        orientation.unlock?.();
      } catch {}
    }
  };

  const handleInitialPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setShowCenterPlay(false);
    setShowControls(false);
    controls.setIsPlaying(true);
  };

  const handleVideoClick = () => {
    setShowControls((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className="aspect-video w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {showControls && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0 pointer-events-none" />
      )}

      <video
        ref={videoRef}
        onClick={handleVideoClick}
        className="w-full h-full object-cover"
        loop
      >
        <source src={src} type="video/mp4" />
      </video>

      {showCenterPlay && (
        <button
          onClick={handleInitialPlay}
          className="w-16 h-16 text-2xl rounded-full flex justify-center items-center bg-white text-teal-500 absolute z-20 transition-opacity duration-300"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <FaPlay />
        </button>
      )}

      <VideoControls
        {...controls}
        handleFullscreen={handleFullscreen}
        showControls={showControls && !showCenterPlay}
      />
    </div>
  );
}
