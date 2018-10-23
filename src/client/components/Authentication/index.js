import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Authentication extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            username : "",
            password : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);   
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin() {
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onLogin(id,pw).then(
            (success) =>{
                if(!success){
                    this.setState({
                        password : ''
                    });
                }
            }
        );
    }

    handleRegister(){
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onRegister(id, pw).then(
            (result) =>{
                if(!result){
                    this.setState({
                        username : '',
                        password : ''
                    });
                }
            }
        );
    }

    handleKeyPress(e){
        if(e.charCode == 13){
            if(this.props.mode){
                this.handleLogin();
            }else{
                this.handleRegister();
            }
        }
    }

    render(){

        const inputBox = (
            <div>
                <div>
                    <label>Username</label>
                    <input
                    name ="username"
                    type = "text"
                    onChange={this.handleChange}
                    value={this.state.username}
                    ></input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                    name = "password"
                    type = "password"
                    onChange = {this.handleChange}
                    value= {this.state.password}
                    onKeyPress = {this.handleKeyPress}
                    >
                    </input>
                </div>
            </div>
        )

        const loginView = (
            <div>
                loginView
                <div>
                    {inputBox}
                    <button onClick = {this.handleLogin}>SUBMIT</button>
                </div>
                <div>
                    <div>
                        <div>
                            New Here?<Link to = "/register">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

        const registerView = (
            <div>
                registerView
                <div>
                    {inputBox}
                    <a onClick = {this.handleRegister}>CREATE</a>
                </div>
            </div>
        );



        return(
            <div>
                {this.props.mode ? loginView : registerView}
            </div>
        );
    }
}

Authentication.propTypes = {
    mode : PropsTypes.bool,
    onLogin : PropsTypes.func,
    onRegister : PropsTypes.func
};

Authentication.defaultProps = {
    mode : true,
    onLogin : (id, pw) => {console.error("Login function not defined");},
    onRegister : (id, pw) =>{console.error("register function not defined");}
}

export default Authentication;
