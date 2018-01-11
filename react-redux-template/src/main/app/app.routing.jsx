import React from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import HelloPage from "./pages/hello.page";

export default () =>
    <BrowserRouter>
        <Switch>
            <Route path='/' component={HelloPage} exact={true} />
        </Switch>
    </BrowserRouter>