import React from 'react'
import HomeNav from '@components/HomeNav/home-nav'
import Header from '@components/Header/header'

class Home extends React.Component {
    render(){
        return(
            <div className="container-home">
                <Header/>
                <HomeNav navTitle="张智超" to="/zzc" />
                <HomeNav navTitle="张智超" to="/hm" />
                <HomeNav navTitle="张智超" to="/plant" />
                <HomeNav navTitle="张智超" to="/zzchm" />
            </div>
        )
    }
}

export default Home