/**
 * Footer : 
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

/****** CSS *****/
import './footer.css';

const Footer = () => {

/*----------- BottomNav Start --------------*/
const [value, setValue] = React.useState('Home');

function handleChange(event, newValue) {
  setValue(newValue);
}

/** 
 * BottomNavigation Items 
*/

const linkItems = [
  {
      type : 'option',
      icon : 'home',
      text : 'Home',
      link : '/'
  },
  {
    type : 'option',
    icon : 'theaters',
    text : 'Videos',
    link : '/videos'
 },
   {
    type : 'option',
    icon : 'images',
    text : 'Events',
    link : '/events'
  },{
    type : 'option',
    icon : 'favorite',
    text : 'Favorite',
    link : '/favorite'
  }
]
/**
 *  BottomNavigationActionItem : function returns bottom navigation items
 */
const BottomNavigationActionItem = (props) => {
  return linkItems.map((linkItem,i) => {
      return (
          <BottomNavigationAction
           className = "link"
           key={i} 
           label={linkItem.text}
           value={linkItem.text} 
           icon={<Icon className="icon">{linkItem.icon}</Icon>}  
           component={Link}
           to={linkItem.link}         
          />
      )           
  })
}
/*----------- BottomNav End --------------*/
  return (
      <div>
         <BottomNavigation value={value} onChange={handleChange} className="stickToBottom">
            {BottomNavigationActionItem(value)}
        </BottomNavigation>
      </div>
  );
}

export default Footer;