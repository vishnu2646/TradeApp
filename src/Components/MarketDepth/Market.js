import React, { useEffect, useState } from 'react'
import HpChart from '../Charts/Hpchart'
import IdChart from '../Charts/IdChart'
import MaterialTable from 'material-table'; 
import { forwardRef } from 'react';
import './Market.css'
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import IntraDay from './IntraDay';

const Market = () => {
    
    const [highPower,setHighPower] = useState([]);
    const [temp,setTemp] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTemp((prevTemp) => prevTemp+1)
        },300000)
    },[])

    useEffect(() => {
        fetch("https://dth.tredcode.com/screen?type=MONEYFLOW%20ABS%20B")
            .then((data) => data.json())
            .then((data) => setHighPower((data.data)))
    },[temp])

    const tableIcons = {
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    };

    const columns = [
        { 
            title:"Symbol", 
            field:"Symbol" 
        },
        { 
            title:"Ltp", 
            field:"param_1" 
        },
        { 
            title:"Pre Clo", 
            field:"param_2" 
        },
        { 
            title:"%", 
            field:"param_3",
            cellStyle:(e,rowData) => {
                if(rowData.param_3 > 0){
                    return { color:"#7CFC00",fontWeight:"bold" }
                }
                else if(rowData.param_3 < 0){
                    return { color:"#FF0000",fontWeight:"bold" }
                }
                else{
                    console.log(e)
                }
            }, 
        },
        { 
            title:"Rank", 
            field:"param_0",
            cellStyle:(e,rowData) => {
                if(rowData.param_0 > 0){
                    return { color:"#06f",fontWeight:"bold" }
                }
                else{
                    console.log(e)
                }
            }, 
        },
    ]

    return (
        <div>
            <div className="hptable">
                <div className="high">
                    <MaterialTable 
                        title = "High Power"
                        data = {highPower}
                        columns = {columns}
                        icons={tableIcons}
                        options={{
                            pageSize: 10,
                            pageSizeOptions: [5, 10, 20, 50]
                        }}
                    />
                </div>
                <div className="intra">
                    <IntraDay/>
                </div>
            </div>
            <div className="marketChart">
                <HpChart/>
                <IdChart/>
            </div>
        </div>
    )
}

export default Market

