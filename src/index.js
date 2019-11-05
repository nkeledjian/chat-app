import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { addUser } from './actions/index';
// import { setupSocket } from './sockets';
// import handleNewMessage from './sagas'
// import username from './utils/name'
import chat from './reducers';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(chat)

store.dispatch(addUser('Me'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// registerServiceWorker();
