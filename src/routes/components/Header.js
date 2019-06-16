import React from 'react'

import { Link, withRouter } from 'react-router-dom'
 
const openNav = () => {
    document.getElementById("mySidenav").style.width = "700px"
    document.querySelector(".closeSidenav").style.display = "unset"
}

class Header extends React.Component {
    
    render() {
        const path = this.props.location.pathname
        const acitveStyle = {backgroundColor: "black", color: "#fec00f"}
        return (
            <div className="v-shape">
                <header className="head-wrap">
                    <button id="menu-button" className="fas fa-bars" onClick={openNav}></button>
                    <Link to="/" className="logo">
                        <img className="logo-img unselectable" src="css/img/clock.svg" alt="clock logo"/>
                        <div className="logo-name unselectable">Clocky</div>
                    </Link>
                    <nav className="navigation">
                        <Link to="/" className="button topNav unselectable" style={path === "/" ? acitveStyle : null}>Home</Link>
                        <Link to="/Main" className="button topNav unselectable" style={path === "/Main" ? acitveStyle : null}>Main</Link>
                        <Link to="/About" className="button topNav unselectable" style={path === "/About" ? acitveStyle : null}>About</Link>
                    </nav>
                </header>
            </div>
        )
    }
}
export default withRouter(Header)