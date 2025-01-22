import { hideAboutPage, aboutPageState } from "./AboutPage.js";
import { Card3D, DisableCard3D } from "./Card3D.js";

export const portfolioPageState = {
    show: false,
    card3D: false,
    onAbout: false
}

export const showPortfolioPage = (delay, rotate) => {
    const card = document.querySelector(".Card");
    const appAbout = document.querySelector(".App-about");
    const appHeader = document.querySelector(".App-header");
    const footer = document.querySelector(".App-footer");
    const appPortfolio = document.querySelector(".App-portfolio");
    const portfolioNav = document.getElementById("portfolio-nav");
    const pp = document.querySelector(".pp_logo");

    pp.style.transition = 'none';

    if (delay) {
        setTimeout(() => {
            appPortfolio.style.opacity = "1";
            appPortfolio.style.display = "flex";
        
            portfolioNav.style.backgroundColor = "#FF000099";
            portfolioNav.style.color = "#EEE";
            portfolioNav.children[0].textContent = "Back";

            portfolioNav.onmouseover = () => {
                portfolioNav.style.backgroundColor = "#FF0000DD";
                portfolioNav.style.color = "#FFF";
            };
        
            portfolioNav.onmouseout = () => {
                portfolioNav.style.backgroundColor = "#FF000099";
                portfolioNav.style.color = "#EEE";
            };
        
            appAbout.style.display = "none";
            appHeader.style.opacity = "0";
            appHeader.style.position = "absolute";
            footer.style.display = "none";
            pp.style.pointerEvents = "none";
        }, 250);
    } else {
        appPortfolio.style.opacity = "1";
        appPortfolio.style.display = "flex";

        portfolioNav.style.backgroundColor = "#FF000099";
        portfolioNav.style.color = "#EEE";
        portfolioNav.children[0].textContent = "Back";

        portfolioNav.onmouseover = () => {
            portfolioNav.style.backgroundColor = "#FF0000DD";
            portfolioNav.style.color = "#FFF";
        };
    
        portfolioNav.onmouseout = () => {
            portfolioNav.style.backgroundColor = "#FF000099";
            portfolioNav.style.color = "#EEE";
        };
    
        appAbout.style.display = "none";
        appHeader.style.opacity = "0";
        appHeader.style.position = "absolute";
        footer.style.display = "none";
        pp.style.pointerEvents = "none";
    }

    if(rotate) {
        if(portfolioPageState.onAbout) {
            card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease";
            card.style.transform = "rotateX(0deg)";
            portfolioPageState.onAbout = false;
        } else {
            card.style.transitionProperty = 'none';
            card.style.transform = "rotateX(360deg)";
            setTimeout(() => {
                card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease";
                card.style.transform = "rotateX(0deg)";
                if(portfolioPageState.card3D) {
                    DisableCard3D();
                    setTimeout(() => {
                        Card3D();
                    }, 450);
                }
            }, 50);
        }
    }
}

export const hidePortfolioPage = (delay, rotate) => {
    const card = document.querySelector(".Card");
    const appAbout = document.querySelector(".App-about");
    const appHeader = document.querySelector(".App-header");
    const footer = document.querySelector(".App-footer");
    const appPortfolio = document.querySelector(".App-portfolio");
    const portfolioNav = document.getElementById("portfolio-nav");
    const pp = document.querySelector(".pp_logo");

    if(rotate) {
        pp.style.transition = 'ease 0.2s';
    }

    if (delay) {
        setTimeout(() => {
            appPortfolio.style.opacity = "0";
            appPortfolio.style.display = "none";
        
            portfolioNav.style.backgroundColor = "#00000008";
            portfolioNav.style.color = "rgb(0, 0,0, 0.2)";
            portfolioNav.children[0].textContent = "Portfolio";

            portfolioNav.onmouseover = () => {
                portfolioNav.style.backgroundColor = "#0000000D";
                portfolioNav.style.color = "rgb(0, 0,0, 0.6)";
            };
        
            portfolioNav.onmouseout = () => {
                portfolioNav.style.backgroundColor = "#00000008";
                portfolioNav.style.color = "rgb(0, 0,0, 0.2)";
            };
        
            appAbout.style.display = "block";
            appHeader.style.opacity = "1";
            appHeader.style.position = "static";
            footer.style.display = "flex";
            pp.style.pointerEvents = "all";
        }, 250);
    } else {
        appPortfolio.style.opacity = "0";
        appPortfolio.style.display = "none";
    
        portfolioNav.style.backgroundColor = "#00000008";
        portfolioNav.style.color = "rgb(0, 0,0, 0.2)";
        portfolioNav.children[0].textContent = "Portfolio";

        portfolioNav.onmouseover = () => {
            portfolioNav.style.backgroundColor = "#0000000D";
            portfolioNav.style.color = "rgb(0, 0,0, 0.6)";
        };
        
        portfolioNav.onmouseout = () => {
            portfolioNav.style.backgroundColor = "#00000008";
            portfolioNav.style.color = "rgb(0, 0,0, 0.2)";
        };
    
        appAbout.style.display = "block";
        appHeader.style.opacity = "1";
        appHeader.style.position = "static";
        footer.style.display = "flex";
        pp.style.pointerEvents = "all";
    }

    if(rotate) {
        if(portfolioPageState.onAbout) {
            card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease";
            card.style.transform = "rotateX(0deg)";
            portfolioPageState.onAbout = false;
        } else {
            card.style.transitionProperty = 'none';
            card.style.transform = "rotateX(360deg)";
            setTimeout(() => {
                card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease";
                card.style.transform = "rotateX(0deg)";
                if(portfolioPageState.card3D) {
                    DisableCard3D();
                    setTimeout(() => {
                        Card3D();
                    }, 450);
                }
            }, 50);
        }
    }
}

export const PortfolioPage = () => {
    let willBeDelayed = true;

    if(aboutPageState.show) {
        portfolioPageState.onAbout = true;
        aboutPageState.show = false;
        willBeDelayed = false;
        hideAboutPage();
    }

    portfolioPageState.show = !portfolioPageState.show;
    if(portfolioPageState.show) {
        showPortfolioPage(willBeDelayed, true);
    } else {
        hidePortfolioPage(willBeDelayed, true);
    }
}