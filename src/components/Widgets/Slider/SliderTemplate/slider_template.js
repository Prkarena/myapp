
/**
 * Slider Template : 
 * install react-bootstrap bootstrap :  npm install react-bootstrap bootstrap
 * 
 */

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
/*------------ css -------------------*/
import './slider_template.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

 const SliderTemplate = (props) => {
  const data = props.data ;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.end;
 
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }
      return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.id} className={classes.subroot}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div
                   className = {classes.img}
                    style ={{
                        background : `url(../images/articles/${step.data})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        position: 'relative',
                    }}
                ></div>
            ) : null}
            
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={props.end}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        />
        <div className={classes.sliderButtonDiv}>
          <Fab color="primary" size="small" onClick={handleBack}  disabled={activeStep === 0}  className={classes.fableft}>
              <Icon>navigate_before</Icon>
          </Fab>
          <Fab color="primary" size="small" onClick={handleNext}  disabled={activeStep === maxSteps - 1} className={classes.fabright}>
              {theme.direction === 'rtl' ?  <Icon>navigate_before</Icon> :   <Icon>navigate_next</Icon>  }
          </Fab>
        </div>
          
    </div>
  );
}

const useStyles = makeStyles( theme => ({
    root: {
      flexGrow: 1,
      justifyContent:'center',
      '&$disabled': {
        backgroundColor: 'red',
      },
    },
    subroot: {
        width: '100%',
    },
    img: {  
      height : 250,
      [theme.breakpoints.up('sm')]: {
        height: 500,
      },
      fableft: {
        
      }, fabright: {
        position:'relative',
        margin: theme.spacing(1),
        right:0,
      },
      disabled:{
        backgroundColor:"red",
      },
    },
    sliderButtonDiv : {
      width:'100%',
      display:'flex',
      position: 'absolute',
      top: 170,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
     [theme.breakpoints.up('sm')]: {
        top:260,
    },
  },
  }));
  
export default SliderTemplate;
