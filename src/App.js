import React from 'react';
import { Route, Switch } from 'react-router-dom'

//Components
import Sidebar from "./routes/components/Sidebar"
import Header from './routes/components/Header'
import Footer from './routes/components/Footer'

//Pages
import HomeContent from './routes/pages/HomeContent'
import MainContent from './routes/pages/MainContent'
import AboutContent from './routes/pages/AboutContent'
import Er404Content from './routes/pages/Er404Content'


export default class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <div className="page-container">
                        <Sidebar />
                        <Header />
                        <HomeContent />
                        <Footer />
                    </div>
                </Route>

                <Route exact path="/Main">
                    <div className="page-container">
                        <Sidebar />
                        <Header />
                        <MainContent />
                        <Footer />
                    </div>
                </Route>

                <Route exact path="/About">
                    <div className="page-container">
                        <Sidebar />
                        <Header />
                        <AboutContent />
                        <Footer />
                    </div>
                </Route>

                <Route path="/">
                    <div className="page-container">
                        <Sidebar />
                        <Header />
                        <Er404Content />
                        <Footer />
                    </div>
                </Route>
            </Switch>
        )
    }
}