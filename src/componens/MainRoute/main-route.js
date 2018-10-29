import React from 'react'
import { Switch, Route } from 'react-router-dom'

import P1 from '@page/P/p1'
import P11 from '@page/P/p1-1'
import P21 from '@page/P/p2-1'
import PickerPlant from '@page/PickerPlant/picker-plant'
import PickContent from '@page/PickContent/pick-content'

const MainRoute = () => (
    <Switch>
        <Route path="/PRetrieval" component={P1} />
        <Route path="/CRetrieval" component={P1} />
        <Route exact path="/plant" component={PickerPlant} />
        <Route path="/zzchm" component={PickerPlant} />
        <Route path="/plant/:id" component={PickContent} />
    </Switch>
)

export default MainRoute;