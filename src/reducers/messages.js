import * as types from '../constants/ActionTypes';

// in a reducer you always pass in the current state and an action and you return the new state
// if no state, default is set to an empty array
const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ])
        default:
            return state
    }
}

export default messages;