import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
 
const Sidebar = ({show}) => {
    let drawerClasses = 'side-drawer'
    if(show){
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <br/>
            <br/>
            <img src={Logo} alt="logo" style={imgStyle}/>
            <h3 className="mobileLogo">Trade Data</h3>
            <ul>
                <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                <li><Link to="/market"><i className="fa fa-poll"></i> Market Depth</Link></li>
                <li><Link to="/pro-setup"><i className="fa fa-chart-bar"></i> Pro Setups</Link></li>
                <li><Link to="/swing-center"><i className="fas fa-chart-pie"></i> Swing Center</Link></li>
            </ul>
        </nav>
    )
}

const imgStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%"
}

export default Sidebar
