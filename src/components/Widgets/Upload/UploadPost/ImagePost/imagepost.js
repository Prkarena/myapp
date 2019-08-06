/**
 * signup.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';
import DynamicForm from '../../../DynamicForm/dynamicForm';
import { EditorState, convertFromRaw , convertToRaw } from 'draft-js';
import { stateToHtml, stateToHTML } from 'draft-js-export-html';
/*-------- CSS -----------*/
import './imagepost.css';

class ImagePost extends Component  {

    
    state = {
        for:"Image Post",
        formData:{
            title:{
                element:'input',
                value:'',
                label:true,
                labelText:'Title',
                config:{
                    name:'title_input',
                    type:'text',
                    placeholder:'Enter Your Title'
                },validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            /*
            editor:{
                element:'editor',
                value:'',
                label:true,
                labelText:'Title',
                config:{
                    editorState : EditorState.createEmpty(),
                    wrapperClassName : "myEditor-wrapper",
                    editorClassName : "myEditor-editor",
                    onEditorStateChange : '',
                }
            },*/submit:{
                element:'button',
                value:'Submit',
                link:'',
                config:{
                    variant:'contained',
                    color:'primary',
                    size:'small',
                    type:'submit',
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


export default ImagePost;