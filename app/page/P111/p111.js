import React from 'react'
import CircleImage from '@components/CircleImage/circle-image'

import '../PRetrieval/pRetrieval.sass'

class P111 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
            isHidden: true,
            isNone: true
        }
    }

    moreImages() {
        if (this.state.isHidden) {
            this.setState({
                isHidden: false,
                isNone: false
            })
        } else {
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

    render() {
        return (
            <div className="pRetrieval">
                <div className={`${this.state.isActive ? 'pRetrieval-1' : 'pRetrieval-2'}`}>
                    <CircleImage textName="1.1.1" toPage="PRetrieval/PRetrieval111/zzca"></CircleImage>
                    <CircleImage textName="1.1.2" toPage="PRetrieval/PRetrieval121/zzca"></CircleImage>
                    <CircleImage textName="1.1.3" toPage="PRetrieval/PRetrieval131/zzca"></CircleImage>
                    <CircleImage textName="1.1.4" toPage="PRetrieval/PRetrieval141/zzca"></CircleImage>
                    <CircleImage textName="1.1.5" toPage="PRetrieval/PRetrieval151/zzca"></CircleImage>
                    <div className={`${this.state.isNone ? 'circle-image' : 'is-none'}`}>
                        <div className="circle" onClick={() => this.moreImages()}>更多</div>
                    </div>
                    <CircleImage textName="1.1.7" toPage="PRetrieval/PRetrieval161" hiddenImg={this.state.isHidden}></CircleImage>
                    <CircleImage textName="1.1.8" toPage="PRetrieval/PRetrieval171" hiddenImg={this.state.isHidden}></CircleImage>
                </div>
                <div className={`${this.state.isActive ? 'pRetrieval-2' : 'pRetrieval-1'}`}>
                    <CircleImage textName="2.1.1" toPage="PRetrieval/PRetrieval211"></CircleImage>
                    <CircleImage textName="2.2.1" toPage="PRetrieval/PRetrieval221"></CircleImage>
                    <CircleImage textName="2.3.1" toPage="PRetrieval/PRetrieval231"></CircleImage>
                    <CircleImage textName="2.4.1" toPage="PRetrieval/PRetrieval241"></CircleImage>
                    <CircleImage textName="2.5.1" toPage="PRetrieval/PRetrieval251"></CircleImage>
                    <CircleImage textName="2.6.1" toPage="PRetrieval/PRetrieval261"></CircleImage>
                </div>
                <div className="foot-btn">
                    <div className={`${this.state.isActive ? 'active' : 'no-active'}`} onClick={() => this.active()}>一</div>
                    <div className={`${this.state.isActive ? 'no-active' : 'active'}`} onClick={() => this.active()}>二</div>
                </div>
            </div>
        )
    }
}

export default P111