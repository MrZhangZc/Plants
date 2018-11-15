import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './circle-image.sass'

class CircleImage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='circle-image'>
                <NavLink to={`/${this.props.toPage}`} className="circle" style={{ backgroundImage: this.props.imgPath }} />
            </div>
        )
    }
}

export default CircleImage