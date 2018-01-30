import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './components/App';
import reducer from './reducers/reducer';
import * as API from './utils/api';
import {addCategories, addPosts} from './actions/categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(logger)
	)
);

// Fetch initial data from the server.
API.fetchCategories().then((categories) => {
	store.dispatch(addCategories(categories))
});
API.fetchPosts().then((posts) => {
	store.dispatch(addPosts(posts))
});


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
