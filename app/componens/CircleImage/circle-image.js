import React from 'react'
import { NavLink } from 'react-router-dom'

import './circle-image.sass'

class CircleImage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={`${this.props.hiddenImg ? 'is-hidden' : 'circle-image'}`}>
                <NavLink to={`/${this.props.toPage}`} className="circle" >
                    {this.props.textName}
                </NavLink>
            </div>
        )
    }
}

export default CircleImage