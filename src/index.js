import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';

import Favicon from 'react-favicon'

// importing favicon animation
// ref https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
function makeImageArray() {
    const images = importAll(require.context('./Clock Anim', false, /\.png/));
    const arr = []
    for (let key in images) {
        arr.push(images[key])
    }
    return arr
}


ReactDOM.render(
        <BrowserRouter>
            <Favicon url={makeImageArray()}/>
            <App />
        </BrowserRouter>,
    document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
