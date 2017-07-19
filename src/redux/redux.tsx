import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
export { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
export { ConnectedRouter } from 'react-router-redux';
export const history = createHistory();

import { formReducer } from './reducers/form.reducer';
import { formsListReducer } from './reducers/forms-list.reducer';
import { IStoreState } from '../types/types';

const myRouterMiddleware = routerMiddleware(history);

export const store = createStore<IStoreState>(
    combineReducers<IStoreState>(
        {
            formState: formReducer,
            formsListState: formsListReducer,
            router: routerReducer as any
        }
    ),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            myRouterMiddleware
        )
    )
);