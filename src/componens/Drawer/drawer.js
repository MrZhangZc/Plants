import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import './drawer.sass'

class Drawer extends Component {
 
    constructor(props){
        super(props)
    }
 
    render(){
        return(
            <div className="drawer">
                <ul>
                    {
                        this.props.drawer.map(i => (
                            <li key={i.id}>
                                <NavLink className="drawer-nav" to={`/list/${i.id}`}>{i.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Drawer