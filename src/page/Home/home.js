/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 0.1.1
 * Description: 主页面(HOME)
**/
import React, { Component } from 'react'

import HomeNav from '@components/HomeNav/home-nav'
import Header from '@components/Header/header'
import './home.sass'

import homeJpg from '@images/homebg.jpg'
import navJpg from '@images/12.jpg'
import navJpg2 from '@images/1.jpg'
import navJpg3 from '@images/9.jpg'
import navJpg4 from '@images/11.jpg'

class Home extends Component {
    render(){
        return(
            <div className="container-home">
                <div className="top" style={{ backgroundImage: `url(${homeJpg})` }}>
                    <p className="top-title">植物检索</p>
                </div>
                <div className="bottom">
                    <HomeNav navTitle="专业检索" to="/PRetrieval/001" bg={navJpg}/>
                    <HomeNav navTitle="普通检索" to="/CRetrieval/001" bg={navJpg2}/>
                    <HomeNav navTitle="植物查询" to="/plant" bg={navJpg3}/>
                    <HomeNav navTitle="形态术语" to="/zzchm" bg={navJpg4}/>
                </div>
                {/* <Header/>
                 */}
            </div>
        )
    }
}

export default Home