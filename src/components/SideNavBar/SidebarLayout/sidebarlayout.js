import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

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
      }
    ]

    const ShowItems = () => {
      return linkItems.map((linkItem,i) => {
          return <div key={i}  className={linkItem.type}>
                    <Link
                      to={linkItem.link}
                    >
                         <Icon className="Icon">{ linkItem.icon }</Icon>
                         <span className="linkItemText">{linkItem.text}</span>  
                    </Link>
                </div>          
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