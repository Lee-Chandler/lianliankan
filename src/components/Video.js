import React, { useState, useRef,useEffect } from 'react';
import videoFile from './test.mp4';
import './Video.css';

  const Video = (src,paused,onVideoChanged) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
  
    // useEffect(()=>{
    //   console.log(paused,'666')
    // },[paused])
    const videoButtonCheck=()=>{
      if (videoRef.current.paused) {
        videoRef.current.play();
        // setIsPlaying(true);
      } else {
        videoRef.current.pause();
        // setIsPlaying(false);
      }
    }
  const [url, setUrl] = useState('');
  useEffect(() => {
    console.log(src);
    setUrl(src);
  }, [src])
  return (
    <>
      {/* <video ref={videoRef} src={videoFile}/> */}
      {url && <video className='video' preload='auto' src={url} controls/>}
    </>
  );
}

export default Video;
