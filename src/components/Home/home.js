/**
 * Home : 
 * 
 */
import React from 'react';
import Slider from '../Widgets/Slider/slider';
import Post from '../Post/post';
//css
import './home.css';

const Home = () => {
    return (
        <div className="mainContainer">  
          <Slider
            type = "template1"
            start = {0}
            end = {6}
          />
          <Post
           start = {0}
           end = {3}
           type = "post"
          />
        </div>
    )
}

export default Home;