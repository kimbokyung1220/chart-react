import React, { useContext } from 'react';
import ContentHeader from "../header/contentHeaderComponent";
import AppBody from "../body/appBodyComponent";
import ContentFooter from "../footer/contentFooterComponent";
import AuthContext from '../body/store/auth-context';
import HomeBody from '../body/homeBodyComponent';

const HomeComponent = () => {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <div className="content">
                {/* 본문 헤더 */}
                <div className="content-header">
                    <ContentHeader headerTitle={"🌞 로 그 인 완 룡 🌞"} />
                </div>
                {/* 본문 내용 */}
                <div className="content-body">
                    <HomeBody />
                </div>
                {/* 본문 풋터 */}
                <div className="content-footer">
                    <ContentFooter />
                </div>
            </div>
        </>
    );
}

export default HomeComponent;