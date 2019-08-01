/**
 * Post Template : 
 * it sets the data as per action using Map 
 * it can be : 1 image ,2 video or 3 document
 * 
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';

/*----------------- Components ------------------- */

import PostCreatorMaterialUi from './postcreatorMaterialui';

const PostTemplateMaterialui = (props) => {
    // template : for storing each post and shown in post div 
    let template = null;
    template = props.data.map((item,i) => {
      //widget > post > 
       return  <PostCreatorMaterialUi data={item} key={i} action = { props.action } />
    })
    return (
      <div className="post pt-2"> 
       <Grid container spacing={3}>
         {template}
       </Grid>
      </div>
    )
}

export default PostTemplateMaterialui;

