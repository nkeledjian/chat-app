import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

// function* = generator function, returns Generator object
const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.username
        params.socket.send(JSON.stringify)
    })
}

export default handleNewMessage