/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 0.1.1
 * Description: 提意见页面
**/
import React, { Component } from 'react'
import { List, InputItem } from 'antd-mobile';

import './email.sass'

import Header from '@components/ContentHeader/content-header'
import inimg from '@images/img.jpg'

class Email extends Component {
    constructor(props){
        super(props)
        this.state = { value: '' }
    }
    render() {
        return (
            <div className="introduction">
                <Header title="我要提议" />
            </div>
        )
    }
}

export default Email