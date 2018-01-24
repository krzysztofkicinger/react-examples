import * as actions from '../actions/hello.actions';
import * as ActionTypes from '../actions/action.types';

import { combineCycles } from 'redux-cycles';
import xs from 'xstream';

function fetchHelloWorldMessage(sources) {
    const messages$ = sources.ACTION
        .filter(action => action.type === ActionTypes.HELLO_WORLD_REQUEST)
        .map(action => {
            console.log("messages$: ", action);
            return action.salutation;
        });

    const response$ = messages$
        .map(salutation => {
            console.log('response$: ', salutation);
            return {
                url: 'https://jsonplaceholder.typicode.com/users/1',
                category: 'userDetails'
            };
        });

    const user$ = sources.HTTP
        .filter(event => {
            console.log("user$: ", event);
            return true;
        })
        .select('userDetails')
        .flatten();

    const responseAction$ = xs.combine(messages$, user$)
        .map(arr => {
            // console.log('responseAction$: ', arr);
            return actions.responseHelloMessage(arr[0] + arr[1].body.username);
        });

    return {
        ACTION: responseAction$,
        HTTP: response$
    }
}

export default combineCycles(fetchHelloWorldMessage);
