"use client";

import { FaRegCirclePlay } from "react-icons/fa6";
import { Slider, Tooltip } from "@nextui-org/react";
import { useRef, useState } from "react";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import "./styles.css";
import { MdFullscreen } from "react-icons/md";

interface Props {
  srcVideo: string;
  posterPath: string;
}

export default function VideoElement(props: Props) {
  const { srcVideo, posterPath } = props;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  //   const video = document.getElementById("video-detail-mov") as HTMLVideoElement;
  const videoRef = useRef<HTMLVideoElement>(null);
  const playVideo = () => {
    const playIcon = document.getElementById(
      "icon-play-video"
    ) as HTMLVideoElement;
    playIcon.style.display = "none";

    if (!isPlaying) {
      videoRef?.current?.play();
      setIsPlaying(true);
    } else {
      videoRef?.current?.pause();
      setIsPlaying(false);
    }
  };

  const onTimeUpdate = () => {
    setCurrentTime(videoRef?.current?.currentTime || 0);
  };

  const handleDurationChange = () => {
    setDuration(videoRef?.current?.duration || 0);
  };

  const handleFullScreen = () => {
    videoRef?.current?.requestFullscreen();
  };

  const handleSeekBar = (val: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1000;
    }
  };

  const handleMuted = () => {
    if (videoRef.current) {
      if (!isMuted) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const currHour = Math.floor(currentTime / 3600);
  const currMinute = Math.floor((currentTime % 3600) / 60);
  const currSecond = Math.floor((currentTime % 3600) % 60);

  const durationHour = Math.floor(duration / 3600);
  const durationMinute = Math.floor((duration % 3600) / 60);
  const durationSecond = Math.floor((duration % 3600) % 60);

  const currTimeDuration = `${durationHour}:
        ${durationMinute}:
        ${durationSecond}`;

  const currTimeRemaining = `${currHour}:
        ${currMinute}:
        ${currSecond}`;

  return (
    <div className="wrapper-video-element">
      <FaRegCirclePlay
        id="icon-play-video"
        className="icon-play-video"
        stroke="black"
        size={100}
      />

      {currentTime !== 0 && (
        <>
          <Slider
            label=" "
            size="sm"
            value={currentTime}
            showTooltip
            step={0.1}
            maxValue={duration}
            minValue={0}
            defaultValue={0}
            onChange={(value) => handleSeekBar(value as number)}
            className={`seekbar-movie`}
            renderValue={({ children, ...props }) => (
              <output {...props}></output>
            )}
          />
          <div className="absolute bottom-0 left-3 flex gap-x-2 items-center text-slate-300">
            <Tooltip content={isMuted ? "Unmute" : "Mute"} placement="top">
              {isMuted ? (
                <HiSpeakerXMark
                  size={30}
                  onClick={handleMuted}
                  className="hover:text-white text-slate-300"
                />
              ) : (
                <HiSpeakerWave
                  size={30}
                  onClick={handleMuted}
                  className="hover:text-white text-slate-300"
                />
              )}
            </Tooltip>
            <p>{currTimeRemaining}</p>/<p>{currTimeDuration}</p>
          </div>
          <MdFullscreen
            size={30}
            className="fullscreen-movie text-slate-300 hover:text-white"
            onClick={handleFullScreen}
          />
        </>
      )}
      <div className="wrapper-video-element-main" onClick={playVideo}>
        <video
          ref={videoRef}
          poster={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${posterPath}`}
          src={srcVideo}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={handleDurationChange}
          id="video-detail-mov"
          className="w-full h-full z-10"
        >
          <source src={srcVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
