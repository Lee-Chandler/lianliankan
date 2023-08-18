/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Video from './Video';
import './HomePage.css';
import logo from './logo.png';
import axios from 'axios'; 
import { useEffect } from 'react';
const HomePage = () => {
  let url = ''
  const [isReady, setIsReady] = React.useState(false);
  const navigateToSecondPage = () => {
    window.location.href = '/second?url=' + url;
  };

  const getVideoUrl = () => {
    axios.get('/video').then(res => {
      console.log(res);
      return 'res';
    }).catch(err => {
      console.log(err);
      return 'err';
    })
  }

  url = getVideoUrl();
  console.log(url);

  useEffect(() => {
    if (url) {
      setIsReady(true);
    }
  }, [url]);

  return (
    <div>
      <img className='logo' src={logo} />
      <div className='src-video'>
        <Video/>
      </div>
      {isReady && <button className='jump-btn' onClick={ navigateToSecondPage } />}
    </div>
  );
};

export default HomePage;
