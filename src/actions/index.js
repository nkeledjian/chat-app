import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

// redux: reducers take care of creating a new state when an action is dispatched

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});