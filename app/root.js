import React from 'react'
// import FourButtons from './componens/FourButtons/fourbuttons'
// import Navbar from './componens/Navbar/navbar'
// import HomePage from './componens/HomePage/homePage'
// import Specific from '@components/Specific/specific'
import Home from './page/Home/home'
import PRetrieval from './page/PRetrieval/pRetrieval'
import { BrowserRouter, Route } from 'react-router-dom' 

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container" >
                    <Route exact path="/" component={Home} />
                    <Route path="/zzc" component={PRetrieval} />
                </div>
            </BrowserRouter>  
        )
    }
}

export default Root

