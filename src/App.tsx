import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/sidebarComponent'
import AppContent from './components/layout/appComponent';
import Content from './components/layout/contentComponent'
import { AuthContextProvider } from './components/body/store/auth-context';
import AuthContext from './components/body/store/auth-context';
import HomeContent from './components/layout/homeComponent';

import 'antd/dist/antd.css'
import './static/css/common.css'
import './static/css/fonts/Pretendard/fonts.css'
import './static/css/layout.css'

import './static/css/plugin.css'
import '../src/static/css/fonts/Pretendard/fonts.css';


function App() {
  const authCtx = useContext(AuthContext);

  console.log(localStorage.getItem('accessToken'))

  return (
    <>

      <div id="wrap" className="wrap">
        {/* 사이드바 */}
        <Sidebar />

        {/*  URL의 이동을 토큰이 존재하냐 안하냐의 여부로 제어  */}
        <BrowserRouter>
        
          
            {!authCtx.isLoggedIn ? (
              <Routes>
                <Route path="/*" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<AppContent />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/home" element={<HomeContent />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/login" element={<Navigate replace to="/home" />} />
                <Route path="/chart" element={<Content />} />
                <Route path="/chart" element={<Navigate replace to="/chart" />} />
              </Routes>
            )}
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
