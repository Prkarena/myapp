import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
/*======== Components ==========*/
import SideBarLayout from '../SideNavBar/SidebarLayout/sidebarlayout';
/****** CSS *****/
import  './sidenavbar.css';

 const SideBar = (props) => {
  return (
    <span className="sidebar">
        {/* SwipeableDrawer */}
        <SwipeableDrawer
        open={props.open}
        onClose={props.onClose}
        onOpen={props.onOpen}
        >
        {/* SideList */}          
          <SideBarLayout {...props} />
        </SwipeableDrawer>
    </span>
  );
}

export default SideBar;