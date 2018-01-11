import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from 'redux-persist';
import { reducer as formReducer} from 'redux-form';
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

const createApplicationStore = () => {
    let store = createStore(persistedReducers, composeWithDevTools(applyMiddleware(thunk)));
    let persistor = persistStore(store);
    return { store, persistor };
};

export default createApplicationStore;


