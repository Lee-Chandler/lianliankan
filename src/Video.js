import React, { useState, useRef,useEffect } from 'react';
import videoFile from './test.mp4';

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
    <div>
      <video ref={videoRef} src={videoFile} controls={false} style={{width:'100%',height:'100%',borderRadius:'15px'}}/>
      <button onClick={()=>{
        videoButtonCheck()
      }}></button>
    </div>
  );
}

export default Video;
