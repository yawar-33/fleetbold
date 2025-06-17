// components/PodcastPlayer.js
"use client"; 
import { BASE_URL, DOMAIN } from '@/app/(others)/config';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PodcastPlayer = ({ title, audioFile, autoPlay=false }:any) => {
  // const podcastUrl = `http://localhost:3001/api/stream-audio${audioFile}`; // Pass the dynamic audio file name
  const podcastUrl = `${DOMAIN}/api/stream-audio?sourceUrl=${audioFile}`; // Pass the dynamic audio file name
// console.log(podcastUrl)
  return (
    <div className="podcast-player" style={{display:'flex', flexDirection:'column', gap:10}}>
     {title &&  <h3>{title}</h3>} 
      <AudioPlayer
        src={audioFile}
         preload="auto"
        autoPlay={autoPlay}
        onPlay={() => console.log(podcastUrl)}
        onPlayError={(e:any) => console.log(e)}
        // controls
      />
    </div>
  );
};

export default PodcastPlayer;
