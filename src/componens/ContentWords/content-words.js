/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 1.0.0
 * Description: 页面组件 用于显示描述内容
**/
import React from 'react'
import './content-words.sass'

class ContentWords extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-words">
                {this.props.content}
            </div>
        )
    }
}

export default ContentWords