import React, { createContext } from "react";
import { useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { RangePickerProps } from 'antd/lib/date-picker';


// DataContext 객체를 생성
// export const DataContext = createContext();
export interface eventProps{
    searchEvent:() => void;
    //piker 관련
    pikerDate: RangePickerProps['value'];
    changeDate : RangePickerProps['onChange'];
    
}

const SearchBoxComponent = ({searchEvent, pikerDate, changeDate}: eventProps) => {

    // DatePicker 사용
    const { RangePicker } = DatePicker;
    // Date 형식
    
    const dateFormat = 'YYYY-MM-DD';
    // selectBox 이벤트 (템플릿 검색 기준)

    const selectBoxChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    // const [grid, setGrid] = useState(null);

    return (
        <>
            <section className="wrap-section wrap-filter">
                <div className="box-body">
                    <div className="filter-icon-area">
                        <i className="ico ico-filter" />
                    </div>
                    <div className="filter-content">
                        <div className="filter-row">

                            {/* <! -- selectbox 그룹 --> */}
                            <div className="filter-group">
                                <div className="filter-label">
                                    <p className="fz-16 fw-med fc-7">템플릿 검색 기준</p>
                                </div>
                                <div className="filter-box">
                                    <div className="filter-col">
                                        <Select
                                            defaultValue="productNum"
                                            onChange={selectBoxChange}
                                            // selectBox 데이터
                                            options={[
                                                { value: 'advertiser', label: '광고주' },
                                                { value: 'productNum', label: '상품번호' },
                                                { value: 'adGroup', label: '광고그룹명' },
                                                { value: 'keyword', label: '키워드' },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* <! -- input 그룹 --> */}
                            <div className="filter-group">
                                <div className="filter-label">
                                    <p className="fz-16 fw-med fc-7">검색어 입력</p>
                                </div>
                                <div className="filter-box">
                                    <div className="filter-col">
                                        <div className="input-group ">
                                            <Input type="text" name="searchText" className="tf-comm" placeholder="검색어 입려억~~" value="" />
                                            <p className="txt-validation">체크 / 에러 문구 내용 영역</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- DatePicker 그룹 --> */}
                            <div className="filter-group">
                                <div className="filter-label">
                                    <p className="fz-16 fw-med fc-7">기간 조해22</p>
                                </div>
                                <div className="filter-box">
                                    <div className="filter-col">
                                        <div className="comp-datepicker range">
                                            <button type="button" className="btn outline gray btn-ico"><i className="ico ico-prev"></i></button>
                                            <Space direction="vertical" size={12}>
                                                <RangePicker
                                                    // 기본날짜 설정
                                                    defaultValue={[moment('2023-01-24', dateFormat), moment('2023-01-30', dateFormat)]}
                                                    format={dateFormat}
                                                    value = {pikerDate}
                                                    onChange ={changeDate}
                                                />
                                            </Space>
                                            <button type="button" className="btn outline gray btn-ico" disabled><i className="ico ico-next"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="filter-inquire">
                        <button onClick={searchEvent} type="button" className="btn btn-ico outline blue --ico-txt "><i className="ico ico-filter"></i>선택 조건 조회</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SearchBoxComponent;