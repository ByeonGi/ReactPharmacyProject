import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './containers/App';

import Provider from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/authentication';
import thunk from 'redux-thunk';




const Root = () =>{
    const store = createStore(reducers, applyMiddleware(thunk));
    return(
        <Provider store = {store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
}

export default Root;