import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './app.routing';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/es/integration/react'
import createApplicationStore from "./app.store";

const { store, persistor } = createApplicationStore();

const onBeforeLift = () => {
    console.log("ON BEFORE LIFT: ", store);
};

//loading={<Loading/>}
ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            onBeforeLift={onBeforeLift}
            persistor={persistor}>
            <AppRouter/>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);