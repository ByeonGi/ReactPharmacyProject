import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Authentication extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        const inputBox = (
            <div>
                <div>
                    <label>Username</label>
                    <input
                    name ="username"
                    type = "text"
                    onChange = {this.handleChange}
                    value = {this.state.username}
                    ></input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                    name = "password"
                    type = "password"
                    onChange = {this.handleChange}
                    value = {this.state.password}
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
                    <a>SUBMIT</a>
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
                    <a>CREATE</a>
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
