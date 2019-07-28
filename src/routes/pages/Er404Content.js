import React from 'react'
import { withRouter } from 'react-router-dom'

class Content extends React.Component {

    goBack = () => {
        // const currPath = this.props.history.location.pathname
        // console.log(currPath);
        this.props.history.goBack()
        // setTimeout((params) => {
            
            // this.props.history.push(currPath);
        // }, 10000
        // )

        
    }

    handleHover = (e) => {
        // animation for icon inside back button
        // if (e.type === 'mouseover') {
        //     this.props.anims.applyAnimation('.fas.fa-chevron-circle-left', 'slideOutLeftIN')

        // } else {
        //     console.log(e.type);
        //     this.props.anims.applyAnimation('.fas.fa-chevron-circle-left', 'slideOutLeftOUT')
        // }
    }
    
    
    render() {
        return (
            <section className="container">
                <div className="er404 er404-holder">
                    <h1 className="er404 er404-big-text">404</h1>
                    <h4 className="er404 er404-text">We couldn't find <br/> this page.</h4>
                    {/* <button className="er404 button back unselectable" onClick={this.goBack} ><i className="fas fa-chevron-circle-left"/> GO BACK</button> */}
                    <button className='er404 er404-btn button unselectable' onClick={this.goBack}>
                        <div className='icon fas fa-chevron-circle-left'></div>
                        <span>GO BACK</span>
                    </button>
                </div>
            </section>
        )
    }
}
export default withRouter(Content)