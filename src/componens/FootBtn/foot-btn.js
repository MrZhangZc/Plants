import React, { Component } from 'react'

import './foot-btn.sass'

class FootBtn extends Component {

    constructor(props){
        super(props)
        this.state = {
            isActive: true
        }
    }

    active() {
        if(this.state.isActive){
            this.setState({
                isActive: false
            })
        }else{
            this.setState({
                isActive: true
            })
        }
    }

    render(){
        return(
            <div className="foot-btn">
                <div className={`${this.state.isActive ? 'active' : 'no-active'}`} onClick={() => this.active()}>{this.props.leftName}</div>
                <div className={`${this.state.isActive ? 'no-active' : 'active'}`} onClick={() => this.active()}>{this.props.rightName}</div>
            </div>
        )
    }
}

export default FootBtn