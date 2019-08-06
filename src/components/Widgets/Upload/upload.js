/**
 * upload.js : upload post,event
 * 
 */

import React, {Component} from 'react';
import UploadPost from './UploadPost/uploadpost';
import UploadEvent from './UploadEvent/uploadevent';


/*-------- Component -----------*/
import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';

/*-------- CSS -----------*/
import './upload.css';
/*------- Firebase Database -----------*/
import {firebase } from '../../../firebase';

const Upload = (props) => {

  const  renderTemplate = (props) => {

        let action = props.match.url ;
        if(action.match(/post/)){
            return <UploadPost />
        }else if(action.match(/event/)){
           return <UploadEvent />
        }
    }       

        return(
            <div>  
                  {renderTemplate(props)}             
            </div>
      )

}


export default Upload;