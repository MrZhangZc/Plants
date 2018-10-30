import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import CircleImage from '@components/CircleImage/circle-image'

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
            click2: false,
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
        }
    }

    moreImages2() {
        if (this.state.isHidden2) {
            this.setState({
                isHidden2: false,
                isNone2: false
            })
        }
    }

    active1() {
        this.imgList1.current.className = "Retrieval-1"
        this.imgList2.current.className = "is-none"
        this.footBtn1.current.className = "btn active"
        this.footBtn2.current.className = "btn"
        this.setState({
            click2: false
        })
    }

    active2() {
        this.imgList1.current.className = "is-none"
        this.imgList2.current.className = "Retrieval-1"
        this.footBtn1.current.className = "btn"
        this.footBtn2.current.className = "btn active"
        this.setState({
            click2: true
        })
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
                            <CircleImage imgPath={`url(${i.bgImage})`} noLook={`${this.state.isHidden ? i.zzc : ''}`}/>
                        ))
                    }
                    <div className={`${this.state.isNone ? 'circle-image' : 'is-none'}`} ref={this.myRef}>
                        <a className='circle' style={{ backgroundImage: `url(${moreJpg})` }} onClick={() => this.moreImages()}></a>
                    </div>
                </div>
                <div className='Retrieval-2' ref={this.imgList2}>
                    {
                        this.props.images.all2().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`} noLook={`${this.state.isHidden2 ? i.zzc : ''}`}/>
                        ))
                    }
                    <div className={`${this.state.isNone2 ? 'circle-image' : 'is-none'}`} ref={this.myRef2}>
                        <a className='circle' style={{ backgroundImage: `url(${moreJpg})` }} onClick={() => this.moreImages2()}></a>
                    </div>
                </div>
                <div className="foot-btn">
                    <div className="btn active" ref={this.footBtn1} onClick={() => this.active1()}>一</div>
                    <NavLink to={`${this.state.click2 ? `/retrieval/${this.props.pc}/${this.props.hm2}` : `/retrieval/${this.props.pc}/${this.props.hm1}`}`} className="retrieval" id={`${this.state.click2 ? '2' : '1'}`}>检索</NavLink>
                    <div className="btn" ref={this.footBtn2} onClick={() => this.active2()}>二</div>
                </div>
            </div>
        )
    }
}

export default Retrieval