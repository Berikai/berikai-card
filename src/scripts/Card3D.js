import { portfolioPageState } from "./PortfolioPage";

export const cardStyle = {
    rotation: 0
}

const showSwitch = (switchbox, slider) => (e) => {
    const angleX = (window.innerWidth / 2 - e.pageX) / 10;
    const angleY = (window.innerHeight / 2 - e.pageY) / 20;

    slider.style.cursor = "pointer";

    if (cardStyle.rotation == 0 ? (angleX > 0 && angleY > 0) : (angleX > 0 && angleY < 0)) {
        switchbox.style.opacity = "1";
    } else { 
        switchbox.style.opacity = "0";
    }
}

const hideSwitch = (switchbox) => () => {
    switchbox.style.opacity = "0";
}

export const cardFollowCursor3D = (card) => (e) => {
    const angleX = (window.innerWidth / 2 - e.pageX) / 10;
    const angleY = (window.innerHeight / 2 - e.pageY) / 20;
    const angleZ = cardStyle.rotation;
    
    card.style.transition = `transform 0.1s ease, box-shadow 0.1s ease, border-radius 0.5s ease`
    card.style.transform = `rotateZ(${angleZ}deg) rotateY(${angleZ == 0 ? angleX : angleY * -1}deg) rotateX(${(angleZ == 0 ? angleY * -1 : angleX * -1)}deg)`;
    card.style.boxShadow = `${angleZ == 0 ? angleX * -1 : angleY}px ${angleZ == 0 ? angleY * -1 : angleX * -1}px 30px rgba(0, 0, 0, 0.4) `;
}

const cardResetState3D = (card, switchbox) => () => {
    switchbox.style.opacity = "0";
    
    card.style.transition = `transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease`;
    card.style.transform = `rotateZ(${cardStyle.rotation}deg) rotateY(0deg) rotateX(0deg)`;
    card.style.boxShadow = `0px 0px 15px rgba(0, 0, 0, 0.4)`;
}

export const callbacks = {
    showSwitch: null,
    hideSwitch: null,
    cardFollowCursor3D: null,
    cardResetState3D: null
};

export const SwitchListener = () => {
    const card = document.getElementById("Card");
    const switchbox = document.getElementById("switch");
    const slider = document.querySelector(".slider");

    callbacks.showSwitch = showSwitch(switchbox, slider);
    callbacks.hideSwitch = hideSwitch(switchbox);

    card.addEventListener("mousemove", callbacks.showSwitch, false);
    card.addEventListener("mouseout", callbacks.hideSwitch, false);
}

export const Card3D = () => {
    const card = document.getElementById("Card");
    const switchbox = document.getElementById("switch");

    callbacks.cardFollowCursor3D = cardFollowCursor3D(card);
    callbacks.cardResetState3D = cardResetState3D(card, switchbox);

    card.addEventListener("mousemove", callbacks.cardFollowCursor3D, false);
    card.addEventListener("mouseout", callbacks.cardResetState3D, false);

    portfolioPageState.card3D = true;
}

export const DisableCard3D = () => {
    const card = document.getElementById("Card");

    card.removeEventListener("mousemove", callbacks.cardFollowCursor3D, false);
    card.removeEventListener("mouseout", callbacks.cardResetState3D, false);

    callbacks.cardResetState3D();

    portfolioPageState.card3D = false;
}