import React, { Component } from 'react'

import CircleImage from '@components/CircleImage/circle-image'
import MoreImage from '../MoreImage/more-image'
import './Retrieval.sass'

class Retrieval extends Component {

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
            <div className="Retrieval">
                <div className={`${this.state.isActive ? 'Retrieval-1' : 'Retrieval-2'}`}>
                    {
                        this.props.images.all1().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`} toPage={`retrieval/${i.id}`} noLook={i.zzc}/>
                        ))
                    }
                    <MoreImage></MoreImage>
                </div>
                <div className={`${this.state.isActive ? 'Retrieval-2' : 'Retrieval-1'}`}>
                    {
                        this.props.images.all2().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`} toPage={`retrieval/${i.id}`} noLook={i.zzc}/>
                        ))
                    }
                    <MoreImage></MoreImage>
                </div>
                <div className="foot-btn">
                    <div className={`${this.state.isActive ? 'active' : 'no-active'}`} onClick={() => this.active()}>一</div>
                    <div className={`${this.state.isActive ? 'no-active' : 'active'}`} onClick={() => this.active()}>二</div>
                </div>
            </div>
        )
    }
}

export default Retrieval