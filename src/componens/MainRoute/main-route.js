import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Retrieval from '@components/Retrieval/retrieval'
import PickerPlant from '@page/PickerPlant/picker-plant'
import PickContent from '@page/PickContent/pick-content'
import Introduction from '@page/Introduction/introduction'
import PickTerm from '@page/PickTerm/pick-term'

import pAPI from '@date/pAPI'

const MainRoute = () => (
    <Switch>
        <Route exact path="/introduction" component={Introduction} />
        <Route path="/PRetrieval/:id" render={() => <Retrieval api={pAPI} pc="PRetrieval"/>} />
        <Route path="/CRetrieval/:id" render={() => <Retrieval api={pAPI} pc="CRetrieval" />} />
        <Route exact path="/plant" component={PickerPlant} />
        <Route exact path="/zzchm" component={PickTerm} />
        <Route path="/plant/:id" component={PickContent} />
    </Switch>
)

export default MainRoute;