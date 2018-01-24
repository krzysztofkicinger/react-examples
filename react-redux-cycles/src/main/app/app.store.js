import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from 'redux-persist';
import { reducer as formReducer} from 'redux-form';
import { createCycleMiddleware } from 'redux-cycles'
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';
import cycles from './cycles';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import helloReducer from "./reducers/hello.reducer";

const persistenceConfig = {
    key: 'primary',
    storage,
    blacklist: [ 'form' ]
};

const persistedReducers = persistCombineReducers(persistenceConfig, {
    form: formReducer,
    hello: helloReducer
});

/**
 * Initialize redux-cycle
 *
 * @type {CycleMiddleware}
 */
const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

/**
 * Store configuration
 *
 * @returns {{store: Store<any>, persistor}}
 */
const createApplicationStore = () => {
    let store = createStore(persistedReducers, composeWithDevTools(applyMiddleware(thunk, cycleMiddleware)));
    let persistor = persistStore(store);

    /**
     * Configure sources of redux-cycle
     */
    run(cycles, {
        ACTION: makeActionDriver(),
        STATE: makeStateDriver(),
        TIME: timeDriver,
        HTTP: makeHTTPDriver()
    });

    return { store, persistor };
};

export default createApplicationStore;


