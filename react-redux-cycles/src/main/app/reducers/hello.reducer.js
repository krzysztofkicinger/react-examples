import * as ActionTypes from "../actions/action.types";

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.HELLO_WORLD_REQUEST:
            return {...state, message: '' };
        case ActionTypes.HELLO_WORLD_RESPONSE:
            return { ...state, message: action.payload };
    }
    return state;
}