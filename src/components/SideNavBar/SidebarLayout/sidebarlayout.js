import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';

/****** CSS *****/
import  './sidebarlayout.css';

/**
 * import name from config.js
 */
import {USERNAME} from '../../../hoc/config';

 const SideBarLayout = (props) => {

    const linkItems = [
      {
          type : 'option',
          icon : 'person',
          text : 'Profile',
          link : '/profile'
      }, {
        type : 'option',
        icon : 'dashboard',
        text : 'Dashboard',
        link : '/dashboard'
    }
    ]

    const ShowItems = () => {
      return linkItems.map((linkItem,i) => {
          return (
                  <Link
                    to={linkItem.link} 
                    key = {i}
                  >
                    <Grid container key={i}  className={linkItem.type}>
                      <Grid item xs={3}>
                        <Icon className="Icon">{ linkItem.icon }</Icon>
                      </Grid>
                      <Grid item xs={9}>
                        <label className="linkItemText">{linkItem.text}</label>  
                      </Grid>
                    </Grid>          
                  </Link>
          )                  
      })
    }

  return (
    /*----------- SideList --------------*/
    <div
      className = "sidenavbar"
      role="presentation"
      onClick={props.onClose}
      onKeyDown={props.onClose}
    >      
      <div className="card shadow">
                <div className="profileImageInSideNavBar mx-auto rounded-circle d-block shadow-lg"/>
                <br/>
                <h4>{USERNAME}</h4>
                {ShowItems()}
      </div>
    </div>
  );
}

export default SideBarLayout;