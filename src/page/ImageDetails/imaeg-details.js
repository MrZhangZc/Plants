/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.21
 * Version: 1.0.0
 * Description: 具体图片页面
**/
import React from 'react'
import './imaeg-details.sass'

import Header from '@components/ContentHeader/content-header'

class ImageDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrl: ''
        }
    }

    render() {
        return (
            <div className="image-details">
                <Header title='图片详情' />
                <img src={`images/${this.state.imageUrl}`}/>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            imageUrl: document.location.hash.split('/')[2]
        })
    }
}

export default ImageDetails