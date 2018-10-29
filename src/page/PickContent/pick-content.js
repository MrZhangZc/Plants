import React, { Component } from 'react'
import API from './shu'
class PickContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            name: ''
        }
    }

    render() {
        return (
            <div className="csss">
                {this.state.name}
            </div>
        )
    }

    componentDidMount(){
        API.all().map(i => {
            if (i.id.toString() === document.location.hash.split('/')[2]) {
                this.setState({
                    content: i.content,
                    name: i.name
                })
            }
        })
        console.log(document.location.hash.split('/')[2])
    }
}

export default PickContent