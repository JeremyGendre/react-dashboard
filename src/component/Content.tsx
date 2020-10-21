import React, {lazy} from "react";
import {Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import('../page/HomePage'));

export default function Content() {
    return (
        <Switch>
                <Route path="/"><HomePage/></Route>
        </Switch>
    );
}