import React, { Component } from 'react'

import Retrieval from '@components/Retrieval/retrieval'
import ImageAPI from '@datep/p2-1'

class P21 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Retrieval images={ImageAPI} />
        )
    }
}

export default P21