/**
 * Events.js : Create Event list  
 */

import React,{ Component } from 'react';
import Post from '../Post/post';

/*------------css-------------*/
import './event.css';

class Event extends Component{
    render() {
       // console.log(this.state.posts);
       // PostTemplateMaterialui : widget > post > 
        return (
            <div className="event">
                 <Post
                  start = {0}
                  end = {4}
                  type = "event"
                  />
            </div>
        )
    }    

}

export default Event;