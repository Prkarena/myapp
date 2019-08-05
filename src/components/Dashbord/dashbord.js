
/**
 * dashbord.js : Admin
 */
import React , { Component } from 'react';
 /****************** Editor ******************/
 import { Editor } from 'react-draft-wysiwyg';
 import { EditorState, convertFromRaw , convertToRaw } from 'draft-js';
 import { stateToHtml, stateToHTML } from 'draft-js-export-html';

/********************* Css ************************/
import './dashbord.css';

class Dashbord extends Component {
    
    state = {
        editorState : EditorState.createEmpty(),
    }

    /*-------------- onEditorStateChange ----------------*/
    onEditorStateChange = (editorState) => {

        let contentState = editorState.getCurrentContent();
        /*---------- convert data into json formate ---------------*/        
        let rawState = convertToRaw(contentState);
        /*---------- convert data into html formate ---------------*/        
        let html = stateToHTML(contentState);

            this.setState({
                editorState
            })
    }

    render(){
        return(
            <div 
               className = "dashboard"
            >

            <Editor
                editorState = {this.state.editorState}
                wrapperClassName = "myEditor-wrapper"
                editorClassName = "myEditor-editor"
                onEditorStateChange = {this.onEditorStateChange}
            />

            </div>
           )
    }
}


export default Dashbord;