import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// import 'antd/dist/antd.css'
// import { useState } from 'react';
import HomePage from './HomePage';
import VideoPhotoFaceChange from './views/videoPhotoFaceChange/index'

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<VideoPhotoFaceChange />} />
        </Routes>
      </div>
    </Router>
    </ConfigProvider>
  );
};

export default App;
