import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';

import {Provider} from 'react-redux';

import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
// Redux

//devtools
// import DevTools from './containers/DevTools';


const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) );

ReactDOM.render(
    <Provider store = {store}>
        <Root />
    </Provider>
        
    , document.getElementById('root'));