/**
 * Routes : returns routes of our application for router
 */
 import React from 'react';
 import { Route , Switch } from 'react-router-dom';
 /****************** Components ******************/
 import Home from './components/Home/home';
 import Profile from './components/Profile/profile';
 import FourOFour from './components/FourOFour/fourofour';
 import Event from './components/Event/events';
 import Videos from './components/Videos/videos';
 import Favorite from './components/Favorite/favorite';
 import Products from './components/Products/product';
 import Notification from './components/Notification/notification';
 import AutoRotatingCarouselComponent from './components/Widgets/About/AutoRotatingCarousel';
 import PostItem from './components/Widgets/PostItem/postitem';
 import Login from './components/Account/Login/login';
 import SignUp from './components/Account/SignUp/signup';
 import Dashbord from './components/Dashbord/dashbord';
 import ForgotPassword from './components/Account/ForgotPassword/forgotpassword';





 const Routes = () => {
    return (
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/forgotpassword" exact component={ForgotPassword}/>
            <Route path="/dashbord" exact component={Dashbord}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/notification" exact component={Notification}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/:events/event:id" exact component={PostItem}/>
            <Route path="/events" exact component={Event}/>
            <Route path="/post:id" exact component={PostItem}/>
            <Route path="/favorite" exact component={Favorite}/>
            <Route path="/videos" exact component={Videos}/>
            <Route path="/aboutcarousel" exact component={AutoRotatingCarouselComponent}/>
            <Route path="/" exact component={Home}/>
            <Route component={FourOFour}/>        
        </Switch>
    )
 }

 export default Routes;