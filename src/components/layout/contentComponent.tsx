import ContentHeader from "../header/contentHeaderComponent";
import ContetnBody from "../body/contetnBodyComponent";
import ContentFooter from "../footer/contentFooterComponent";

const ContentComponent = () => {
    return (
        <>
            <div className="content">
                {/* 본문 헤더 */}
                <div className="content-header">
                    <ContentHeader headerTitle={"단독 조회 필터 + 더블 라인 차트 + 데이터 그리드 리포트 조회 페이지 템플릿"} />
                </div>
                {/* 본문 내용 */}
                <div className="content-body">
                    <ContetnBody />
                </div>
                {/* 본문 풋터 */}
                <div className="content-footer">
                    <ContentFooter />
                </div>
            </div>
        </>
    );
}

export default ContentComponent;