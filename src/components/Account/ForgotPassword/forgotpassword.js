/**
 * signup.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';

import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';
/*-------- CSS -----------*/
import './forgotpassword.css';

class ForgotPassword extends Component  {

    
    state = {
        for:"Forgot Password",
        formData:{
            email:{
                element:'input',
                value:'',
                label:true,
                labelText:'Email',
                config:{
                    name:'email_input',
                    type:'text',
                    placeholder:'Enter Your Email'
                },validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },sendButton:{
                element:'button',
                value:'SendLink',
                link:'',
                config:{
                    variant:'contained',
                    color:'primary',
                    size:'small',
                    type:'submit',
                }
            },loginButton:{
                element:'button',
                value:'Login',
                link:'/login',
                config:{
                    variant:'contained',
                    color:'primary',
                    size:'small',
                    type:'button',
                }
            },
        },
    }

    updateForm = (newState,id) => {

       this.setState({
           formData : newState
       })   

    }


    render(){
        return(
            
            <DynamicForm 
                for = {this.state.for}
                formData = { this.state.formData }
                change = {this.updateForm}
            /> 
         
      )
    }
   
}


export default ForgotPassword;