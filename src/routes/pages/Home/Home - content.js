import React from 'react'
import Clock from 'react-live-clock'

export default class Content extends React.Component {

    render() {
        return (
            <section className="container">
                <h6 className="title fancy">
                    <p>The Fanciest Clock in the Universe!</p>
                        <Clock className="timer" ticking="true" format="HH:mm:ss"/>
                    <br/>
                </h6>
                <img src="css/img/custom-hand.png" alt="Hand with a clock" className="hand-img"/>
            </section>
        )
    }
}