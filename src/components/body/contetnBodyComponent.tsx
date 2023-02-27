import SearchBox from "./element/searchBoxComponent";
import ChartBox from "./element/chartBoxComponent";
import StatisticsTable from "./element/statisticsTableComponent";
import React, { useContext, useState } from 'react';
import axios from 'axios';
import moment from "moment";
import { eventProps } from "./element/searchBoxComponent";
import { pick } from "highcharts";
import AuthContext from "./store/auth-context";

const ContetnBodyComponent = () => {

    const authCtx = useContext(AuthContext);
    

    // API Response Data (All) 상태
    const [searchData, setSearchData] = useState([]);

    // piker Date 상태
    const [pikerDate, setPikerDate] = useState<eventProps['pikerDate']>([
        moment(),
        moment()
    ]);

    // 날짜 Range
    const startDate: any = pikerDate![0]
    const endDate: any = pikerDate![1]

    // pikerDate onchageEvent
    const handleChangeDate: eventProps['changeDate'] = (e) => setPikerDate(e);

    // 선택 조건 조회 event
    const searchOnclick = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/chart', // 확인 필요 => emv파일로 common으로 사용
            responseType: 'json',
            data: {
                //piker date
                startDate: startDate,
                endDate: endDate
            }
            ,
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': authCtx.token
            }
        })
            .then((response) => {
                const data = response.data.data
                console.log(data)

                // 전체 데이터
               setSearchData(data)

            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <div id="wrap" className="wrap">
                <div className="container-fluid">

                    {/* 선택 조건 조회 */}
                    <div className="row">
                        <div className="col col-12">
                            {/* <section className="wrap-section wrap-filter-"> */}
                            {/* <SearchBox data={setData}/> */}
                            <SearchBox
                                searchEvent={searchOnclick}
                                pikerDate={pikerDate}
                                changeDate={handleChangeDate}
                            />
                            {/* </section> */}
                        </div>
                    </div>

                    {/* 차트 */}
                    <div className="row">
                        <div className="col col-12">
                            <section className="wrap-section wrap-chart">
                                <ChartBox searchData={searchData} />
                            </section>
                        </div>
                    </div>

                    {/* 통계 표 */}
                    <div className="row">
                        <div className="col col-12">
                            <section className="wrap-section wrap-datagrid">
                                <StatisticsTable searchData={searchData} />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContetnBodyComponent;