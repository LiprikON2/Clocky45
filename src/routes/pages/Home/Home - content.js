import React from 'react'

export default class Content extends React.Component {
    constructor() {
        super()
        this.renderTime = this.renderTime.bind(this)
        this.state = {time: "00:00:00"}
    }
    componentWillUnmount() {
        console.log("UNMOUNTINGs");
        clearInterval(renderTime)
    }
    
    renderTime() {
        const now = new Date()

        // Formating time to 00 format (9 -> 09)
        const hour = ("0" +now.getHours()).slice(-2)
        const minute = ("0" +now.getMinutes()).slice(-2)
        const second = ("0" +now.getSeconds()).slice(-2)

        this.setState({time: `${hour}:${minute}:${second}`})
    }

    render() {
        setInterval(this.renderTime, 1000)
        return (
            <section className="container">
                <h6 className="title">
                    <p>The Fanciest Clock in the Universe!</p>
                        <div className="timer">{this.state.time}</div>
                    <br/>
                </h6>
                <img src="css/img/custom-hand.png" alt="Hand with a clock" className="hand-img"/>
            </section>
        )
    }
}