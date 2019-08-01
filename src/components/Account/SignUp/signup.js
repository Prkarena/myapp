/**
 * signup.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';
import { Redirect  } from 'react-router-dom';
import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';
/*-------- CSS -----------*/
import './signup.css';
import { firebaseDB } from '../../../firebase';

class SignUp extends Component  {

    state = {
        for:"Sign Up",
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
            },
            confirem_password:{
                element:'input',
                value:'',
                label:true,
                labelText:'Confirm Password',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter Confirm Password'
                },validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },signupButton:{
                element:'button',
                value:'Sign-up',
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
     
        if(id === 'confirem_password'){
            console.log(id)
            console.log(newState[id].value)
            console.log(newState['password'].value)
            if(newState['password'].value !== newState[id].value){
                newState[id].validationMessage = 'password not match.'
                newState[id].valid = false;
            }
        }
        

       this.setState({
           formData : newState
       })   

    }

    submitData = (dataToSubmit) => {
/*
        let user = dataToSubmit.email;
        let password = dataToSubmit.password;
        dataToSubmit = [user,password];

        firebaseDB.collection("users").doc(user).set({
            dataToSubmit
        }).then(function(docRef){
            <Redirect to="/login" />
        }).then(function(error){
            console.log('error adding document ',error)
        })
*/
    }


    render(){
        return(
            
            <DynamicForm 
                for = {this.state.for}
                formData = { this.state.formData }
                change = {this.updateForm}
                submitData = { this.submitData }
            /> 
         
      )
    }
   
}


export default SignUp;