import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './components/App';
import reducer from './reducers/reducer';
import {fetchCategories, fetchPosts} from './actions/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer,
	composeEnhancers(
        applyMiddleware(
            thunk
        )
	)
);

// Fetch initial data from the server
store.dispatch(fetchCategories())
store.dispatch(fetchPosts())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
