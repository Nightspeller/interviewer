import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { store, history, ConnectedRouter, Provider } from './redux/redux';

import App from './components/app/App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
