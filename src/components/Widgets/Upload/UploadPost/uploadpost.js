/**
 * upload.js : upload post,event
 * 
 */



import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

/*----------------- Components ---------------------*/
import DocumentPost from './DocumentPost/documentpost';
import ImagePost from './ImagePost/imagepost';
import VideoPost from './VideoPost/videopost';

//css
import './uploadpost.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

  
 const UploadPost = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
  
    function handleChangeIndex(index) {
      setValue(index);
    }
  
    return (
      <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      className="post-root"
      >
        <Grid item 
            xs= {12}
            sm={7}
            md={5}
            lg={4}
        >
         <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Image"  icon={ <Icon className="Icon">image</Icon> } {...a11yProps(0)} />
            <Tab label="Video" icon={ <Icon className="Icon">videocam</Icon>}  {...a11yProps(1)} />
            <Tab label="Document"  icon={ <Icon className="Icon">folderOpen</Icon>} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
                <ImagePost/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
                <VideoPost/>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
                <DocumentPost/>
          </TabPanel>
        </SwipeableViews>       
        </Grid>
      </Grid>
    );
  }
  
  
export default UploadPost;


