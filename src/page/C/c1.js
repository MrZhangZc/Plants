import React, { Component } from 'react'
import Retrieval from '@components/Retrieval/retrieval'
import ImageAPI from '@datec/c1'

class C1 extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Retrieval images={ImageAPI} />
        )
    }
}

export default C1