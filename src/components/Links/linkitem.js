/**
 * LinkItem : 
 * 
 */


import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = (props) => {
    
    return (
        <Link 
        to="/cart"
        component={Cart}
        className="link"
        >
          <IconButton className="stickToRight">
                <FontAwesomeIcon icon="shopping-cart" className="iconColor" size="xs"  />
          </IconButton>
        </Link>
    )
}

export default LinkItem;