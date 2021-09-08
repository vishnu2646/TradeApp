import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import { Bar } from 'react-chartjs-2'

const Sectorial = () => {

    const [chartData, setChartData] = useState({});

    const Chart = () => {
        let empSal = [];
        let empAge = [];

        axios.get("https://dth.tredcode.com/screen?type=SECTORIAL%20VIEW")
        .then(res => {
            for(const dataObj of res.data.data){
                empSal.push(dataObj.Symbol);
                empAge.push(dataObj.param_0);
            }

            setChartData({
                labels: empSal,
                datasets: [{
                    data: empAge,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
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
    }, [])
    return (
        <div className="sectorialFlow">
            <h2>Sectorial Flow</h2>
            <div className="sectorial">
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

export default Sectorial
