import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './routes/pages/Home/Home'
import Main from './routes/pages/Main/Main'
import About from './routes/pages/About/About'
import page404 from './routes/pages/404/404'


export default class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Main" component={Main} />
                <Route exact path="/About" component={About} />
                <Route path="/" component={page404} />
            </Switch>
        )
    }
}