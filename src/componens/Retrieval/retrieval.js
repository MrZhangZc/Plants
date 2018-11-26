/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 2.2.0
 * Description: 检索组件
**/
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
            leftObj:{},
            RightObj:{},
            currentURL: ''
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
                <Header title={this.props.title}></Header>
                <div className='Retrieval-1' ref={this.imgList1}>
                    <ContentWords content={this.state.leftObj.describe} />
                    <NavLink to={`${this.state.leftObj.isFinish ? `/plant/${this.state.leftObj.childrenID}` : `/${this.props.pc}/${this.state.leftObj.childrenID}`}` } className="retrieval">检索</NavLink>
                    {
                        this.state.leftObj.images.map(i => (
                            <CircleImage toPage= {`${i}`} imgPath={`url(${i})`} />
                        ))
                    }
                    
                </div>
                <div className='Retrieval-2' ref={this.imgList2}>
                    <ContentWords content={this.state.RightObj.describe} />
                    <NavLink to={`${this.state.RightObj.isFinish ? `/plant/${this.state.RightObj.childrenID}` : `/${this.props.pc}/${this.state.RightObj.childrenID}`}`} className="retrieval">检索</NavLink>
                    {
                        this.state.RightObj.images.map(i => (
                            <CircleImage toPage={`${i}`} imgPath={`url(${i})`} />
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

    componentWillMount() {
        let arr = this.props.api.getAllID().map(i => {
            if (i === document.location.hash.split('/')[2]) {
                let LObj = this.props.api.getLeftObjByID(i)
                let RObj = this.props.api.getRightObjByID(i)
                this.setState({
                    leftObj: LObj,
                    RightObj: RObj,
                    currentURL: document.location.hash.split('/')[2]
                })
            }
        })
    }

    componentDidUpdate(){
        if(this.state.currentURL !== document.location.hash.split('/')[2]){
            let arr = this.props.api.getAllID().map(i => {
                if (i === document.location.hash.split('/')[2]) {
                    let LObj = this.props.api.getLeftObjByID(i)
                    let RObj = this.props.api.getRightObjByID(i)
                    this.setState({
                        leftObj: LObj,
                        RightObj: RObj,
                        currentURL: document.location.hash.split('/')[2]
                    })
                }
            })
        }
    }
}

export default Retrieval