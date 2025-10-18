"use client";

import { RefObject, useEffect, useState } from "react";

export function useVideoControls(videoRef: RefObject<HTMLVideoElement | null>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const setDur = () => setDuration(video.duration || 0);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setDur);
    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setDur);
    };
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = volume;
      video.playbackRate = speed;
    }
  }, [volume, speed, videoRef]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) video.pause();
    else video.play();
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const handleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setVolume(video.muted ? 0 : 1);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return {
    isPlaying,
    volume,
    currentTime,
    duration,
    speed,
    setIsPlaying,
    setSpeed,
    setVolume,
    setCurrentTime,
    handlePlayPause,
    handleSeek,
    handleMute,
    formatTime,
  };
}
