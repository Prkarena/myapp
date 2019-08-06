/**
 * upload.js : upload post,event
 * 
 */

import React, {Component} from 'react';



/*-------- Component -----------*/
import DynamicForm from '../../DynamicForm/dynamicForm';


/*-------- CSS -----------*/
import './uploadevent.css';
/*------- Firebase Database -----------*/

class UploadEvent extends Component  {

    state = {
        action :"",
        formData:{},
    }


    updateForm = (newState,id) => {
        /*----------- Post Type : image,video or pdf  ------------*/
       this.setState({
           formData : newState
       })  
    }
    


    submitData = (dataToSubmit) => {

        console.log(dataToSubmit)
        
    }

 
    render(){
       
        
        let  { action , formData } = this.state;

        return(
            <div>  
                upload event       
            </div>
      )
    }
   
}


export default UploadEvent;