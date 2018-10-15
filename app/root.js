import React from 'react'
// import FourButtons from './componens/FourButtons/fourbuttons'
// import Navbar from './componens/Navbar/navbar'
// import HomePage from './componens/HomePage/homePage'
// import Specific from '@components/Specific/specific'
import Home from './page/Home/home'
import PRetrieval from './page/PRetrieval/pRetrieval'
import P111 from './page/P111/p111'
import { BrowserRouter, Route } from 'react-router-dom' 

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container" >
                    <Route exact path="/" component={Home} />
                    <Route path="/PRetrieval" component={PRetrieval}>
                        <Route path="/PRetrieval111" component={Home} />
                        <Route path="/PRetrieval121" component={PRetrieval} />
                        <Route path="/PRetrieval131" component={PRetrieval} />
                        <Route path="/PRetrieval141" component={PRetrieval} />
                        <Route path="/PRetrieval151" component={PRetrieval} />
                        <Route path="/PRetrieval161" component={PRetrieval} />
                        <Route path="/PRetrieval171" component={PRetrieval} />
                    </Route>
                    <Route path="/CRetrieval" component={PRetrieval}>
                        <Route path="/PRetrieval211" component={PRetrieval} />
                        <Route path="/PRetrieval221" component={PRetrieval} />
                        <Route path="/PRetrieval231" component={PRetrieval} />
                        <Route path="/PRetrieval241" component={PRetrieval} />
                        <Route path="/PRetrieval251" component={PRetrieval} />
                        <Route path="/PRetrieval261" component={PRetrieval} />
                    </Route>
                </div>
            </BrowserRouter>  
        )
    }
}

export default Root

