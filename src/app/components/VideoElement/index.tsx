"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Slider,
  Tooltip,
} from "@nextui-org/react";
import { useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { TbClockPlay } from "react-icons/tb";
import { CgMiniPlayer } from "react-icons/cg";
import { FaPlay, FaPause } from "react-icons/fa6";
import { MdFullscreen } from "react-icons/md";
import { MdReplay10 } from "react-icons/md";
import "./styles.css";

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
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
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
    if (videoRef.current && val <= duration) {
      videoRef.current.currentTime = val;
      setCurrentTime(val);
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

  const handleChangeVolume = (val: number) => {
    if (videoRef.current) {
      videoRef.current.volume = val;
      setVolume(val);
      if (val === 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }
    }
  };

  const handlePlaybackRate = (val: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = val;
      setPlaybackRate(val);
    }
  };

  const handleMiniPlayer = () => {
    if (videoRef.current) {
      videoRef.current.requestPictureInPicture();
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

  setInterval(() => {
    const t0 = Date.now();
    eval("debugger");
    const t1 = Date.now();
    if (t0 === t1) {
      return;
    }
  }, 500);

  return (
    <div className="wrapper-video-element">
      <FaRegCirclePlay
        id="icon-play-video"
        className="icon-play-video z-20"
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
            tooltipProps={{ content: `${currTimeRemaining}` }}
            onChange={(value) => handleSeekBar(value as number)}
            className={`seekbar-movie`}
            renderValue={({ children, ...props }) => (
              <output {...props}></output>
            )}
          />
          <div className="wrapper-left-control text-slate-300">
            {isPlaying ? (
              <FaPause
                size={30}
                className="hover:text-white z-20"
                onClick={playVideo}
              />
            ) : (
              <FaPlay
                size={30}
                onClick={playVideo}
                className="hover:text-white z-20"
              />
            )}
            <MdReplay10
              size={30}
              className="hover:text-white z-20"
              onClick={() => handleSeekBar(currentTime + 10)}
            />
            <Tooltip content={isMuted ? "Unmute" : "Mute"} placement="top">
              {isMuted ? (
                <HiSpeakerXMark
                  size={30}
                  onClick={handleMuted}
                  className="hover:text-white z-20"
                />
              ) : (
                <HiSpeakerWave
                  size={30}
                  onClick={handleMuted}
                  className="hover:text-white z-20"
                />
              )}
            </Tooltip>
            <Slider
              label=" "
              size="sm"
              value={volume}
              showTooltip
              step={0.1}
              maxValue={1}
              minValue={0}
              defaultValue={1}
              tooltipProps={{ content: `${volume * 100}%` }}
              onChange={(value) => handleChangeVolume(value as number)}
              className={`w-32`}
              renderValue={({ children, ...props }) => (
                <output {...props}></output>
              )}
            />
            <p className="hover:text-white">{currTimeRemaining} /</p>
            <p className="hover:text-white">{currTimeDuration}</p>
          </div>
          <div className="wrapper-right-control">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="border-none">
                  <TbClockPlay
                    className="text-slate-300 hover:text-white"
                    size={30}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                variant="shadow"
                aria-label="Dropdown menu with description"
                color="secondary"
              >
                <DropdownItem
                  onClick={() => handlePlaybackRate(0.5)}
                  description="Slower Speed"
                >
                  0.5
                </DropdownItem>
                <DropdownItem
                  onClick={() => handlePlaybackRate(0.75)}
                  description="Slow Speed"
                >
                  0.75
                </DropdownItem>
                <DropdownItem
                  onClick={() => handlePlaybackRate(1)}
                  description="Normal Speed"
                >
                  Normal
                </DropdownItem>
                <DropdownItem
                  onClick={() => handlePlaybackRate(1.25)}
                  description="Fast Speed"
                >
                  1.25
                </DropdownItem>
                <DropdownItem
                  onClick={() => handlePlaybackRate(1.5)}
                  description="Faster Speed"
                >
                  1.5
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <CgMiniPlayer
              size={30}
              className="miniplayer-movie text-slate-300 hover:text-white"
              onClick={handleMiniPlayer}
            />
            <MdFullscreen
              size={40}
              className="text-slate-300 hover:text-white"
              onClick={handleFullScreen}
            />
          </div>
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
