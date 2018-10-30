import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './circle-image.sass'

class CircleImage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={`${this.props.hiddenImg ? 'is-hidden' : 'circle-image'}`} style={{ display: this.props.noLook}}>
                <NavLink to={`/${this.props.toPage}`} className="circle" style={{ backgroundImage: this.props.imgPath }} />
            </div>
        )
    }
}

export default CircleImage