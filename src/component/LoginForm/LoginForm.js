import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import {Link} from "react-router-dom";

class LoginForm extends Component{

    render(){
    const {handleSubmit} = this.props;

    return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-fields header'>Sign up</div>
                <div className='form-fields header'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
                <div className='form-fields input'>
                    <Field name='fullname' component='input' placeholder='Full Name' type='text'/>
                </div>
                <div className='form-fields input'>
                    <Field name='email' component='input' placeholder='Email' type='email'/>
                </div>
                <div className='form-fields input'>
                    <Field name='location' component='input' placeholder='Location' type='text'/>
                </div>
                <div className='form-fields checkbox'>
                    <Field name='checkAgreements' type='checkbox'>I agree to the <span>Terms & Privacy</span></Field>
                </div>
                 <div className='form-fields btn-submit'>
                    <Field name='fullname' component='input' placeholder='Full Name' type='text'/>
                </div>
                <div className='form-fields link'>
                    <Link to='/register'>Have an account? <span color="#FF6A00">Sign in</span></Link>
                </div>
            </form>
        )
    }
}
export default reduxForm({form:'signup',})(LoginForm)