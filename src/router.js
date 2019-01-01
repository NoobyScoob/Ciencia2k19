import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// route components
import Home from './components/routes/home';
import EventsCSE from './components/routes/cse';
import EventsECE from './components/routes/ece';
import EventsIT from './components/routes/it';
import EventsEEE from './components/routes/eee';
import EventsCIV from './components/routes/civ';
import EventsEIE from './components/routes/eie';
import EventsMEC from './components/routes/mec';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact  component={Home} />
                    <Route path="/events/departments/cse" exact component={ EventsCSE } />
                    <Route path="/events/departments/it" exact component={ EventsIT } />
                    <Route path="/events/departments/ece" exact component={ EventsECE } />
                    <Route path="/events/departments/eee" exact component={ EventsEEE } />
                    <Route path="/events/departments/eie" exact component={ EventsEIE } />
                    <Route path="/events/departments/mec" exact component={ EventsMEC } />
                    <Route path="/events/departments/civ" exact component={ EventsCIV } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;