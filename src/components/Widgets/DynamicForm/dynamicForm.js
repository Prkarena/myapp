/**
 * DynamicForm.js : it return jsx as per props : login,signup,forgotePassword etc..,
 * 
 */
import React from 'react';
import { Grid, Divider, Button, Box } from '@material-ui/core';
import { Card, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';
/*-------  Editor ---------------*/
import { Editor } from 'react-draft-wysiwyg';

/*------ CSS ----------*/
import './dynamicForm.css';


const DynamicForm = (props) => {

  /*----- showLabel() : it handle label is shown in Form input item or not ------*/
  const showLabel = (show,label) =>{
    return show ? 
    <label><b>{label}</b></label>
    : 
    null;
}

/*----- changeHandler() : it handle input change event in form input feild ------*/

/*----- validate() : it checks validation and return error array ------*/    
const validate = (element) => {
    let error = [true,''];

    if(element.validation.required){
        const valid = element.value.trim()  !== '' ;
        const message = `${ !valid ? 'this feiled is required.' : ''}`;

        error = !valid ? [valid,message] : error;

    }

    return error;
}

const changeHandler = (event,id) =>{
    console.log(event)
    const newState = props.formData;
    
    newState[id].value = event.target.value;

    let valiDate = validate(newState[id]);
    newState[id].valid = valiDate[0];
    newState[id].validationMessage = valiDate[1];


    props.change(newState,id);

}



/*----- getButton() : it returns button or button with link ------*/
const getButton = (values) =>{
    if(values.link === ""){
        return(
            <Button 
            {...values.config}  
            className={values.value}
            >
                {values.value}
            </Button>
        )
    }else{
        return(
            <Link
                to={values.link}
            >
                 <Button 
                {...values.config}  
                className={values.value}
                >
                    {values.value}
                </Button>
            </Link>
          

        )
    }
}

const showValidation = (values) => {
    let errorMessage = null;

    if(values.validation.required && !values.valid){
        errorMessage = (
            <div className="label_error">
                {values.validationMessage}
            </div>
        )
    }

    return errorMessage;
}

/*----- renderTemplates() : it returns template as per form item ------*/    
const renderTemplates = (data) => {
    let formTemplate = '';
    let values = data.settings;
    //console.log(values);
    switch(values.element){
        /*-------- Input  -------*/
        case('input'):
            formTemplate = (
                <div>
                    {showLabel(values.label,values.labelText)}
                    <br/>
                    <input
                    {...values.config}  
                    values={values.value} 
                    onChange={
                        (event) => changeHandler(event,data.id)
                    }             
                    />
                    {showValidation(values)}
                </div>
                )
        break;
        /*-------- Label  -------*/
        case('label'):
        formTemplate = (
       
               <label> { values.label }</label> 
          
        )
        break;
        /*-------- Checkbox  -------*/
        case('checkbox'):
        formTemplate = (
            <div>
               checkbox 
            </div>    
        )
        break;
        /*-------- Select -------*/
        case('select'):
        formTemplate = (
            <div>
                {showLabel(values.label,values.labelText)}
                <br/>
               <select
                values={values.value}  
                name={values.config.name}
                onChange={
                    (event) => changeHandler(event,data.id)
                } 
               >
                   {
                       values.config.options.map((item,i)=>(
                           <option key={i} value =  {item.val} >{ item.text }</option>
                       ))
                   }
               </select>
            </div>    
        )
        break;
        /*-------- TextArea  -------*/
        case('textarea'):
        formTemplate = (
            <div>
                {showLabel(values.label,values.labelText)}
                <br/>
               <textarea
                    {...values.config}  
                    values={values.value}         
                    onChange={
                        (event) => changeHandler(event,data.id)
                    } 
               />
            </div>    
        )
        break;
        /*-------- Button  -------*/
        case('button'):
            formTemplate = (
                <div>
                    {getButton(values)}                        
                </div>    
            )
        break;
        /*-------- Link  -------*/
        case('link'):
        formTemplate = (
            <div>
                <Link to= {values.link}>{ values.label }</Link>
            </div>    
        )
        break;
        case('editor'):
        formTemplate = (
            <div className="editor" >
               <Editor
                editorState = {values.config.editorState}
                wrapperClassName = "myEditor-wrapper"
                editorClassName = "myEditor-editor"
                onEditorStateChange = { (event) => changeHandler(event,data.id) }
                />
            </div>    
        )
        break;
        default:
        formTemplate = null
    }
    return formTemplate; 
}

const renderFeilds = () => {

    const formArray = [];

    for( let elementName in props.formData){
        formArray.push({
            id:elementName,
            settings:props.formData[elementName]
        })
    }

   return formArray.map( (item,i) => {
        return (
            <div key={i} className="form_element">
                {renderTemplates(item)}
            </div>
        )
   })

}

const submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {};

    for(let key in props.formData){
        //if (props.formData[key].validation.required){
            if(props.formData[key].value === ""){
                alert("please enter " + key );
                return 
            }else if(props.formData[key].valid === false ){
                return
            }
            dataToSubmit[key] = props.formData[key].value   
        //}
    }
   
    props.submitData(dataToSubmit)

}


    return(  
      
         /*   <Grid 
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
                */
                    <Box
                    boxShadow={3}
                    >   
                        <Card> 
                            <CardHeader
                                title =   {props.for}
                                className = "cardHeader"
                            /> 
                            <Divider/>
                                <form  onSubmit={submitForm}>
                                 {renderFeilds()}
                                </form>
                        </Card> 

                    </Box>
               /*     
                </Grid>
                
            </Grid>    
        
       */
    )

}


export default DynamicForm;