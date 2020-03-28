import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon/index.js'
import Register from './pages/Register/index.js'
import Profile from './pages/Profile/index.js'
import NewIncident from './pages/NewIncident/index.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Logon}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/incidents/new" component={NewIncident}></Route>
            </Switch>
        </BrowserRouter>
    )
}