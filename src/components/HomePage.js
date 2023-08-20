/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Video from './Video';
import './HomePage.css';
import logo from '../assets/logo.png';
// import axios from 'axios'; 
const HomePage = (props) => {
  const url = props.url;
  // const [isReady, setIsReady] = React.useState(false);
  // if (url) {
  //   setIsReady(true);
  // }
  const navigateToSecondPage = () => {
    // window.location.href = '/second';
    props.setPage(2);
  };

  return (
    <div>
      <img className='logo' src={logo} />
      <div className='src-video'>
        <Video src={url} />
      </div>
      {/* {isReady && <button className='jump-btn' onClick={ navigateToSecondPage } />} */}
      <button className='jump-btn' onClick={ navigateToSecondPage } />
    </div>
  );
};

export default HomePage;
