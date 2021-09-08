import React,{ useState,useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios';
import './Swing.css'


const url = "https://dth.tredcode.com/screen?type=MAJOR%20INDEX%20WEEKLY%20PERFORMANCE"

const MajorIndex = () => {
    const [chartData, setChartData]  = useState({});

    const Chart = () => {
        let empSal = [];
        let empAge = [];

        axios.get(url)
        .then(res => {
            let count = 0
            for(const dataObj of res.data.data){
                if(count < 10){
                    empSal.push(dataObj.Symbol);
                    empAge.push(dataObj.param_0);
                    count++;
                }
            }

            setChartData({
                labels: empSal,
                datasets: [{
                    data: empAge,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            });
        })
        .catch(err =>{
            console.log(err);
        })
        
    }
    useEffect(() => {
        Chart();
    }, []);
    return (
        <div className="swingmajor">
            <h3>Major index weekly performance</h3>
            <div className="majorChart">
                <Bar
                    data = {chartData}
                    options = {{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:{
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default MajorIndex
