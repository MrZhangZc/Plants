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
        this.footBtn1 = React.createRef()
        this.footBtn2 = React.createRef()
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

    active1() {
        this.imgList1.current.className = "Retrieval-1"
        this.imgList2.current.className = "Retrieval-2"
        this.footBtn1.current.className = "active"
        this.footBtn2.current.className = "no-active"
    }

    active2() {
        this.imgList1.current.className = "Retrieval-2"
        this.imgList2.current.className = "Retrieval-1"
        this.footBtn1.current.className = "no-active"
        this.footBtn2.current.className = "active"
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
                <div className='Retrieval-1' ref={this.imgList1}>
                    {
                        this.props.images.all1().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`} toPage={`retrieval/${i.id}`} noLook={`${this.state.isHidden ? i.zzc : ''}`}/>
                        ))
                    }
                    <div className={`${this.state.isNone ? 'circle-image' : 'is-none'}`} ref={this.myRef}>
                        <a className='circle' style={{ backgroundImage: `url(${moreJpg})` }} onClick={() => this.moreImages()}></a>
                    </div>
                </div>
                <div className='Retrieval-2' ref={this.imgList2}>
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
                    <div className="active" ref={this.footBtn1} onClick={() => this.active1()}>一</div>
                    <div className="no-active" ref={this.footBtn2} onClick={() => this.active2()}>二</div>
                </div>
            </div>
        )
    }
}

export default Retrieval