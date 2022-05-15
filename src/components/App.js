import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from './Nav.js';
import { Home } from './Home.js';
import { NotFound } from './NotFound.js';
import Popular from './Popular.js';
import Battle from './Battle.js';
import Results from "./Results.js";

export const App = () => (
    <Router>
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