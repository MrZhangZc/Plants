import React, { Component } from 'react'

import './more-image.sass'

class MoreImage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="circle-image">
                <div className="circle" onClick = {this.props.more}>更多</div>
            </div>
        )
    }
}

export default MoreImage