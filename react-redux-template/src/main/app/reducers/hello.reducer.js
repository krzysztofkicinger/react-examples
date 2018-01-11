import {HELLO_WORLD} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case HELLO_WORLD:
            return {...state, message: action.payload};
    }
    return state;
}