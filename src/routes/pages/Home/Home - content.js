import React from 'react'
import Clock from 'react-live-clock'

export default class Content extends React.Component {

    copyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");       
        
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent'; 
 
        textArea.value = text;
      
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
      
        document.body.removeChild(textArea);
    }
    copyTime = () => {
        this.copyTextToClipboard(document.querySelector('.timer').innerHTML)
    }
    render() {
        return (
            <section className="container">
                <h6 className="title fancy">
                    <p>The Fanciest Clock in the Universe!</p>
                        <Clock className="timer unselectable" ticking={true} value="so thats it?" format="HH:mm:ss" onClick={this.copyTime}/>
                    <br/>
                </h6>
                <img src="css/img/custom-hand.png" alt="Hand with a clock" className="hand-img"/>
            </section>
        )
    }
}