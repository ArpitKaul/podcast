import React, { useEffect, useRef, useState } from "react";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa";
import { ImCross } from "react-icons/im"; 
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/player";

const AudioPlayer = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();
  const playerDivState = useSelector((state) => state.player.isPlayerDiv);
  const songPath = useSelector((state) => state.player.songPath);
  const img = useSelector((state) => state.player.img);
  const audioRef = useRef();

  const formatTime = (time) => {
    const minute = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const closeAudioPlayerDiv = (e) => {
    e.preventDefault();
    dispatch(playerActions.closeDiv());
    dispatch(playerActions.changeImage(""));
    dispatch(playerActions.changeSong(""));
  };

  const handlePlayPodcast = () => {
    setIsSongPlaying((prev) => !prev);
    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetaData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const Backward = () => {
    if (audioRef.current) {
      let newTime = Math.max(currentTime - 10, 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const Forward = () => {
    if (audioRef.current) {
      let newTime = Math.min(currentTime + 10, duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const newTime = (e.target.value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetaData);
    }

    // Cleanup event listeners when the component unmounts or songPath changes
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetaData);
      }
    };
  }, [songPath]);

  return (
    <div
      className={`${
        playerDivState ? "fixed" : "hidden"
      } bottom-0 left-0 flex items-center gap-4 w-full bg-zinc-900 text-white px-4 rounded py-4`}
    >
      <div className="hidden md:block w-1/3">
        <img src={img} alt="" className="h-12 rounded-full object-cover" />
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-4 text-xl">
          <button onClick={Backward}>
            <IoPlaySkipBack />
          </button>
          <button onClick={handlePlayPodcast}>
            {isSongPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={Forward}>
            <IoPlaySkipForward />
          </button>
        </div>
        <div className="w-full flex items-center justify-center mt-3">
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            className="w-full hover:cursor-pointer"
            onChange={handleSeek}
          />
        </div>

        <div className="w-full flex items-center justify-between text-sm">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <button onClick={closeAudioPlayerDiv}>
          <ImCross />
        </button>
      </div>
      <audio ref={audioRef} src={songPath} />
    </div>
  );
};

export default AudioPlayer;
