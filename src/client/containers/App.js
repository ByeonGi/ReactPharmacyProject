import React from 'react';
import {Route} from 'react-router-dom';
//Container Component
import { Home, Login, Register } from '../containers';


//redux-thunk 는 dispatcher가 action객체 외에도, 사용자가 만든 함수도 처리할 수 있도록 도와준다.
//비동기 처리를 할때 사용되는 redux 미들웨어이고 보통 dispatch()함수 내부에 들어가는건 action객체 혹은 action creator 함수
//action-creator 는 그냥 객체만 반환 할 뿐 거기에서 HTTP요청을 하거나 할수가 없다.
//redux-thunk를 사용하면 , 사용자가 함수를 만들어서 (정확히는 리턴하는 함수)그 함수 내부에서 AJAX요청을 하고 그 결과값에 따라 다른 action(ajax가 성공했다던지 실패했다던지) 또 dispatch를 할 수 있다.

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