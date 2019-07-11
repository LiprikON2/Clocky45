import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';

import Favicon from 'react-favicon'

ReactDOM.render(
        <BrowserRouter>
            <Favicon url={["http://individual.icons-land.com/IconsPreview/BaseSoftware/PNG/256x256/AlarmClock2.png", "https://www.favicon-generator.org/download/2014-12-26/6cb68d84a7d49e5a39a296d9b0e7ade3.ico", "https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif"]}/>
            <App />
        </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
