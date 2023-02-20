import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/sidebarComponent'
import AppContent from './components/layout/appComponent';
import Content from './components/layout/contentComponent'
import { AuthContextProvider } from './components/body/store/auth-context';
import AuthContext from './components/body/store/auth-context';

import 'antd/dist/antd.css'
import './static/css/common.css'
import './static/css/fonts/Pretendard/fonts.css'
import './static/css/layout.css'

import './static/css/plugin.css'
import '../src/static/css/fonts/Pretendard/fonts.css';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>

      <div id="wrap" className="wrap">
        {/* 사이드바 */}
        <Sidebar />

        {/*  URL의 이동을 토큰이 존재하냐 안하냐의 여부로 제어  */}
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              {/* 본문 */}
              <Route path="/login" element={<AppContent />} />
              <Route path="/chart" element={!authCtx.isLoggedIn ? <Navigate to='/login' /> : <Content />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>

    </>
  );
}

export default App;
