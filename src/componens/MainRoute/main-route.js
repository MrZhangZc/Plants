import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Retrieval from '@components/Retrieval/retrieval'
import PickerPlant from '@page/PickerPlant/picker-plant'
import PickContent from '@page/PickContent/pick-content'
import Introduction from '@page/Introduction/introduction'
import PickTerm from '@page/PickTerm/pick-term'

import pAPI from '@date/pAPI'
import P1ImageAPI from '@datep/p1'
import P2ImageAPI from '@datep/p2'
import P3ImageAPI from '@datep/p3'
import P4ImageAPI from '@datep/p4'
import P5ImageAPI from '@datep/p5'

const MainRoute = () => (
    <Switch>
        <Route exact path="/introduction" component={Introduction} />
        <Route path="/PRetrieval/:id" render={() => <Retrieval api={pAPI} />} />
        <Route path="/CRetrieval" render={() => <Retrieval images={P1ImageAPI} pc="c" />} />
        <Route exact path="/plant" component={PickerPlant} />
        <Route exact path="/zzchm" component={PickTerm} />
        <Route path="/plant/:id" component={PickContent} />
    </Switch>
)

export default MainRoute;