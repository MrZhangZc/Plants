import React from 'react'

import { resolve } from 'path'

import 'bootstrap/dist/css/bootstrap.css'
import { Button, ButtonGroup, Image} from 'react-bootstrap'

const r = url => resolve(__dirname, url)
const pic = r('../../public/images/1.jpg')

import './fourbuttons.sass'

const wellStyles = { maxWidth: 400, margin: '20px auto 20px'}

const buttonsInstance = (
    <div className="well" style={wellStyles}>
        <Image src= {pic} rounded />
        <Image src= {pic} circle />
        <Image src= {pic} thumbnail />
        <Button bsStyle="primary" bsSize="large" block>
            Block level button
        </Button>
        <Button bsSize="large" block>
            Block level button
        </Button>
        <Button bsStyle="primary" bsSize="large" block>
            Block level button
        </Button>
        <Button bsSize="large" block>
            Block level button
        </Button>
    </div>
);

class FourButtons extends React.Component {
    render() {
        return (buttonsInstance)
    }
}

export default FourButtons