/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.22
 * Version: 1.1.0
 * Description: react-router组件 
**/
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Retrieval from '@components/Retrieval/retrieval'
import PickerPlant from '@page/PickerPlant/picker-plant'
import PickContent from '@page/PickContent/pick-content'
import ImageDetails from '@page/ImageDetails/imaeg-details'
import Introduction from '@page/Introduction/introduction'
import Email from '@page/Email/email'
import PickTerm from '@page/PickTerm/pick-term'

import pAPI from '@date/pAPI'
import cAPI from '@date/cAPI'

const MainRoute = () => (
    <Switch>
        <Route exact path="/introduction" component={Introduction} />
        {/* <Route exact path="/email" component={Email} /> */}
        <Route path="/PRetrieval/:id" render={() => <Retrieval api={pAPI} pc="PRetrieval" title="专业检索"/>} />
        <Route path="/CRetrieval/:id" render={() => <Retrieval api={cAPI} pc="CRetrieval" title="普通检索"/>} />
        <Route exact path="/plant" component={PickerPlant} />
        <Route exact path="/zzchm" component={PickTerm} />
        <Route path="/plant/:id" component={PickContent} />
        <Route path="/images/:id" component={ImageDetails} />
    </Switch>
)

export default MainRoute;