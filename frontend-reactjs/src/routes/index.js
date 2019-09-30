import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Main from '../pages/main'
import Detail from '../pages/detail';

function Router() {
    return(
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/sobre" component={Detail} />
        </Switch>
    );
}

export default Router;

