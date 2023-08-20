import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import axios from 'axios'; 
import './App.css';

const App = () => {
  const [url, setUrl] = useState('');
  const [page, setPage] = useState(1);

  const getVideoUrl = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/srcVid');
      console.log("send request",res.data);
      setUrl(res.data.url);
    } catch (err) {
      console.error(err);
    }
  }

  const back = () => {
    setPage(1);
    getVideoUrl();
  }

  useEffect(() => {
    if (url.length === 0) {
      getVideoUrl();
    }
  }, []);

  return (
    <div>
      {page === 2 && <div className='back-btn' onClick={ back }></div>}
      {page === 1 && <HomePage url={ url } setPage={ setPage } />}
      {page === 2 && <SecondPage url={ url } />}
    </div>
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<HomePage url={ url } />} />
    //       <Route path="/second" element={<SecondPage url={ url } />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
