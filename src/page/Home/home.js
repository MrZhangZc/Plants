import React, { Component } from 'react'

import HomeNav from '@components/HomeNav/home-nav'
import Header from '@components/Header/header'

class Home extends Component {
    render(){
        return(
            <div className="container-home">
                <Header/>
                <HomeNav navTitle="专业检索" to="/PRetrieval/001" />
                <HomeNav navTitle="普通检索" to="/CRetrieval" />
                <HomeNav navTitle="植物查询" to="/plant" />
                <HomeNav navTitle="形态术语" to="/zzchm" />
            </div>
        )
    }
}

export default Home