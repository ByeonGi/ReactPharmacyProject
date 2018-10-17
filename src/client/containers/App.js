import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

class App extends React.Component {
    render(){
        return (
            <div>
                <Route exact path="/" component = {Home}/>
                <Route path="/signin" component = {Login}/>
                <Route path="/register" component = {Register}/>
            </div>
        )
    }
}
export default App;