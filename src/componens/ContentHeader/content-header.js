/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 1.0.0
 * Description: 页面头部组件 用于显示标题 返回前一页
**/
import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

class ContentHeader extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { history.back(-1) }}
                >{this.props.title}</NavBar>
            </div>
        )
    }
}

export default ContentHeader