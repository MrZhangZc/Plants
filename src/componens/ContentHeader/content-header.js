import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

class ContentHeader extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { history.back(-1) }}
                >{this.props.title}</NavBar>
            </div>
        )
    }
}

export default ContentHeader