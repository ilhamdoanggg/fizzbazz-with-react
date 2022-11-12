import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
const Weather = lazy(() => import('./views/Weather/index'))
export default class Routes extends Component {
    render() {

        return (
            <Suspense fallback={''}>
                <Switch>
                    <Route
                        component={Weather}
                        exact
                        path="/"
                    />
                </Switch>
            </Suspense>)
    }
}
