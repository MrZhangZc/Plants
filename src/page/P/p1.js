import React, { Component } from 'react'

import Retrieval from '@components/Retrieval/retrieval'
import ImageAPI from '@datep/p1'

class P1 extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Retrieval images={ImageAPI} />
        )
    }
}

export default P1