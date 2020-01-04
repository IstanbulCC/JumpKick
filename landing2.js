"use strict";

const doc = document.documentElement;
const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('nav');
const navItems = document.getElementsByClassName('navItem');
const navLogo = document.getElementById('logo');
var screenWidth = window.screen.width;

let scrolled = () =>{

    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 10);
}

addEventListener('scroll', () =>{
    myNav.style.backgroundColor = "white";
    
        for(var i = 0; i < navItems.length; i++){
            navItems[i].style.color = "#676767";
        }

    navLogo.style.color = "#2c3038";

    //if it goes back up
    var scrollPosition = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    if(scrollPosition == 0){
        myNav.style.backgroundColor = "transparent";

            for(var i = 0; i < navItems.length; i++){
                navItems[i].style.color = "#9c9c9c";
            }

        navLogo.style.color = "white";
    }
})

