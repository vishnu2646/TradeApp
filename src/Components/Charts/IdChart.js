import React,{  useEffect,useState  } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios';

const IdChart = () => {
    const [chartData, setChartData]  = useState({});

    const Chart = () => {
        let empSal = [];
        let empAge = [];

        axios.get("https://dth.tredcode.com/screen?type=MONEYFLOW%20REL%20B")
        .then(res => {
            let count = 0
            for(const dataObj of res.data.data){
                if(count < 20){
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
        const interval = setInterval(() => {
            Chart()
        },300000)
        return()=>clearInterval(interval)
    }, []);

    return (
        <div className="hpchart">
            <h2>Intraday Boost <span>Live</span></h2>
            <div>
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

export default IdChart