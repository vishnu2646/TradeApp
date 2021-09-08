import React from 'react'
import './Cards.css'

const Cards = () => {

    // const [first,setFirst] = useState([]);
    // const [second,setSecond] = useState([]);

    // const TopData = () => {
    //     fetch("https://dth.tredcode.com/screen?type=MONEYFLOW%20ABS%20B")
    //         .then((data) => data.json())
    //         .then((data) => setFirst(data.data[0]))
    // }
    // useEffect(() => {
    //     TopData();
    // })

    return (
        <div className="cards">
            <div className="card1">
                <div className="card-icon">
                    <span><i className="fas fa-layer-group"></i></span>
                </div>
                <div className="card-detail">
                    <h4>Total Stocks:</h4>
                    <h2>&#8377; 150,000</h2>
                </div>
                <p>Increased By 60%</p>
            </div>
            <div className="card1">
                <div className="card-icon">
                    <span><i className="fas fa-layer-group"></i></span>
                </div>
                <div className="card-detail">
                    <h4>Total Stocks:</h4>
                    <h2>&#8377; 150,000</h2>
                </div>
                <p>Increased By 60%</p>
            </div>
            <div className="card1">
                <div className="card-icon">
                    <span><i className="fas fa-layer-group"></i></span>
                </div>
                <div className="card-detail">
                    <h4>Total Stocks:</h4>
                    <h2>&#8377; 150,000</h2>
                </div>
                <p>Increased By 60%</p>
            </div>
            <div className="card1">
                <div className="card-icon">
                    <span><i className="fas fa-layer-group"></i></span>
                </div>
                <div className="card-detail">
                    <h4>Total Stocks:</h4>
                    <h2>&#8377; 150,000</h2>
                </div>
                <p>Increased By 60%</p>
            </div>
        </div>
    )
}

export default Cards
