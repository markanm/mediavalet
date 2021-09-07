import React from "react";
import {
    HashRouter,
    Route, Switch
} from "react-router-dom";
import Recent from "../Recent";
import Search from "../Search";

const AppRouter: React.FC = () => {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route exact path="/">
                    <Recent />
                </Route>
                <Route exact path="/recent">
                    <Recent />
                </Route>
                <Route exact path="/search">
                    <Search />
                </Route>
                <Route exact path="/search/:query">
                    <Search />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default AppRouter;