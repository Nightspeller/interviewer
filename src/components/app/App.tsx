import * as React from 'react';
import { Route } from 'react-router-dom';

import Form from '../../containers/form.container';
import FormsList from '../../containers/forms-list.container';
import HeaderAndMenu from '../../components/header-and-menu/header-and-menu.component';

import './App.css';

export default function App() {
    return (
        <div>
            <HeaderAndMenu />
            <Route exact={true} path="/" component={FormsList}/>
            <Route path="/form" component={Form}/>
        </div>
    );
}