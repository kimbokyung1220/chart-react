import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/sidebarComponent'
import Content from './components/layout/contentComponent'

import 'antd/dist/antd.css'
import './static/css/common.css'
import './static/css/fonts/Pretendard/fonts.css'
import './static/css/layout.css'

import './static/css/plugin.css'
import '../src/static/css/fonts/Pretendard/fonts.css';


function Main() {
    return (
        <>
            <div id="wrap" className="wrap">
                {/* 사이드바 */}
               <Sidebar />
                <BrowserRouter>
                    <Routes>
                        {/* 본문 */}
                        <Route path="/sample" element={<Content />} />
                    </Routes>
                </BrowserRouter>
            </div>

        </>

    );
}

export default Main;