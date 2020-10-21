import React, {lazy} from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import Error from "../page/Error";

const HomePage = lazy(() => import('../page/HomePage'));
const FlexPage = lazy(() => import('../page/FlexPage'));

export default function Content() {
    return (
        <Switch>
            <Route path="/statistics"><FlexPage text="statistics"/></Route>
            <Route path="/agenda"><FlexPage text="agenda"/></Route>
            <Route path="/messages"><FlexPage text="messages"/></Route>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/404"><Error code={ 404 } text="Page not found"/></Route>
            <Route exact path="/403"><Error code={ 403 } text="Not authorized"/></Route>
            <Redirect to='404'/>
        </Switch>
    );
}