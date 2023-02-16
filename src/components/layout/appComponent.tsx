import ContentHeader from "../header/contentHeaderComponent";
import AppBody from "../body/appBodyComponent";
import ContentFooter from "../footer/contentFooterComponent";

const AppComponent = () => {
    return (
        <>
            <div className="content">
                {/* 본문 헤더 */}
                <div className="content-header">
                    <ContentHeader headerTitle={"로 그 인 🔐 "} />
                </div>
                {/* 본문 내용 */}
                <div className="content-body">
                    <AppBody />
                </div>
                {/* 본문 풋터 */}
                <div className="content-footer">
                    <ContentFooter />
                </div>
            </div>
        </>
    );
}

export default AppComponent;