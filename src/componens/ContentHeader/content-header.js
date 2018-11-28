/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.26
 * Version: 1.1.0
 * Description: 页面头部组件 用于显示标题 返回前一页 增加关闭按钮
**/
import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom'

class ContentHeader extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" onClick={() => { history.back(-1) }} />}
                    leftContent={<NavLink to="/" style={{ color: '#fff' , marginLeft: '0.6em'}}>关闭</NavLink>}
                    //onLeftClick={() => { history.back(-1) }}
                >{this.props.title}</NavBar>
            </div>
        )
    }
}

export default ContentHeader