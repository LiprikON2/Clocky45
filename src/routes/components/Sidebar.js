import React from 'react'
import { Link } from 'react-router-dom'

import SiteVersion from './SiteVersion'

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0"
    document.querySelector(".closeSidenav").style.display = "none"
}

export default class Content extends React.Component {

    
    render() {
        return (
            <div className="sidebar">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <Link to="/" href="#">Home</Link>
                    <Link to="/Main" href="#">Main</Link>
                    <Link to="/About" href="#">About</Link>
                    <a href="#" className="desktop" onClick={SiteVersion.goDesktop}>Desktop version</a>
                </div>
                <div className="closeSidenav" onClick={closeNav}></div>
            </div>
        )
    }
}

// About
// Services
// Clients
// Contact