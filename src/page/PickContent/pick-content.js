import React, { Component } from 'react'
import API from '@date/plant'
import Header from '@components/ContentHeader/content-header'
import './pick-content.sass'
class PickContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            latin: '',
            name: ''
        }
    }

    render() {
        return (
            <div className="pick-content">
                <Header title={this.state.name} />
                <div className="pick-name">{this.state.name}</div>
                <div className="pick-latin">{this.state.latin}</div>
                <p className="content-hm">
                    {this.state.content}
                </p>
            </div>
        )
    }

    componentDidMount(){
        API.all().map(i => {
            if (i.id.toString() === document.location.hash.split('/')[2]) {
                this.setState({
                    content: i.content,
                    name: i.name,
                    latin: i.latin
                })
            }
        })
    }
}

export default PickContent