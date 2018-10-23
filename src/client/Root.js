import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './containers/App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

// import {connect} from 'react-redux';
// import {getStatusRequest} from './actions/authentication';


// class Root extends React.Component{
//     render(){
//         const store = createStore(reducers, applyMiddleware(thunk));
//         return(
//             <BrowserRouter>
//                 <Provider store = {store}>
//                     <App/>
//                 </Provider>
//             </BrowserRouter>
//         );
//     }
// }

// const mapStateToProps = (state) =>{
//     return {
//         status : state.authentication.status
//     };
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         getStatusRequest: () =>{
//             return dispatch(getStatusRequest());
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Root);
const Root = () =>{
    const store = createStore(reducers, applyMiddleware(thunk));
    return(
        <BrowserRouter>
            <Provider store = {store}>
                    <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default Root;
