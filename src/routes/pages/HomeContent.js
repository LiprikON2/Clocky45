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
                background: 'transparent',
                fontSize: '16px'
            }} 
            value={currentTime}
            readOnly={true}
            // prevents iOS keyboard popup
            type="date"
        />
        ReactDOM.render(textArea, document.getElementById('copyNode'));
        
        const textAreaId = document.getElementById('textArea')
        
        // handle iOS as a special case
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            
            // save current contentEditable/readOnly status
            const editable = textAreaId.contentEditable
            const readOnly = textAreaId.readOnly
            
            // convert to editable with readonly to stop iOS keyboard opening
            textAreaId.contentEditable = true
            textAreaId.readOnly = true
            
            // create a selectable range
            const range = document.createRange()
            range.selectNodeContents(textAreaId)
        
            // select the range
            const selection = window.getSelection()
            selection.removeAllRanges()
            selection.addRange(range)
            textAreaId.setSelectionRange(0, 999999)
            
            // restore contentEditable/readOnly to original state
            textAreaId.contentEditable = editable
            textAreaId.readOnly = readOnly
        }
        else {
            textAreaId.focus()
            textAreaId.select()
        }
        
      
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        ReactDOM.unmountComponentAtNode(document.getElementById('copyNode'))
    }
    
    
    
    handleClick = (event) => {
        switch(event.target.className) {
            case 'clock timer unselectable':
                const currentTime = document.querySelector('.clock.timer').innerHTML
                this.copyTextToClipboard(currentTime)
                this.props.anims.applyTransition('.popup')
                return
                
            case 'hand-img':
                this.props.anims.applyAnimation('.hand-img', 'tada')
                return
        }
    }
    
    render() {
        return (
            <section className="container">
                <h6 className="title fancy">
                    <p>The Fanciest Clock in the Universe!</p>
                        <div className="timer-wrapper">
                            <div className="popup timer unselectable">Copied!</div>
                            <Clock
                                className="clock timer unselectable"
                                ticking={true}
                                format="HH:mm:ss"
                                onClick={this.handleClick}
                            />   
                        </div>
                    <br/>
                </h6>
                <img
                    src="css/img/custom-hand.png" 
                    alt="Hand with a clock" 
                    className="hand-img"
                    onClick={this.handleClick}               
                    />
            </section>
        )
    }
}

//  && this.handImg.current.disabled