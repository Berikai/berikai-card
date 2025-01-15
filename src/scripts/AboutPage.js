import { cardStyle } from './Card3D.js';

const aboutPageState = {
    show: false
}

const showAboutPage = () => {
    const card = document.getElementById("Card");
    const pp = document.querySelector(".pp_logo"); 
    const switchbox = document.getElementById("switch");
    const aboutNav = document.getElementById("about-nav");
    const username = document.querySelector(".username");
    const appAbout = document.querySelector(".App-about");
    const appFooter = document.querySelector(".App-footer");
    const appAboutExtra = document.querySelector(".App-about-extra");

    const upperButtons = document.querySelectorAll(".rotate-counterclockwise");

    cardStyle.rotation = -90;

    card.style.transform = "rotateZ(-90deg)";
    pp.style.borderRadius = "70px 15px 70px 15px";
    pp.style.transform = "rotateZ(90deg)";
    switchbox.style.transform = "rotateZ(90deg)";

    aboutNav.style.backgroundColor = "#FF000099";
    aboutNav.style.color = "#EEE";
    aboutNav.children[0].textContent = "Back";

    aboutNav.onmouseover = () => {
        aboutNav.style.backgroundColor = "#FF0000DD";
        aboutNav.style.color = "#FFF";
    };

    aboutNav.onmouseout = () => {
        aboutNav.style.backgroundColor = "#FF000099";
        aboutNav.style.color = "#EEE";
    };

    for(let button of upperButtons) {
        button.classList.remove("rotate-counterclockwise");
        button.classList.add("rotate-clockwise");
        button.classList.add("rotated-about");
    }

    username.style.opacity = "0";
    appAbout.style.opacity = "0";
    appAbout.style.pointerEvents = "none";
    appFooter.style.opacity = "0";
    appAboutExtra.style.opacity = "1";
    appAboutExtra.style.transform = "rotate(0deg)";
}

const hideAboutPage = () => {
    const card = document.getElementById("Card");
    const pp = document.querySelector(".pp_logo"); 
    const switchbox = document.getElementById("switch");
    const aboutNav = document.getElementById("about-nav");
    const username = document.querySelector(".username");
    const appAbout = document.querySelector(".App-about");
    const appFooter = document.querySelector(".App-footer");
    const appAboutExtra = document.querySelector(".App-about-extra");

    const upperButtons = document.querySelectorAll(".rotated-about");

    cardStyle.rotation = 0;

    card.style.transform = "rotateZ(0deg)";
    pp.style.borderRadius = "15px 70px 15px 70px";
    pp.style.transform = "rotateZ(0deg)";
    switchbox.style.transform = "rotateZ(0deg)";

    aboutNav.style.backgroundColor = "#00000008";
    aboutNav.style.color = "rgb(0, 0,0, 0.2)";
    aboutNav.children[0].textContent = "About";

    aboutNav.onmouseover = () => {
        aboutNav.style.backgroundColor = "#0000000D";
        aboutNav.style.color = "rgb(0, 0,0, 0.6)";
    };

    aboutNav.onmouseout = () => {
        aboutNav.style.backgroundColor = "#00000008";
        aboutNav.style.color = "rgb(0, 0,0, 0.2)";
    };

    for(let button of upperButtons) {
        button.classList.remove("rotated-about");
        button.classList.remove("rotate-clockwise");
        button.classList.add("rotate-counterclockwise");
    }

    username.style.opacity = "1";
    appAbout.style.opacity = "1";
    appAbout.style.pointerEvents = "all";
    appFooter.style.opacity = "1";
    appAboutExtra.style.opacity = "0";
    appAboutExtra.style.transform = "rotate(-90deg)";
}

export const AboutPage = () => {
    aboutPageState.show = !aboutPageState.show;
    if(aboutPageState.show) {
        showAboutPage();
    } else {
        hideAboutPage();
    }
}