import React from 'react'
import { withRouter } from 'react-router-dom'

class Content extends React.Component {

    goBack = () => {
        this.props.history.goBack()
    }
    
    render() {
        return (
            <section className="container">
                <h1 className="title big er404">404</h1>
                <h4 className="title er404">We couldn't find this page.</h4>
                <button className="button back"onClick={this.goBack}><i class="fas fa-chevron-circle-left"/> GO BACK</button>
            </section>
        )
    }
}
export default withRouter(Content)