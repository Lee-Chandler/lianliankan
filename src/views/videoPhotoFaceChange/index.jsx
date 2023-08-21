import React, { useState,useRef,useEffect } from 'react';
import './style.css'
// import videoFile from '../../assets/test.mp4';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button,Progress } from 'antd';

const SecondPage = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [percent, setPercent] = useState(0);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoFile = props.url;
  console.log("second page:", videoFile)

  useEffect(()=>{
    if(!selectedFile||selectedFile===0){
        setPercent(0)
    }else{
        console.log(percent,'percent',videoRef1.current.duration,videoRef2.current.duration)
        videoRef1.current.currentTime=percent;
        videoRef2.current.currentTime=percent;
    }
    },[percent])

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const videoButtonCheck=()=>{
    if (videoRef1.current.paused&&videoRef1.current.paused) {
        videoRef1.current.play();
        videoRef2.current.play();
      setIsPlaying(true);
    } else {
      videoRef1.current.pause();
      videoRef2.current.pause();
      setIsPlaying(false);
    }
  }
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 2.0;
      console.log(newPercent,'123',newPercent > videoRef1.current.duration||newPercent > videoRef2.current.duration)
      if (newPercent > videoRef1.current.duration||newPercent > videoRef2.current.duration) {
        return 0;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 2.0;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
        <div className='fileUploadArea'>
            <div className='embed'>
                    <input type="file" onChange={handleFileChange} className='uploadFile'/>
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className='fileDrop'
                    >
                        {selectedFile ? (
                        <p>上传的文件:
                        <br/> <p className='uploadName'>{selectedFile.name}</p></p>
                    ) :
                       ( <p>请点击或者拖拽上传</p>)}
                    </div>
            </div>
            {/* 视频区域 */}
            <div className='videoArea'>
                <div style={{ backgroundColor: selectedFile ? 'white' : 'black', color: selectedFile ? 'black' : 'white',width:'450px',height:'280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {selectedFile ? <video ref={videoRef1} src={videoFile} controls={false} style={{width:'100%',height:'100%',borderRadius:'15px'}}/>: '上传原始视频后可进行观看'}
                </div>
                <div style={{display:'flex',flexDirection:'row',width:'100%',margin:'10px 0'}}>
                    <button type='primary' onClick={()=>videoButtonCheck()} disabled={!selectedFile} className='videoPlayBottom'>播放</button>
                    <Progress percent={percent} showInfo={false}></Progress>
                    <Button.Group>
                        <Button onClick={decline} disabled={!selectedFile} icon={<MinusOutlined />} />
                        <Button onClick={increase} disabled={!selectedFile} icon={<PlusOutlined />} />
                    </Button.Group>
                </div>
                <div style={{ backgroundColor: selectedFile ? 'white' : 'black', color: selectedFile ? 'black' : 'white',width:'450px',height:'280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {selectedFile ? <video ref={videoRef2} src={videoFile} controls={false} style={{width:'100%',height:'100%',borderRadius:'15px'}}/> : '当视频解析完成后可进行观看'}
                </div>
            </div>
        </div>
  );
};

export default SecondPage;