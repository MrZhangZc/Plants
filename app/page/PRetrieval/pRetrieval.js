import React from 'react'
import CircleImage from '@components/CircleImage/circle-image'

import './pRetrieval.sass'

class PRetrieval extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
            isHidden: true,
            isNone: true
        }
    }

    moreImages(){
        if (this.state.isHidden){
            this.setState({
                isHidden: false,
                isNone: false
            })
        }else{
            this.setState({
                isHidden: true,
                isNone: true
            })
        }
    }

    active() {
        if (this.state.isActive) {
            this.setState({
                isActive: false
            })
        } else {
            this.setState({
                isActive: true
            })
        }
    }

    render(){
        return(
            <div className="pRetrieval">
                <div className={`${this.state.isActive ? 'pRetrieval-1' : 'pRetrieval-2'}`}>
                    <CircleImage textName="1.1"></CircleImage>
                    <CircleImage textName="1.2"></CircleImage>
                    <CircleImage textName="1.3"></CircleImage>
                    <CircleImage textName="1.4"></CircleImage>
                    <CircleImage textName="1.5"></CircleImage>
                    <div className={`${this.state.isNone ? 'circle-image' : 'is-none'}`}>
                        <div className="circle" onClick={() => this.moreImages()}>更多</div>
                    </div>
                    <CircleImage textName="1.7" hiddenImg={this.state.isHidden}></CircleImage>
                    <CircleImage textName="1.8" hiddenImg={this.state.isHidden}></CircleImage>
                </div>
                <div className={`${this.state.isActive ? 'pRetrieval-2' : 'pRetrieval-1'}`}>
                    <CircleImage textName="2.1"></CircleImage>
                    <CircleImage textName="2.2"></CircleImage>
                    <CircleImage textName="2.3"></CircleImage>
                    <CircleImage textName="2.4"></CircleImage>
                    <CircleImage textName="2.5"></CircleImage>
                    <CircleImage textName="2.6"></CircleImage>
                </div>
                <div className="foot-btn">
                    <div className={`${this.state.isActive ? 'active' : 'no-active'}`} onClick={() => this.active()}>张智超</div>
                    <div className={`${this.state.isActive ? 'no-active' : 'active'}`} onClick={() => this.active()}>惠敏</div>
                </div>
            </div>
        )
    }
}

export default PRetrieval