import React, { Component } from 'react';
import LoginForm from "./LoginForm";

class Login extends Component{

    getInitialValues = () => {
        return{
            fullname: '',
            email: '',
            location: '',
            checkAgreements: false,
            isSubmitted: false
        }
    }

    submit = values =>{
        console.log(JSON.stringify(values))
    }

    render(){
        return(
            <div>
                <h1>Sign up</h1>
                <LoginForm onSubmit = {this.submit} initialValues = {this.getInitialValues()}/>
            </div>
        )
    }
}

export default Login;