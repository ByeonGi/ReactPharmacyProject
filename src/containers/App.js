import React from 'react';
import {Route} from 'react-router-dom';
//Container Component
import { Home, Login, Register } from '../containers';



class App extends React.Component {
    

    render(){
        return (
          
                <div>
                        <Route exact path="/" component = {Home}/>
                        <Route path="/signin" component = {Login}/>
                        <Route path="/signup" component = {Register}/>
                </div>
          
                
           

        )
    }
}
export default App;
