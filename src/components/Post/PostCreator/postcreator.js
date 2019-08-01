/**
 * PostCreator : 
 * 
 */


import React from 'react';
import { Card , Container, Row, Col, Image} from  'react-bootstrap';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
//css
import './postcreator.css';


const PostCreator = (props) => {

   // console.log(props.data.type);
   // console.log(props.data.data);


    let template = null;

    
    
            switch (props.data.type) {
                case 1 : template = (
                        <div className="post_content_image"
                        style ={{
                            background : `url(../images/articles/${props.data.data})`
                        }}>
                        </div>
                    )    // case 1 means image post
                    break;
                case 2 :  template = (
                        <div className="post_content_video">
                            <div className="embed-responsive embed-responsive-16by9">
                              
                                <iframe width="560" height="315" src={props.data.data}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={props.data.title}></iframe>

                            </div>
                        </div>

                    )   // case 2 means video post 
                    break;
                case 3 :  template = null 
                   break;
                // case 3 means document post
                default : return  null;

            }
        

            

    return (
        <div className="PostImage m-2">  
         <Card className="shadow">
            <Card.Header className="pb-0">
                <Container>
                    <Row>
                        <Col xs={2} className="posted_by_image p-0">
                         
                              <Image src="../images/articles/1.jpeg" roundedCircle />
                           
                        </Col>
                        <Col xs={6}>
                            <div>{props.data.title}</div>
                            <div>{props.data.date}</div>
                        </Col>
                        <Col xs={4} className="posted_by_name p-0">
                        <div>posted by</div>
                        <p>{props.data.author}</p>
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
            <Card.Body className="p-2">

                {template}

              

               
                <h5>
                    {props.data.description}
                </h5>
               
            </Card.Body>
            <Card.Footer className="text-muted">
                <Container>
                    <Row>
                        <Col className="text-center"><FontAwesomeIcon icon="heart" className="icon"/></Col>
                        <Col className="text-center"><FontAwesomeIcon icon="comment" className="icon"/></Col>
                        <Col className="text-center"><FontAwesomeIcon icon="share" className="icon"/></Col>
                    </Row>
                </Container>
            </Card.Footer>
        </Card>
        </div>
    )
}

export default PostCreator;