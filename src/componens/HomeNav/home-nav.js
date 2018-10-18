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