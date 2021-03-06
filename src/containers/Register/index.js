import React from 'react';
import Authentication from '../../components/Authentication';
import { connect } from 'react-redux';
import { registerRequest } from '../../actions/authentication';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(id, pw){
        return this.props.registerRequest(id, pw)
        .then(
            ()=>{
                if(this.props.status === "SUCCESS"){
                    alert("Success !");
                    this.props.history.push('/signin');
                    return true;
                }else {
                    // let errorMessage=[
                    //     'Invalid Username',
                    //     'Password is too short',
                    //     'Username already exists'
                    // ];

                    alert('error message');
                    return false;
                }


            }
        )
    }

    render(){
        return(
            <div>
                <Authentication mode = {false}
                    onRegister = {this.handleRegister}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        status : state.authentication.register.status,
        errorCode : state.authentication.register.error
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        registerRequest : (id, pw) =>{
            return dispatch(registerRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);