/**
 * LinkItem : 
 * 
 */


import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';


const LinkItem = (props) => {
    
    return (

        <Link 
        to="/cart"
        component={Cart}
        className="link"
        >
          <Card>  
            <IconButton
             className="stickToRight">
                  <FontAwesomeIcon icon="shopping-cart" className="iconColor" size="xs"  />
            </IconButton>
          </Card>
        </Link>
        
    )
}

export default LinkItem;