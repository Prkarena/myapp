
/**
 * Index.js : Main Component 
 * BrowserRouter : Routes 
 * Header and Footer for all routes 
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
 /****************** Components ******************/
import Routes from './routes';
import Loader from './components/Loader/loader';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
/********************* Css ************************/
import './css/index.css';
/********************* Firebase ************************/
import {firebase} from './firebase';
/* BootStrap */
import './css/bootstrap.min.css';
/**
 * 
 * Icons 
 * 
 */


import {faHome,faPlay,faImages,faVideo,faUser,faShoppingCart,faSearch,faBell,faHeart,faComment,faShare}  from "@fortawesome/free-solid-svg-icons";

/****** Library for All types of icons *****/
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHome,faPlay,faImages,faVideo,faUser,faShoppingCart,faSearch,faBell,faHeart,faComment,faShare);

const App = () => {

//loader time out function 
const loaderTimeOut = () => { 
    setTimeout(() => {
        let mainContainer = document.getElementsByClassName("mainContainer")[0];
        mainContainer.style.display = "block";
        let loader = document.getElementsByClassName("loader-bg")[0];
        loader.style.display = "none";
    },
    1000);
}

loaderTimeOut();

    return(
        <BrowserRouter>
            <Loader/>
            <div className = "mainContainer">
                <Header/>   
                    <Routes/>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(<App/>,document.getElementById('root'));