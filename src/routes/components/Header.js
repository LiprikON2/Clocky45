import React from 'react'

import { Link } from 'react-router-dom'
 
const openNav = () => {
    document.getElementById("mySidenav").style.width = "700px"
    document.querySelector(".closeSidenav").style.display = "unset"
}

export default class Header extends React.Component {

    render() {
        return (
            <div className="v-shape">
                <header className="head-wrap">
                    <button id="menu-button" className="fas fa-bars" onClick={openNav}></button>
                    <div className="logo">
                        <img className="logo-img unselectable" src="css/img/clock.svg" alt="clock logo"/>
                        <div className="logo-name unselectable">Clocky</div>
                    </div>
                    <nav className="navigation">
                        <Link to="/" className="fancy-button unselectable">Home</Link>
                        <Link to="/Main" className="fancy-button unselectable">Main</Link>
                        <Link to="/About" className="fancy-button unselectable">About</Link>
                    </nav>
                </header>
            </div>
        )
    }
}