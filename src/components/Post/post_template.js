/**
 * Post Template : 
 * install react-bootstrap bootstrap :  npm install react-bootstrap bootstrap
 * it can be : 1 image ,2 video or 3 document
 * 
 */
import React from 'react';
/*----------------- Components ------------------- */
import PostCreator from './PostCreator/postcreator';
//css
import './post.css'

const PostTemplate = (props) => {
   
    let template = null;     
    template = props.data.map((item,i) => {
       return  <PostCreator data={item} key={i} />
    })

    return (
      <div className="post"> 
               {template}
      </div>
    )
}

export default PostTemplate;

