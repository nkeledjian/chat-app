import * types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList} from '../actions';

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: types.ADD_USER,
            name: username
        }))
    }
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        // determine data type
    }
}