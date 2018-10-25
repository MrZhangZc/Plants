import React from 'react'
import { Switch, Route } from 'react-router-dom'

import P1 from '@page/P/p1'
import P11 from '@page/P/p1-1'
import P21 from '@page/P/p2-1'
import PickerPlant from '@page/PickerPlant/picker-plant'
const MainRoute = () => (
    <Switch>
        <Route path="/PRetrieval" component={P1} />
        <Route path="/CRetrieval" component={P1} />
        <Route path="/plant" component={PickerPlant} />
        <Route path="/zzchm" component={PickerPlant} />
    </Switch>
)

export default MainRoute;