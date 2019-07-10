import React from 'react'
import { withRouter } from 'react-router-dom'

class Content extends React.Component {

    goBack = () => {
        this.props.history.goBack()
    }
    
    render() {
        return (
            <section className="container">
                <div className="er404 holder">
                    <h1 className="er404 big text">404</h1>
                    <h4 className="er404 text">We couldn't find <br/> this page.</h4>
                    <button className="er404 button back"onClick={this.goBack}><i class="fas fa-chevron-circle-left"/> GO BACK</button>
                </div>
            </section>
        )
    }
}
export default withRouter(Content)