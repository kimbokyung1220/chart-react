import { useContext } from "react";
import AuthContext from "../body/store/auth-context";


const SidebarComponent = () => {
    const authCtx = useContext(AuthContext);

    function logoutEvent() {
        authCtx.logout()
    }

    return (
        <>
            <aside className="sidebar">
                <a className="logo" href="/"></a>
                    {/* <img src="/static/images/logo.svg"
                        alt="GS ADP 로고" /> */}
                    <div className="adv-account">
                        <div className="comp-dropdown">
                            <a className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                data-toggle="dropdown"
                                href="{() => false}">
                                <div className="box-left">
                                    <div className="info-top">
                                        <i className="ico ico-mng-account" />
                                        <span className="fz-15 fw-smbold fc-10 txt-dot">GS SHOP</span>
                                    </div>
                                    <div className="info-bottom">
                                        <span className="fz-13 fw-smbold fc-5">관리 계정</span>
                                        <i className="dot" />
                                        <span className="fz-13 fw-smbold fc-3">관리자</span>
                                    </div>
                                </div>
                                <div className="box-right">
                                    <i className="ico ico-16 ico-arrow" />
                                </div>
                            </a>
                            <div className="dropdown-menu">
                                <form className="input-group xsmall expand">
                                    <i className="ico ico-search" />
                                    <input type="text"
                                        className="tf-comm"
                                        placeholder="관리 계정 검색" />
                                        <button type="reset"
                                            className="btn btn-reset" />
                                </form>
                                <div className="dropdown-group">
                                    <a className="dropdown-group-list"
                                        href="#!">
                                        <span>GS리테일 넷비전</span>
                                    </a>
                                    <a className="dropdown-group-list"
                                        href="#!">
                                        <span>GS리테일 후레쉬서브</span>
                                    </a>
                                    <a className="dropdown-group-list"
                                        href="#!">
                                        <span>GS리테일 파르나스 호텔</span>
                                    </a>
                                    <a className="dropdown-group-list"
                                        href="#!">
                                        <span>GS리테일 네트웍스</span>
                                    </a>
                                    <a className="dropdown-group-list selected"
                                        href="#!">
                                        <span>GS SHOP</span>
                                    </a>
                                    <a className="dropdown-group-list"
                                        href="#!">
                                        <span>GS리테일 OOOOO</span>
                                    </a>
                                    <a className="dropdown-group-list empty"
                                        href="#!">
                                        <i className="ico ico-empty-filter IcoGuide" />
                                        <span>검색 결과가 없습니다.</span>
                                    </a>
                                </div>
                                <a className="dropdown-group-list logout"
                                    href="#!">
                                    <span>
                                        <i className="ico ico-logout" />관리 계정 로그아웃</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="sidebar-menu tree"
                        data-widget="tree">
                        <li className="one-depth treeview">
                            <a className="one-depth-title"
                                href="#!">
                                <div className="box-left">
                                    <i className="ico ico-32 ico-menu-03" />
                                    <span className="fz-16">광고주 리포트</span>
                                </div>
                                <div className="box-right">
                                    <i className="ico ico-16 ico-arrow" />
                                </div>
                            </a>
                            <ul className="two-depth treeview-menu menu-open">
                                <li className="two-depth-title">
                                    <a href="/view/advReport/advReport01">심플 리포트</a>
                                </li>
                                <li className="two-depth-title selected">
                                    <a href='/chart'>차트 리포트</a>
                                </li>
                                <li className="two-depth-title">
                                    <a href="/view/advReport/advReport03">미니멀 리포트</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="one-depth-title"
                                href="/view/bulkMng">
                                <div className="box-left">
                                    <i className="ico ico-32 ico-menu-01" />
                                    <span className="fz-16">대량관리</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="one-depth-title"
                                href="/example/publish">
                                <div className="box-left">
                                    <i className="ico ico-32 ico-menu-01" />
                                    <span className="fz-16">퍼블리싱 체크용도</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="one-depth-title"
                                href="/view/adReg/adReg">
                                <div className="box-left">
                                    <i className="ico ico-32 ico-menu-01" />
                                    <span className="fz-16">광고 등록</span>
                                </div>
                            </a>
                        </li>
                        <li className="one-depth treeview">
                            <a className="one-depth-title"
                                href="#!">
                                <div className="box-left">
                                    <i className="ico ico-32 ico-menu-03" />
                                    <span className="fz-16">ant-design</span>
                                </div>
                                <div className="box-right">
                                    <i className="ico ico-16 ico-arrow" />
                                </div>
                            </a>
                            <ul className="two-depth treeview-menu">
                                <li className="two-depth-title">
                                    <a href="/example/emptyAgGridExample">빈 데이터 그리드</a>
                                </li>
                                <li className="two-depth-title">
                                    <a href="/adGridReport">단일 그리드 리포트</a>
                                </li>
                                <li className="two-depth-title">
                                    <a href="/adChartGridReport02">복수 차트그리드 리포트</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="one-depth-title"
                                href="/view/chartTest">
                                <div className="box-left">
                                    <i className="ico ico-32 ico-menu-01" />
                                    <span className="fz-16">차트 테스트</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="util-menu">
                        <a className="util noti"
                            href="#!">
                            <i className="ico ico-32 ico-bell" />
                            <span className="fz-16 fw-smbold">알림</span>
                            <span className="badge-num">99+</span>
                        </a>
                        <a className="util notice"
                            href="#!">
                            <i className="ico ico-32 ico-notice" />
                            <span className="fz-16 fw-smbold">공지</span>
                            <span className="badge-num">9</span>
                        </a>
                    </div>
                    <div className="user-info">
                        <div className="user-info">
                            <div className="comp-dropdown dropend">
                                <a className="dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                    <div className="box-left">
                                        <i className="ico ico-user-thumb" />
                                    </div>
                                    <div className="box-right">
                                        <div className="box-top">
                                            <span className="fz-15 fw-smbold fc-10 txt-dot">kimyad</span>
                                            <span className="fz-15 fw-smbold fc-10">님</span>
                                        </div>
                                        <p className="box-bottom">
                                            <span className="fz-13 fw-smbold fc-3">소속회사명</span>
                                            <i className="dot" />
                                            <span className="fz-13 fw-smbold fc-3">광고주</span>
                                        </p>
                                    </div>
                                </a>
                                <div className="dropdown-menu">
                                    <div className="box-top">
                                        <div className="account-info">
                                            <div className="box-info">
                                                <div className="box-left">
                                                    <i className="ico ico-user-thumb" />
                                                </div>
                                                <div className="box-right">
                                                    <div className="inner-top">
                                                        <span className="fz-16 fw-smbold fc-10 txt-dot">kimyadkimyadkimyad</span>
                                                        <span className="fz-16 fw-smbold fc-10">님</span>
                                                    </div>
                                                    <div className="inner-bottom">
                                                        <span className="fz-13 fc-3">11시11분</span>
                                                        <i className="dot" />
                                                        <span className="fz-13 fc-3">광고주</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-btn-area">
                                                <div className="btn-group small">
                                                    <button type="button"
                                                        className="btn">내 정보</button>
                                                    <i className="bar" />
                                                    <button type="button"
                                                        className="btn"
                                                        onClick={logoutEvent}>로그아웃</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-bottom">
                                        <div className="point-info">
                                            <div className="point-total">
                                                <i className="ico ico-point">P</i>
                                                <span className="fz-18 fw-smbold fc-10">555,555,555</span>
                                            </div>
                                            <div className="point-info-detail">
                                                <dl className="charged">
                                                    <dt className="fz-12 fc-5">유료 포인트</dt>
                                                    <dd className="fz-12 fc-5">555,455,555</dd>
                                                </dl>
                                                <dl className="free">
                                                    <dt className="fz-12 fc-5">무료 포인트</dt>
                                                    <dd className="fz-12 fc-5">100,000</dd>
                                                </dl>
                                            </div>
                                            <div className="box-btn-area">
                                                <div className="btn-group small">
                                                    <button type="button"
                                                        className="btn">결제 관리</button>
                                                    <i className="bar" />
                                                    <button type="button"
                                                        className="btn">충전하기</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="btn-sidebar"
                        data-toggle="push-menu"
                        role="button">
                        <i className="ico" />
                    </a>
            </aside>
        </>
    );
}

export default SidebarComponent;