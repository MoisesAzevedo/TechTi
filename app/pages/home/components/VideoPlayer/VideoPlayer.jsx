"use client";

import React, { useState, useRef } from 'react';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ src, className = '', showOverlay = true, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className={`${styles.videoContainer} ${className}`}>
      <video
        ref={videoRef}
        src={src}
        className={styles.video}
        onEnded={handleVideoEnded}
        onClick={handleVideoClick}
        {...props}
      />
      
      {!isPlaying && (
        <div className={styles.playButton} onClick={handlePlayPause}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5v14l11-7z"
              fill="#CCD6FF"
            />
          </svg>
        </div>
      )}

      {showOverlay && (
        <div className={`${styles.videoOverlay} ${isPlaying ? styles.hidden : ''}`}>
          <div className="flex items-center text-[10px] gap-[10px]">
            <img
              src="/icons/dot_secondary.png"
              className="w-[8px] h-[8px]"
            />
            <p className="text-[10px] text-white">Serviço</p>
          </div>
          <h3 className="text-[14px] text-white font-normal">
            Nome Sobrenome
          </h3>
          <div className="flex text-[10px] gap-[5px] text-white opacity-80">
            <p>Cargo</p>
            <p>|</p>
            <p>Empresa</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;