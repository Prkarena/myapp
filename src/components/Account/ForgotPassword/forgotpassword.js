/**
 * signup.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';

import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';
import {Grid} from '@material-ui/core';

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
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="dynamicForm"
             >
                <Grid item
                    xs={12}
                    sm={6}
                    md={5}
                    lg={4}
                    className="form"
                >
                <DynamicForm 
                    for = {this.state.for}
                    formData = { this.state.formData }
                    change = {this.updateForm}
                /> 
                </Grid>
            </Grid>
         
      )
    }
   
}


export default ForgotPassword;