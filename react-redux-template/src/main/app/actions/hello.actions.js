import {HELLO_WORLD} from "./types";

export const fetchHelloMessage = () => {
    return {
        type: HELLO_WORLD,
        payload: 'Hello, world!'
    }
};