import React from 'react'
import ReactDOM from 'react-dom'
import Clock from 'react-live-clock'

export default class Content extends React.Component {

    copyTextToClipboard = (currentTime) => {
        const textArea = <textarea 
            id="textArea" 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '2em',
                padding: 0,
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                background: 'transparent'
            }} 
            value={currentTime}
            contenteditable="true"
        />
        ReactDOM.render(textArea, document.getElementById('copyNode'));

        document.getElementById('textArea').focus()
        document.getElementById('textArea').select()
        
      
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        ReactDOM.unmountComponentAtNode(document.getElementById('copyNode'))
    }
    handleCopy = () => {
        const currentTime = document.querySelector('.clock.timer').innerHTML
        this.copyTextToClipboard(currentTime)

        const popup = document.querySelector('.popup.timer')
        popup.style.visibility = "unset"
        popup.style.opacity = "1"
        setTimeout(function() {
            popup.style.opacity = "0"
        }, 1000);
        setTimeout(function() {
            popup.style.visibility = "hidden"
        }, 1800);
        
    }

    render() {
        return (
            <section className="container">
                <h6 className="title fancy">
                    <p>The Fanciest Clock in the Universe!</p>
                        <div className="popup timer">Copied!</div>
                        <Clock className="clock timer unselectable" ticking={true} format="HH:mm:ss" onClick={this.handleCopy}/>
                    <br/>
                </h6>
                <img src="css/img/custom-hand.png" alt="Hand with a clock" className="hand-img"/>
            </section>
        )
    }
}