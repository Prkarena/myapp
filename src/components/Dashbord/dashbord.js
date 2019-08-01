/**
 * dashbord.js : Main Component 
 * Loader
 * BrowserRouter : Routes 
 * Header and Footer for all routes 
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
 /****************** Components ******************/
import Routes from '../../routes';
import Header from '../Header/header';
import Footer from '../Footer/footer';
/********************* Css ************************/
import './dashbord.css';
/* BootStrap */
import '../../css/bootstrap.min.css';

/**
 * 
 * Icons 
 * 
 */


import {faHome,faPlay,faImages,faVideo,faUser,faShoppingCart,faSearch,faBell,faHeart,faComment,faShare}  from "@fortawesome/free-solid-svg-icons";

/****** Library for All types of icons *****/
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHome,faPlay,faImages,faVideo,faUser,faShoppingCart,faSearch,faBell,faHeart,faComment,faShare);


const Dashbord = () => {

/********************* Loader Start ************************/




/********************* Loader End ************************/


    return(
        <BrowserRouter>
            <div className = "mainContainer">
                <Header/>   
                <Routes/>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}


export default Dashbord;