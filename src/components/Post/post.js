/**
 * Post.js : 
 * 
 */


import React,{ Component } from 'react';
import axios from 'axios';
import PostTemplateMaterialui from '../Widgets/PostCreatorMaterialUi/postTemplateMaterialui';
import './post.css'
import InfiniteScroll from "react-infinite-scroll-component";
/*----------- firebase  -------------------*/
import { firebasePosts , firebaseEvents ,firebaseLooper} from '../../firebase';

class Post extends Component{
/**
 * for data we need some request to database for that we need to install axios 
 * > npm install axios --save
 * type : posts , events ,videos
 */

 state = {
     posts : [],
     start : this.props.start,
     end : this.props.end,
     amount : 2,
     type : this.props.type
 }

 componentWillMount(props){
   
    this.request(this.state.start,this.state.end);
 }

 request = (start,end) => {
  
        if(this.props.type === "post")
        {  
        /* 
                axios.get(`http://localhost:3001/Posts?_start=${start}&_end=${end}`)
                .then ( response => {
                    //console.log(response.data);
                this.setState({
                    posts : [...this.state.posts,...response.data],
                    start ,
                    end
                })
                })
        */
        firebasePosts.orderBy("item.id").startAt(start).endAt(end)
        .get().then((querySnapshot) => {
            const posts = firebaseLooper(querySnapshot);
            this.setState({
                posts : [...this.state.posts,...posts],
                start ,
                end
            })
        });


        }else if(this.props.type === "event"){
        firebaseEvents.orderBy("item.id").startAt(start).endAt(end)
        .get().then((querySnapshot) => {
            const events = firebaseLooper(querySnapshot);
            this.setState({
                posts :[...this.state.posts,...events],
                start ,
                end
            })
        });

        /*
        axios.get(`http://localhost:3001/Events?_start=${start}&_end=${end}`)
        .then ( response => {
            //start and end going to change as per request start and
           this.setState({
              posts : [...this.state.posts,...response.data],
              start ,
              end
           })
        })*/
    }
 }

 loadMore = () =>{
     let end = this.state.end + this.state.amount;
     this.request(this.state.end + 1 ,end);
 }

    render(props) {
        return (
            <InfiniteScroll
                dataLength={this.state.posts.length}
                next={this.loadMore}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
            <div className="posts">
                <PostTemplateMaterialui data = { this.state.posts } action = {this.props.type} />                
            </div>
            </InfiniteScroll>
        )
    }    

}

export default Post;