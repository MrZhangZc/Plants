/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 1.0.5
 * Description: 首页按钮组件
**/
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './home-nav.sass'

class HomeNav extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <NavLink className="home-nav" to={ this.props.to }>
                { this.props.navTitle }
            </NavLink>
        )
    }
}

export default HomeNav