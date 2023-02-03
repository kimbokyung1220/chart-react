import { AgGridReact } from "ag-grid-react";
import React, { useRef } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface resultProps{
    searchData:any;
}

const StatisticsTableComponent = ({searchData}: resultProps) => {

    // 고정값
    const columnDefs = [
        // { headerName : Checkbox, field: 'Check'},
        { headerName: '날짜', field: 'basicDate', headerCheckboxSelection: true, checkboxSelection: true },
        { headerName: '노출수', field: 'impCnt' },
        { headerName: '클릭수', field: 'clickCnt' },
        { headerName: '전환수', field: 'convCnt' },
        { headerName: '판매금액', field: 'sellCost' },
        { headerName: '광고비', field: 'adSpend' }
    ]

    // ad-grid 크기 조절 : AgGridReact를 바라봄
    const gridRef = useRef<AgGridReact>(null);

    const onGridReady = () => {
        gridRef.current?.api.sizeColumnsToFit();
    };
    return (
        <>
            {/* <!-- 그리드 header --> */}
            <div className="box-header">
                <div className="box-left">
                    <h2 className="fz-18 fw-med fc-10">그리드으~헤더어~</h2>
                    <span className="fz-14 fw-med fc-5"></span>
                </div>
                <div className="box-right">
                    <button type="button" className="btn outline aqua btn-ico --txt-ico small">csv 다운로드<i className="ico ico-download IcoGuide"></i></button>
                </div>
            </div>

            {/* <!-- 그리드 body --> */}
            <div className="box-body" >
                {/* <!-- AG Grid --> */}
                <div className='ag-theme-alpine'>
                    <AgGridReact
                        ref={gridRef}
                        rowData={searchData}
                        columnDefs={columnDefs}
                        onGridReady={onGridReady}
                        domLayout={"autoHeight"}
                        pagination={true}
                        paginationPageSize={10}
                    >
                    </AgGridReact>
                </div>
            </div>

            {/* <!-- 그리드 footer --> */}



        </>
    );
}

export default StatisticsTableComponent;