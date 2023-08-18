/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Video from './Video';
import './HomePage.css';
import logo from './logo.png';
const HomePage = () => {
  const navigateToSecondPage = () => {
    // 在这里执行路由切换
    window.location.href = '/second?url=1111';
    // 或者使用 React Router 的 <Navigate> 组件
  };

  return (
    <div>
      <img className='logo' src={logo} />
      <div className='src-video'>
        <Video/>
      </div>
      <button className='jump-btn' onClick={navigateToSecondPage} />
    </div>
  );
};

export default HomePage;
