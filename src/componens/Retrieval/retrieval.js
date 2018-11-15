import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

import CircleImage from '@components/CircleImage/circle-image'
import Header from '@components/ContentHeader/content-header'
import ContentWords from '@components/ContentWords/content-words'

import './Retrieval.sass'
import moreJpg from '@images/more.jpg'

class Retrieval extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
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

    render(){
        return(
            <div className="Retrieval">
                <Header title="专业检索"></Header>
                <div className='Retrieval-1' ref={this.imgList1}>
                    <ContentWords content="一顿介绍"></ContentWords>
                    {
                        this.props.images.all1().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`}/>
                        ))
                    }
                    {/* <NavLink to={`${this.state.click2 ? `/retrieval/${this.props.pc}/${this.props.hm2}` : `/retrieval/${this.props.pc}/${this.props.hm1}`}`} className="retrieval" id={`${this.state.click2 ? '2' : '1'}`}>检索</NavLink> */}
                </div>
                <div className='Retrieval-2' ref={this.imgList2}>
                    <ContentWords content="一顿介绍"></ContentWords>
                    {
                        this.props.images.all2().map(i => (
                            <CircleImage imgPath={`url(${i.bgImage})`}/>
                        ))
                    }
                </div>
                <div className="foot-btn">
                    <div className="btn active" ref={this.footBtn1} onClick={() => this.active1()}>一</div>
                    <div className="btn" ref={this.footBtn2} onClick={() => this.active2()}>二</div>
                </div>
            </div>
        )
    }
}

export default Retrieval