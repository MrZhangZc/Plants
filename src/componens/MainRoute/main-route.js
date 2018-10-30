import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Retrieval from '@components/Retrieval/retrieval'
import PickerPlant from '@page/PickerPlant/picker-plant'
import PickContent from '@page/PickContent/pick-content'
import Introduction from '@page/Introduction/introduction'
import PickTerm from '@page/PickTerm/pick-term'

import P1ImageAPI from '@datep/p1'
import P2ImageAPI from '@datep/p2'
import P3ImageAPI from '@datep/p3'
import P4ImageAPI from '@datep/p4'
import P5ImageAPI from '@datep/p5'

const MainRoute = () => (
    <Switch>
        <Route exact path="/introduction" component={Introduction} />
        <Route path="/PRetrieval" render={() => <Retrieval images={P1ImageAPI} pc="p" hm1="1-1" hm2="2-1"/>} />
        <Route exact path="/retrieval/p/1-1" render={() => <Retrieval images={P2ImageAPI} pc="p" hm1="1-1-1" hm2="1-1-2" />} />
        <Route exact path="/retrieval/p/2-1" render={() => <Retrieval images={P3ImageAPI} pc="p" hm1="2-1-1" hm2="2-1-2" />} />
        <Route exact path="/retrieval/p/1-1-1" render={() => <Retrieval images={P4ImageAPI} pc="p" hm1="2-1-1" hm2="2-1-2" />} />
        <Route exact path="/retrieval/p/1-1-2" render={() => <Retrieval images={P5ImageAPI} pc="p" hm1="2-1-1" hm2="2-1-2" />} />
        <Route path="/CRetrieval" render={() => <Retrieval images={P1ImageAPI} pc="c" />} />
        <Route exact path="/plant" component={PickerPlant} />
        <Route exact path="/zzchm" component={PickTerm} />
        <Route path="/plant/:id" component={PickContent} />
    </Switch>
)

export default MainRoute;