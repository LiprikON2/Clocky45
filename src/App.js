import React from 'react';
// import Home from './routes/home/Home'; __LEGACY
import { Route, Switch, Link } from 'react-router-dom'
import Home from './routes/pages/Home/Home'
import Main from './routes/pages/Main/Main'
import About from './routes/pages/About/About'

export default class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Main" component={Main} />
                <Route exact path="/About" component={About} />
            </Switch>
        )
    }
}