import React, { Component } from 'react'

import CircleImage from '@components/CircleImage/circle-image'
import MoreImage from '../MoreImage/more-image'
import './Retrieval.sass'

import moreJpg from '@images/more.jpg'

class Retrieval extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
            isHidden: true,
            isHidden2: true,
            isNone: true,
            isNone2: true,
        }
        this.myRef = React.createRef()
        this.myRef2 = React.createRef()
        this.imgList1 = React.createRef()
        this.imgList2 = React.createRef()
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

    moreImages2() {
        if (this.state.isHidden2) {
            this.setState({
                isHidden2: false,
                isNone2: false
            })
        } else {
            this.setState({
                isHidden2: true,
                isNone2: true
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
    
    componentDidMount(){
        if (this.props.images.get1L() <= 5){
            let more1Dom = this.myRef.current
            more1Dom.parentNode.removeChild(more1Dom)
        }

        if (this.props.images.get2L() <= 5) {
            let more1Dom = this.myRef2.current
            more1Dom.parentNode.removeChild(more1Dom)
        }
        
    }

    render(){
        return(
            <div className="Retrieval">
                <div className={`${this.state.isActive ? 'Retrieval-1' : 'Retrieval-2'}`}>
                    {
                        this.props.images.all1().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`} toPage={`retrieval/${i.id}`} noLook={`${this.state.isHidden ? i.zzc : ''}`}/>
                        ))
                    }
                    <div className={`${this.state.isNone ? 'circle-image' : 'is-none'}`} ref={this.myRef}>
                        <a className='circle' style={{ backgroundImage: `url(${moreJpg})` }} onClick={() => this.moreImages()}></a>
                    </div>
                </div>
                <div className={`${this.state.isActive ? 'Retrieval-2' : 'Retrieval-1'}`}>
                    {
                        this.props.images.all2().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`} toPage={`retrieval/${i.id}`} noLook={`${this.state.isHidden2 ? i.zzc : ''}`}/>
                        ))
                    }
                    <div className={`${this.state.isNone2 ? 'circle-image' : 'is-none'}`} ref={this.myRef2}>
                        <a className='circle' style={{ backgroundImage: `url(${moreJpg})` }} onClick={() => this.moreImages2()}></a>
                    </div>
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