/**
 * CardWithLink : 
 * It gives card's with link as per props
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon,IconButton, Grid } from '@material-ui/core';

/*----------------- Components ------------------- */


/*----------------- CSS ------------------- */

import './cardwithlink.css'

const CardWithLink = ({data}) => {
   
    let template = null;     
    template = data.map((property,i) => {
       return (
                <Grid item xs={12} sm={4} md={3} lg={2} key = {i} >
                    <Link 
                    to= {property.link}
                    className="link"
                    >
                        <Card
                        className="linkcard"
                        >  
                                <Icon className="iconColor" size="xs"  >{property.icon}</Icon> <br/>
                                <label>{property.text}</label>
                        </Card>
                    </Link>     
                </Grid>
                   
          
      
        )
    })

    return (
      <Grid container className="cardwithlink"> 
               {template}
      </Grid>
    )
}

export default CardWithLink;

