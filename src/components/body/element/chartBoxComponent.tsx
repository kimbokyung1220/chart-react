import React, { useState } from 'react';
import { Select } from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Item from 'antd/lib/list/Item';

interface resultProps {
    searchData: {
        basicDate: string;
        impCnt: string;
        clickCnt: string;
        convCnt: string;
        sellCost: string;
        adSpend: string;
    }[];
}

const ChartBoxComponent = (props:resultProps) => {
   
    return (
        <>
            <div className="box-header">
                <div className="box-left">
                    <h2 className="fz-20 fw-med fc-10">헤더</h2>
                </div>
                <div className="box-right">
                    <div className="box-right">
                        {/* 확인필요 */}
                        <div className="ant-select small w-150 ant-select-single ant-select-show-arrow">
                            <Select
                                defaultValue="impCnt"
                                // onChange={selectBoxChange}
                                options={[
                                    { value: 'impCnt', label: '노출수' },
                                    { value: 'clickCnt', label: '클릭수' },
                                    { value: 'convCnt', label: '전환수' },
                                    { value: 'sellCost', label: '판매금액' },
                                    { value: 'adSpend', label: '광고비' },
                                ]}
                            />
                        </div>
                        <div className="ant-select small w-150 ant-select-single ant-select-show-arrow">
                            <Select
                                defaultValue="clickCnt"
                                // onChange={selectBoxChange}
                                options={[
                                    { value: 'impCnt', label: '노출수' },
                                    { value: 'clickCnt', label: '클릭수' },
                                    { value: 'convCnt', label: '전환수' },
                                    { value: 'sellCost', label: '판매금액' },
                                    { value: 'adSpend', label: '광고비' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="box-body">
                <div className="box-top">
                    <div className="line-bar-chart-area">

                        <HighchartsReact 
                            highcharts={Highcharts}
                            // 차트크기 style
                            containerProps={{ style: { width: '100%', height: '100%' } }}
                            options={DoubleLineChartConfig(props)} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default ChartBoxComponent

export function DoubleLineChartConfig(props:resultProps){

    const basicDate = props.searchData.map((item) => Number(item.basicDate))
    const impCnt = props.searchData.map((item) => Number(item.impCnt));
    const clickCnt = props.searchData.map((item) => Number(item.clickCnt));

    return {
        //이하 기존의 옵션들 가져옴
        lang: { thousandsSep: ',', noData: "데이터 없음."},
        title: { text: '' },
        colors: ['#fb4c4c', '#fb814c', '#fbc74c', '#fbf94c', '#96fb4c', '#4cfb7d', '#4cfbc3', '#4cedfb', '#4cbbfb', '#4c75fb', '#604cfb', '#a64cfb', '#ed4cfb', '#fb4cb7', '#fb4c6d'],
        // 오른쪽 하단 highchart 표기 미설정,
        credits: { enabled: false },
        // 한 차트 내의 2개 이상의 데이터가 노출 될 경우 마우스 오버 시 같이 나오도록
        tooltip: { shared: true, crosshair: true, headerFormat: '<span style="font-weight: bold;">{point.key}</span><br/>', borderColor: '#CCC' },
        // 차트 하단의 데이터 표기 항목 배경
        legend: { backgroundColor: 'white', borderColor: '#CCC', borderWidth: 1}, 
        // 차트 타입 설정
        chart: { type: 'line', spacingLeft: 0, spacingRight: 0, marginTop: 30,},
        // 차트 x축 설정(대부분 basicDate로 한다)
        xAxis: { 
            categories: basicDate
            // [
            //     20220718, 20220719, 20220720, 20220721, 20220722, 20220723, 20220724, 20220725, 20220726, 20220727, 20220728, 20220729, 20220730, 20220731, 20220801, 20220802, 20220803, 20220804, 20220805, 20220806, 20220807, 20220808, 20220809, 20220810, 20220811, 20220812, 20220813, 20220814, 20220815, 20220816 
            // ]
        },

        yAxis: [{ min: 0, title: { text: '노출수'.split("").join("<br/>"), rotation:0, margin: 10}, labels:{format:'{value:,.0f}'}}
        , { min: 0, title: { text: '클릭수'.split("").join("<br/>"), rotation:0, margin: 10}, labels:{format:'{value:,.0f}'}, opposite : true}],

        // 차트 데이터
        series: [{ 
            name: '노출수', 
            yAxis:0, 
            data: impCnt
            
        }, { 
            name: '클릭수', 
            yAxis:1, 
            data: clickCnt
        }],
    }
}