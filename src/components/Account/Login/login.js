/**
 * login.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';
import { Redirect  } from 'react-router-dom';
import Button from '@material-ui/core/Button';


/*-------- Component -----------*/
import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';

/*-------- CSS -----------*/
import './login.css';
/*------- Firebase Database -----------*/
import {firebase , googleAuth} from '../../../firebase';

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
            redirect : false,

        /*    googleSignIn:{
                element:'button',
                value:'Google-Sign-In',
                link:'',
                config:{
                    variant:'contained',
                    color:'primary',
                    size:'small',
                    type:'button',
                    onClick: () => {
                        this.googleSignIn();
                    },
                }
            },
              */
        },
    }

    updateForm = (newState,id) => {

        if(id === 'email'){
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
       // dataToSubmit = { 'user_email': user,'password' : password};



       firebase.auth()
       .signInWithEmailAndPassword(
           email,password  
       ).then(() => {
           this.setState({
               redirect : true,
           })
       }).catch( error => {
           alert('Error While Registaring.');
           return;
       })

    }
/*
    googleSignIn = () => {
        firebase.auth().signInWithPopup(googleAuth)
    }

    */

    componentWillMount = () => {

            firebase.auth().onAuthStateChanged((user) =>{
              if(user !== ''){
                    this.setState({
                        redirect : true
                    })
              }
            })
    }


    signOut = () => {
        firebase.auth().signOut().then(() => {
            alert('Sign-Out Successfully');
            this.setState({
                redirect : false
            })
          }).catch(function(error) {
            alert('Error While Sign-Out');            
          });

        
    }


    render(){

        let  { action , formData, redirect } = this.state;

        let template = redirect ? 
        <div className="signout-button">
            <Button variant="contained" color="primary"
                onClick = {() => this.signOut()}
            >
                Sign-Out
            </Button>
        </div>
        :  
        <DynamicForm 
        for = { action}
        formData = { formData }
        change = {this.updateForm}
        submitData = { this.submitData }
        />  ;
            

        return(
            <div>           
                {template}
            </div>
      )
    }
   
}


export default Login;