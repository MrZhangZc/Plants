import React from 'react'
import './content-words.sass'

class ContentWords extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-words">
                {this.props.content}
            </div>
        )
    }
}

export default ContentWords