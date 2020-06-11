import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; 
// redux-saga is a redux middleware which needs to be initialized during store creation

// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
// import { startWebsocket } from './actions';
import setupSocket from './sockets';
import reducers from './reducers';
import handleNewMessage from './sagas'
import username from './utils/name';

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
