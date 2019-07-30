import React from 'react'
// import toggleDesktopMode from '../../functions/toggleDesktop'


export default class Content extends React.Component {
    state = {
        isCreditsOpen: false,
        width: 0,
        heigth: 0,
        // isGoMobileAdded: ,
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

        document.querySelector('.credits').style.height = isGoMobileAdded ? "8em" : "6.8em"
        document.querySelector('.panelsContainer').style.height = isGoMobileAdded ? "8em" : "6.8em"
        document.querySelector('.inc').style.display = "none"
        document.querySelector('.closeCredits').style.display = "unset"

        this.formateCreditsDetails('open')
        this.setState({
            isCreditsOpen: true
        })
    }
    closeCredits = () => {
        document.querySelector('.credits').style.height = "1.2em"
        document.querySelector('.panelsContainer').style.height = "0"
        document.querySelector('.inc').style.display = "unset"
        document.querySelector('.closeCredits').style.display = "none"

        this.formateCreditsDetails('close')
        this.setState({
            isCreditsOpen: false
        })
    }

    // Formate details size according to viewpoint
    formateCreditsDetails = (operation) => {
        if (operation === 'open') { 
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
        } else if (operation === 'close') {
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
                        <h4 className="panelTitle contacts unselectable">Contacts</h4>
                        <ul className="panelText contacts">
                            <li><div className="unselectable">Phone:&nbsp;</div><span>732-365-5505</span></li>
                            <li><div className="unselectable">Fax:&nbsp;</div><span>732-365-2313</span></li>
                            <li><div className="unselectable">Email:&nbsp;</div><span>office@clocky45.com</span></li>
                        </ul>
                    </div>
                    <div className="panel address">
                        <h4 className="panelTitle address unselectable">Address</h4>
                        <ul className="panelText address">
                            <li>Clokcy45</li>
                            <li>1985 Cedar Bridge Ave.,</li>
                            <li>Suite 5 Lakewood, NJ 0870</li>
                        </ul>
                    </div>
                </div>
                <a href="#" className="mobile" onClick={this.props.toggleDesktop}>Back to mobile version</a>
                <div className="closeCredits" onMouseOver={this.closeCredits} onClick={this.closeCredits} style={{display: "none"}}></div>
            </footer>
        )
    }
}