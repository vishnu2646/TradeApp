import React from 'react'
import ToggleButton  from './Sidebar/ToggleButton'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
 
const Layout = ({drawerClickHandler}) => {
    return (
        <div>
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <ToggleButton click = {drawerClickHandler}/>
                    </div>
                    <div className="toolbar__logo"><Link to="/"><img src={Logo} alt="logo" />Trading Data</Link></div>
                    <div className="spacer"/>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/market">MarketDepth</Link></li>
                            <li><Link to="/pro-setup">Pro Setups</Link></li>
                            <li><Link to="/swing-center">Swing Center</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Layout
