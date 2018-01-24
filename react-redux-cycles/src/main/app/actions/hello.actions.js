import * as ActionTypes from "./action.types";

export const fetchHelloMessage = () => {
    return {
        type: ActionTypes.HELLO_WORLD_REQUEST,
        salutation: 'Hello, '
    }
};

export const responseHelloMessage = (message) => {
    return {
        type: ActionTypes.HELLO_WORLD_RESPONSE,
        payload: message
    }
};