import React from 'react';
import { Route, Switch } from 'react-router-dom'

//Functions
import toggleDesktop from './functions/toggleDesktop'
import anims from './functions/anims'

//Components
import Sidebar from "./routes/components/Sidebar.component"
import Header from './routes/components/Header.component'
import Footer from './routes/components/Footer.component'

//Pages
import HomeContent from './routes/pages/Home.component'
import MainContent from './routes/pages/Main.component'
import AboutContent from './routes/pages/About.component'
import Er404Content from './routes/pages/Er404.component'


export default class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <div className="page-container">
                        <Sidebar toggleDesktop={toggleDesktop} />
                        <Header />
                        <HomeContent anims={anims} />
                        <Footer toggleDesktop={toggleDesktop} />
                    </div>
                </Route>

                <Route exact path="/Main">
                    <div className="page-container">
                        <Sidebar toggleDesktop={toggleDesktop} />
                        <Header />
                        <MainContent />
                        <Footer toggleDesktop={toggleDesktop} />
                    </div>
                </Route>

                <Route exact path="/About">
                    <div className="page-container">
                        <Sidebar toggleDesktop={toggleDesktop}/>
                        <Header />
                        <AboutContent />
                        <Footer toggleDesktop={toggleDesktop}/>
                    </div>
                </Route>

                <Route path="/">
                    <div className="page-container">
                        <Sidebar toggleDesktop={toggleDesktop}/>
                        <Header />
                        <Er404Content anims={anims} />
                        <Footer toggleDesktop={toggleDesktop}/>
                    </div>
                </Route>
            </Switch>
        )
    }
}