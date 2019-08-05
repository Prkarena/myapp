/**
 * Post Item : 
 * 
 */


import React , { Component } from 'react';
import axios from 'axios';
import { firebasePosts, firebaseEvents } from '../../../firebase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

/*--css--*/
import './postitem.css';

class PostItem extends Component {

    state = {
        data : [] ,
        id : "",
        post : "",
        img : ""
    }

    componentWillMount(props){

        //console.log(this.props.match.params.id);
        let post_id = this.props.match.params.id;
        let action = this.props.match.url ;
    
        if(action.match(/post/)){

     

        const docRef = firebasePosts.doc(post_id);

        docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data().item;
            this.setState({
                data,
                id : post_id,
                post: 'posts',
                img : 'articles'
            })
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });




    /*


            axios.get(`http://localhost:3001/Posts?id=${post_id}`)
            .then ( response => {
               let data = response.data[0];
              // console.log(data.type);
               this.setState({
                  data,
                  id : post_id,
                  post: 'posts',
                  img : 'articles'

               })
            })
*/
        }else if(action.match(/event/)){

        const docRef = firebaseEvents.doc(post_id);

        docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data().item;
            this.setState({
                data,
                id : post_id,
                post: 'events',
                img : 'events'
            })
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    /*


            axios.get(`http://localhost:3001/Events?id=${post_id}`)
            .then ( response => {
                //start and end going to change as per request start and
                let data = response.data[0];
                this.setState({
                    data ,
                    id : post_id,
                    post : 'events',
                    img : 'events'
                 })
                
            })
            */

        }
    }

  
    render(){

        let template = "";
        let backLink = "";

        if(this.state.post === "posts"){
            backLink = '/';
            switch(this.state.data.type){
                case 1:
                        template = (
                            <div className="post_header"
                                 style ={{
                                     background :  `url(../images/${this.state.img}/${this.state.data.data})`
                                 }}>
                             </div>
                           )
                    break;
                case 2:
                        template = (
                            <div className="post_content_video">
                                <div className="embed-responsive embed-responsive-21by9">      
                                    <iframe width="560" height="220" src={this.state.data.data}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={this.state.data.title}></iframe>
                                </div>
                            </div>
                          )   // case 2 means video post 
                          break;
                 case 3 : 
                         template = (
                            <div className="post_header"
                                style ={{
                                    background : `url(../images/pdf.png)`
                                }}>
                            </div>
                      ) // case 3 means document post
                    break;
                default : return;

            }

        }else if(this.state.post === "events"){
            backLink = '/events';
            template = (
                <div className="post_header"
                     style ={{
                         background :  `url(../images/${this.state.img}/${this.state.data.data})`
                     }}>
                 </div>
               )
        }

       
           

        let  data  = this.state.data;
    
        return (
            <div className="postitem">
                    {template}
                  <div className="p-2">
                  <Typography paragraph>{data.title}</Typography>
                    <Typography paragraph>
                        {data.description}
                    </Typography>
                    <Typography paragraph>
                        {data.description}
                    </Typography>
                    <Typography paragraph>
                      {data.description}
                    </Typography>
                    <Typography>
                       {data.description}                        
                    </Typography>
                  </div>
                <div>
                    <Link 
                    to={backLink}
                    >
                        <Button variant="contained" color="primary">
                            Go Back
                        </Button>
                    </Link>
                    
                </div>
              
            </div>
        )
    }
}


export default PostItem;