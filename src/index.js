import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter,Route, HashRouter, history, Switch} from 'react-router-dom';

import Home from '@page/Home/home'
import MainRoute from '@components/MainRoute/main-route'
import PickerPlant from './page/PickerPlant/picker-plant'

import './public/sass/base.sass'

render((
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <MainRoute />
        </Switch>
    </HashRouter>
    ),document.getElementById('root')
)