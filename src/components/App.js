import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from './Nav.js';
import { Home } from './Home/Home.js';
import { NotFound } from './NotFound.js';
import Popular from './Popular/Popular.js';
import Battle from './Battle/Battle.js';
import Results from "./Battle/Results.js";

export const App = () => (
    <Router basename="/github-battle">
        <div className="container">
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/popular' component={Popular} />
                <Route exact path='/battle' component={Battle} />
                <Route exact path='/battle/results' component={Results} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)