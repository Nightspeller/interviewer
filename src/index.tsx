import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';

import { formReducer } from './reducers/form.reducer';
import { IStoreState } from './types/types';

const store = createStore<IStoreState>(
    combineReducers<IStoreState>({formReducer: formReducer, routing: routerReducer}),
    composeWithDevTools(applyMiddleware())
);

import App from './components/app/App';
import FormsList from './components/forms-list/forms-list.component';

import Form from './containers/form.container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = syncHistoryWithStore(createBrowserHistory() as any, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/" component={FormsList as any}/>
                    <Route path="/forms" component={FormsList as any}/>
                    <Route path="/new-form" component={Form as any}/>
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
