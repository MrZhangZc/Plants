/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 1.0.5
 * Description: 首页头部
**/
import React, { Component } from 'react'
import { Popover, NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom'
import './header.sass'

const Item = Popover.Item;

//const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            selected: '',
        }
    }
    
    render() {
        return (<div>
            <NavBar className="homeNavBar"
                mode="light"
                rightContent={
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                            (<Item ><NavLink className="help" to="/introduction">简介</NavLink></Item>),
                            (<Item ><NavLink className="help" to="/email">提出建议</NavLink></Item>)
                        ]}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                        }}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                    </Popover>
                }
            >
                植物检索
      </NavBar>
        </div>);
    }
}

export default Header