import React from 'react'
import toggleDesktopMode from './DesktopMode'


export default class Content extends React.Component {
    state = {
        isCreditsOpen: false,
        width: 0,
        heigth: 0
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        this.formateCreditsDetails(this.state.isCreditsOpen)
    }

    openCredits = () => {
        const isGoMobileAdded = document.querySelector('.mobile').style.display === "unset" ? true : false
        console.log("TCL: Content -> openCredits -> isGoMobileAdded", isGoMobileAdded)

        document.querySelector('.credits').style.height = isGoMobileAdded ? "8em" : "6.8em"
        document.querySelector('.panelsContainer').style.height = isGoMobileAdded ? "8em" : "6.8em"
        document.querySelector('.inc').style.display = "none"
        document.querySelector('.closeCredits').style.display = "unset"

        this.formateCreditsDetails(true)
        this.setState({
            isCreditsOpen: true
        })
    }
    closeCredits = () => {
        document.querySelector('.credits').style.height = "1.2em"
        document.querySelector('.panelsContainer').style.height = "0"
        document.querySelector('.inc').style.display = "unset"
        document.querySelector('.closeCredits').style.display = "none"

        this.formateCreditsDetails(false)
        this.setState({
            isCreditsOpen: false
        })
    }

    // Formate details size according to viewpoint
    formateCreditsDetails = (toOpen) => {
        if (toOpen) { 
            if (this.state.width >= 1025) {
                this.setState({creditsStyle: {gridTemplateAreas: `
                    '. panelsContainer panelsContainer .'
                    '. panelsContainer panelsContainer .'
                    '. panelsContainer panelsContainer .'
                    '. panelsContainer panelsContainer .'
                    '. panelsContainer panelsContainer .'
                `}})
            } else {
                this.setState({creditsStyle: {gridTemplateAreas: `
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                `}})
            }
        } else {
            if (this.state.width >= 1025) {
                this.setState({creditsStyle: {gridTemplateAreas: `
                    "inc inc inc inc"
                    ". panelsContainer panelsContainer ."
                    ". panelsContainer panelsContainer ."
                    ". panelsContainer panelsContainer ."
                    ". panelsContainer panelsContainer ."
                `}})
            } else {
                this.setState({creditsStyle: {gridTemplateAreas: `
                    'inc inc inc inc'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                    'panelsContainer panelsContainer panelsContainer panelsContainer'
                `}})
            }
        }
    }

    
    
    render() {
        return (
            <footer className="credits" style={this.state.creditsStyle}>
                <p className="inc" onMouseOver={this.openCredits}>
                    © 2019 Lee Perchino Inc. All rights reserved.&nbsp;
                    <a href="#" className="showDetails">{this.state.isCreditsOpen ? "Hide" : "Show"} details</a>
                </p>
                <div className="panelsContainer">
                    <div className="panel contacts">
                        <h4 className="panelTitle contacts">Contacts</h4>
                        <ul className="panelText contacts">
                            <li>Phone: <span>732-365-5505</span></li>
                            <li>Fax:   <span>732-365-2313</span></li>
                            <li>Email: <span>office@clocky45.com</span></li>
                        </ul>
                    </div>
                    <div className="panel address">
                        <h4 className="panelTitle address">Address</h4>
                        <ul className="panelText address">
                            <li>Clokcy45</li>
                            <li>1985 Cedar Bridge Ave.,</li>
                            <li>Suite 5 Lakewood, NJ 0870</li>
                        </ul>
                    </div>
                </div>
                <a href="#" className="mobile" onClick={toggleDesktopMode}>Back to mobile version</a>
                <div className="closeCredits" onMouseOver={this.closeCredits} onClick={this.closeCredits} style={{display: "none"}}></div>
            </footer>
        )
    }
}