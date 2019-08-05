/**
 * signup.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';
import { Redirect  } from 'react-router-dom';
import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';
/*-------- CSS -----------*/
import './signup.css';
import { firebase , firebaseDB } from '../../../firebase';


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
        redirect : false,

    }


    updateForm = (newState,id) => {
     
        if(id === 'confirem_password'){
            if(newState['password'].value !== newState[id].value){
                newState[id].validationMessage = 'password not match.';
                newState[id].valid = false;
            }
        }else if(id === 'email'){
                const valid = /\S+@\S+\.\S+/.test(newState['email'].value);
                if(!valid){
                    newState[id].validationMessage = 'Must Be a valid Email';
                    newState[id].valid = false;
                }
                

             /*   if(newState['email'].value !== newState[id].value){
                    newState[id].validationMessage = 'password not match.';
                    newState[id].valid = false;
                }
            */
        }
        

       this.setState({
           formData : newState
       })   

    }


    submitData = (dataToSubmit) => {

        let email = dataToSubmit.email;
        let password = dataToSubmit.password;

        firebase.auth()
        .createUserWithEmailAndPassword(
            email,password  
        ).then(() => {
            this.setState({
                redirect : true,
            })
            alert('Registration Done.')
        }).catch( error => {
            alert('Error While Registaring.');
            return;
        })
        /*
        dataToSubmit = { 'user_email': user,'password' : password};
        console.log(dataToSubmit)
        firebaseDB.collection("users").doc(user).set({
            dataToSubmit

        }).then(function(){

          console.log("user added." )
          
        }).catch(function(error){
            console.log('error adding document ', error)
            return
        })
*/
        

    }

    


    render(){

       const { redirect } = this.state;

       let template = redirect ? <Redirect to="/login" /> :  
        <DynamicForm 
        for = {this.state.for}
        formData = { this.state.formData }
        change = {this.updateForm}
        submitData = { this.submitData }
            /> ;
            
        return(
            <div>           
                {template}
            </div>
           
      )
    }
   
}


export default SignUp;