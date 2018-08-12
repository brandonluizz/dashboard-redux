import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from './Dashboard'

export default () => (
    <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Redirect from='*' to='/dashboard' />
    </Switch>
)