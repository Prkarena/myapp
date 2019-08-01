/**
 * Slider.js : 
 * 
 */


import React,{ Component } from 'react';
import axios from 'axios';
import SliderTemplate from './SliderTemplate/slider_template';
/*---------- css -------------*/
import './slider.css';

class Slider extends Component{
/**
 * for data we need some request to database for that we need to install axios 
 * > npm install axios --save
 */

 state = {
     news : []
 }

 componentWillMount(props){
    axios.get(`http://localhost:3001/articles?_start=${this.props.start}&_end=${this.props.end}`)
    .then ( response => {
      // console.log(response.data);
       this.setState({
           news : response.data
       })
    })
 }

    render() {
        return  (
            <div className="slider">
                <SliderTemplate data = { this.state.news } end = {this.props.end} type = "template1"/>  
            </div>
        )
    }    

}

export default Slider;