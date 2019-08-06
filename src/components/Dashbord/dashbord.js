
/**
 * dashbord.js : Admin
 * Upload : component for uploading posts 
 * 
 */
import React , { Component } from 'react';
 /****************** Component ******************/
import CardWithLink from '../Widgets/CardWithLink/cardwithlink';

/********************* Css ************************/
import './dashbord.css';

class Dashbord extends Component {
    
    state = {
        linkItems : [
            {
                type : 'option',
                icon : 'home',
                text : 'Posts',
                link : '/dashboard/uploadpost'
            }, {
              type : 'option',
              icon : 'eventNote',
              text : 'Events',
              link : '/dashboard/uploadevent'
          }
          ]
    }

    render(){
        const {linkItems} = this.state;

        return(
            <div 
               className = "dashboard"
            >

           <CardWithLink
                data = {linkItems}
           />

            </div>
           )
    }
}


export default Dashbord;