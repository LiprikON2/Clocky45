/*
// DESKTOP VERSION REQUEST

function goDesktop() {
    // add .full class
    document.querySelector('.head-wrap').classList.add('full');
    document.querySelector('.page-container').classList.add('full');
    document.querySelector('.logo').classList.add('full');
    document.querySelector('#menu-button').classList.add('full');
    document.querySelector('#mySidenav').classList.add('full');
    document.querySelector('.container').classList.add('full');
    for (let button of document.querySelectorAll('.fancy-button')) { button.classList.add('full'); }
    document.querySelector('.title').classList.add('full');
    document.querySelector('.timer').classList.add('full');
    document.querySelector('.hand-img').classList.add('full');
    document.querySelector('.closeSidenav').classList.add('full');
    document.querySelector('.v-shape').classList.add('full');

    
    // add go mobile button
    document.querySelector('.mobile').removeAttribute('style');
}
function goMobile() {
    // remove .full class
    document.querySelector('.head-wrap').classList.remove('full');
    document.querySelector('.page-container').classList.remove('full');
    document.querySelector('.logo').classList.remove('full');
    document.querySelector('#menu-button').classList.remove('full');
    document.querySelector('#mySidenav').classList.remove('full');
    document.querySelector('.container').classList.remove('full');
    for (let button of document.querySelectorAll('.fancy-button')) { button.classList.remove('full'); }
    document.querySelector('.title').classList.remove('full');
    document.querySelector('.timer').classList.remove('full');
    document.querySelector('.hand-img').classList.remove('full');
    document.querySelector('.closeSidenav').classList.remove('full');
    document.querySelector('.v-shape').classList.remove('full');

    // remove go mobile button
    document.querySelector('.mobile').setAttribute('style', 'display: none;');
}

export default {goDesktop, goMobile}
*/


export default function toggleDesktopMode() {
    console.log('wtf');
    document.styleSheets[1].disabled = !document.styleSheets[1].disabled
    console.log(document.querySelector('.mobile').style.display);
    // document.querySelector('.mobile').style.display = "unset"
    // document.querySelector('.page-container').style.zoom = "0.5"
}
