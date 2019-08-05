/**
 * Slider.js : 
 * 
 */


import React,{ Component } from 'react';
import axios from 'axios';
import { firebasePosts,firebaseLooper } from '../../../firebase';
import SliderTemplate from './SliderTemplate/slider_template';

/*---------- css -------------*/
import './slider.css';

class Slider extends Component{
/**
 * for data we need some request to database for that we need to install axios 
 * > npm install axios --save
 */

 state = {
     slides : [],
     start : this.props.start,
     end : this.props.end,
 }

 componentWillMount = (props) => {
    firebasePosts.orderBy("item.id").startAt(this.state.start).endAt(this.state.end)
    .get().then((querySnapshot) => {
        const slides = firebaseLooper(querySnapshot);
        this.setState({
            slides : [...this.state.slides,...slides],
        })
    });
/*
    axios.get(`http://localhost:3001/articles?_start=${this.props.start}&_end=${this.props.end}`)
    .then ( response => {
      console.log(response.data);
       this.setState({
           news : response.data
       })
    })*/

    
 }

    render() {
        return  (
            <div className="slider">
                <SliderTemplate data = { this.state.slides } end = {this.props.end} type = "template1"/>  
            </div>
        )
    }    

}

export default Slider;