
/**
 * Auto Rotating carousel : 
 * 
 */

import React ,  { Component } from 'react';
import { AutoRotatingCarousel , Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@material-ui/core/colors';



   class AutoRotatingCarouselComponent extends Component{
    /**
     * for data we need some request to database for that we need to install axios 
     * > npm install axios --save
     */


        render() {
            
            return(
                <div>
                <AutoRotatingCarousel
                  label="Get started"
                  open
                >
                   <Slide
                    media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" alt="img1" />}
                    mediaBackgroundStyle={{ backgroundColor: red }}
                    title="This is a very cool feature"
                    subtitle="Just using this will blow your mind."
                    />
                    <Slide
                    media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" alt="img2" />}
                    mediaBackgroundStyle={{ backgroundColor: blue }}
                    title="Ever wanted to be popular?"
                    subtitle="Well just mix two colors and your are good to go!"
                    />
                    <Slide
                    media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" alt="img3" />}
                    mediaBackgroundStyle={{ backgroundColor: green }}
                    title="May the force be with you"
                    subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars universe."
                    />
                </AutoRotatingCarousel>
              </div>
           
            )
           
        }    
    
    }
    
    export default AutoRotatingCarouselComponent;



