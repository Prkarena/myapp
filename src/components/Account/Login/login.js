/**
 * login.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';

import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';
/*-------- CSS -----------*/
import './login.css';

class Login extends Component  {

    state = {
        action :"login",
        formData:{
            email:{
                element:'input',
                value:'',
                label:true,
                labelText:'Email',
                config:{
                    name:'email_input',
                    type:'text',
                    autoComplete:"off",
                    placeholder:'Enter Your Email'
                },validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },password:{
                element:'input',
                value:'',
                label:true,
                labelText:'Password',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter Your Password'
                },validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },forgotpassword:{
                element:'link',
                link:'/forgotpassword',
                label:'Forgot Password ?',
            },loginButton:{
                element:'button',
                value:'Login',
                link:'',
                config:{
                    variant:'contained',
                    color:'primary',
                    size:'small',
                    type:'submit',
                }
            },signupButton:{
                element:'button',
                value:'Sign-up',
                link:'/signup',
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
        let  { action , formData } = this.state;
        return(
            
            <DynamicForm 
                for = { action}
                formData = { formData }
                change = {this.updateForm}
            /> 
         
      )
    }
   
}


export default Login;