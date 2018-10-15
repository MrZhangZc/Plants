import React from 'react'
import './navbar.sass'

import 'bootstrap/dist/css/bootstrap.css'
import { Button, ButtonGroup, Image } from 'react-bootstrap'

class Navbar extends React.Component {
    render() {
        return (
            <div className='components-header'>
                <p className="caption">植物检索</p>
            </div>
        )
    }
}

export default Navbar