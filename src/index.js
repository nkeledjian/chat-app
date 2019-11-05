import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; // redux-saga is a redux middleware

// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import setupSocket from './sockets';
import handleNewMessage from './sagas'
import username from './utils/name';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// registerServiceWorker();
