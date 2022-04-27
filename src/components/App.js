import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from './Nav.js';
import { Home } from './Home.js';
import { Popular } from './Popular.js';
import { Battle } from './Battle.js';
import { NotFound } from './NotFound.js';

export const App = () => {
    return(
        <Router>
            <div className="container">
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/popular' component={Popular} />
                    <Route exact path='/battle' component={Battle} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}