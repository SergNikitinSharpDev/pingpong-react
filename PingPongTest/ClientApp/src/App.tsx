import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';

import './custom.css'
import Players from './components/Players';
import Games from './components/Games';

export default () => (
    <Layout>
        <Route exact path='/' component={Players} />
        <Route path='/games' component={Games} />
    </Layout>
);
