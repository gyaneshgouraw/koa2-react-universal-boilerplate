// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './client/components/Layout/Layout';
import Index from './client//Containers/Index';
import TestContainer from './client//Containers/TestContainer';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path = '/test' component = {TestContainer}/>
    </Route>
);

export default routes;