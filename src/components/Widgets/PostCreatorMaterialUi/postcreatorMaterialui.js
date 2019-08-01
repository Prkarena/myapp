import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
/*----------------------- For Zoom Transition  -----------------------*/
import Zoom from '@material-ui/core/Zoom';

 const PostCreatorMaterialUi = (props) => { 
    let postlink = "";
    postlink = `post${props.data.id}`;
    const classes = useStyles();
   
  let template = null;
  //switch case for our post : image, video or document
  switch (props.data.type) {
  case 1 : 
      if(props.action === 'post'){
        template = (
                <div className={classes.post_content_image}
                    style ={{
                        background : `url(../images/articles/${props.data.data})`
                    }}>
                </div>
          )    // case 1 means image post
      }else if(props.action === 'event'){
        postlink = `events/event${props.data.id}`;
          template = (
                  <div className={classes.post_content_image}
                      style ={{
                          background : `url(../images/events/${props.data.data})`
                      }}>
                  </div>
            )    // case 1 means image post
      }
      break;
  case 2 :  template = (
          <div className={classes.post_content_video}>
              <div className="embed-responsive embed-responsive-16by9">      
                  <iframe width="560" height="315" src={props.data.data}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={props.data.title}></iframe>
              </div>
          </div>
        )   // case 2 means video post 
        break;
  case 3 :  template = (
              <div className={classes.post_pdf}
                  style ={{
                      background : `url(../images/pdf.png)`
                  }}>
              </div>
        ) // case 3 means document post
      break;
  default : return;
  }

  return (
    <Zoom in timeout={1000}>
       <Grid item xs={12} md={4} sm={6}>
    <Card className={classes.card}>
      {/* Posted by image, title and subtitl */}
      <CardHeader
        avatar={
               <Avatar alt="Remy Sharp" src="../images/articles/1.jpeg" className={classes.bigAvatar} />
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.title}
        subheader={props.data.date}
      />
      {/* Post : image, video or document */}
         {template}
      {/* Post discription */}     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
             {props.data.description} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.post_footer}>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      {/* Post Item */}  
      
         <div className={classes.readmore}>
           <Link 
            to={postlink}
            >
              <Button variant="contained" color="primary">
                  Read More
              </Button>
            </Link>

         </div>
       

      </CardActions>
      <Collapse  timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
             {props.data.description}
          </Typography>
          <Typography paragraph>
            {props.data.description}
          </Typography>
          <Typography paragraph>
            {props.data.description}
          </Typography>
          <Typography>
            {props.data.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Zoom>
  );
}
//Style for Post Card 
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 380,
      margin : 20,
      marginTop : 20,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    post_pdf: {
      backgroundSize: 'cover !important',
      width: 220,
      height: 220,
      margin:'auto',
    },
    post_content_image: {
      backgroundSize: 'cover !important',
      backgroundRepeat: 'noRepeat',
      width: '100%',
      height: 220,
  },  
  post_content_video:{
    height: 220,
  },readmore:{
      width:'100%',
      textAlign:'right',
  },
  }));
  
export default PostCreatorMaterialUi;