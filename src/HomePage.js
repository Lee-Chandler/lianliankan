/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Video from './Video';
import './HomePage.css';
import logo from './logo.png';
import axios from 'axios'; 
const HomePage = () => {
  const [url, setUrl] = React.useState('');
  const [isReady, setIsReady] = React.useState(false);
  const navigateToSecondPage = () => {
    window.location.href = '/second?url=' + url;
  };

  const getVideoUrl = async () => { // 注意函数声明前面的 async
    try {
      const res = await axios.get('http://localhost:4000/api/srcVid');
      return res.data.url;
    } catch (err) {
      console.error(err);
      return '';
    }
  }
  
  const setVideoUrl = async () => {
    try {
      const res = await getVideoUrl(); // 使用 await 等待 getVideoUrl 函数的结果
      setUrl(res);
      setIsReady(true);
    } catch (err) {
      console.error(err);
    }
  }  

  setVideoUrl();

  return (
    <div>
      <img className='logo' src={logo} />
      <div className='src-video'>
        <Video src={url} />
      </div>
      {isReady && <button className='jump-btn' onClick={ navigateToSecondPage } />}
    </div>
  );
};

export default HomePage;
