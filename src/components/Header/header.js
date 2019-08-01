/**
 * Header.js for Header
 * 
 */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';

/*======== Components ==========*/
import SideBar from '../SideNavBar/sidenavbar';

const Header = () => {  
  const classes = useStyles();
/*----------- Swipable Drawer Start --------------*/

const [state, setState] = useState({
  isOpen : false,
});

const toggleDrawer = (open) => event => {
  if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({
     isOpen : open
  });

};

/*----------- Swipable Drawer End --------------*/
  return (
    <div className={classes.grow} >
      <AppBar position="fixed">
        <Toolbar>
          {/* sidebar button start */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer(true)}>
               <Icon>menu</Icon>
          </IconButton>
          {/* sidebar button end */}
          {/* SwipeableDrawer */}      
            <SideBar 
              open={state.isOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            />
          {/* SwipeableDrawer end */}      
          {/* Logo */}  
          <Typography className={classes.title} variant="h6" noWrap>
          <Link 
              to="/"
              >
                <span className={classes.title}  >rao</span>     
           </Link>
           </Typography>
          {/* Logo end */}      
          <div className={classes.grow} />
          {/* Search Start */}      
           <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <Icon>search</Icon>
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'Search' }}
                    />
            </div>
          {/* Search End */} 
          {/* Notification Start */} 
          <Link
            to='/notification'
          >
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <Icon  className={classes.icons}>notifications</Icon>
              </Badge>
            </IconButton>
            </Link>
          {/* Notification End */} 
          <Link to='/aboutcarousel'>
              <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-haspopup="true">
                 <Icon  className={classes.icons}>help</Icon>
              </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily:'monospace',
    fontSize:'25px',
    color:'white',
    textDecoration:'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },'&:hover': {
      textDecoration:'none',
    },
  }, icons: {
    color:'white',
    textDecoration:'none',
    '&:hover': {
      color:'gray',
      textDecoration:'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    transition: 'width 1s',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),
      width: '250px',
    },
    marginLeft: 0,
    width: '150px',
    height: '35px',
    marginTop:'5px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '200px',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.45),
        width: '300px',
      },
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));
