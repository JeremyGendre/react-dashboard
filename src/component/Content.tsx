import React, {lazy} from "react";
import {Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import('../page/HomePage'));
const FlexPage = lazy(() => import('../page/FlexPage'));

export default function Content() {
    return (
        <Switch>
            <Route path="/statistics"><FlexPage text="statistics"/></Route>
            <Route path="/agenda"><FlexPage text="agenda"/></Route>
            <Route path="/messages"><FlexPage text="messages"/></Route>
            <Route path="/"><HomePage/></Route>
        </Switch>
    );
}