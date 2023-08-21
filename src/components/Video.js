import React, { useState, useEffect } from 'react';
// import videoFile from './test.mp4';
import './Video.css';

  const Video = (src) => {
    const url = src.src
    // const [isPlaying, setIsPlaying] = useState(false);
  
    // useEffect(()=>{
    //   console.log(paused,'666')
    // },[paused])
  // const [url, setUrl] = useState('');
  // useEffect(() => {
  //   console.log(src);
  //   setUrl(src);
  //   console.log("111:", url)
  // }, [src])
  return (
    <>
      {/* <video ref={videoRef} src={videoFile}/> */}
      {url && <video className='video' preload='auto' src={url} controls/>}
    </>
  );
}

export default Video;
