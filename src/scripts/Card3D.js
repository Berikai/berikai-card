const cardFollowCursor3D = (card, switchbox, slider) => (e) => {
    const angleX = (window.innerWidth / 2 - e.pageX) / 10;
    const angleY = (window.innerHeight / 2 - e.pageY) / 20;
    const angleZ = 0;

    slider.style.cursor = "pointer";

    if (angleX > 0 && angleY > 0) 
        switchbox.style.opacity = "1";
    else 
        switchbox.style.opacity = "0";
    
    
    card.style.transition = `transform 0.1s ease, box-shadow 0.1s ease, border-radius 0.5s ease`
    card.style.transform = `rotateZ(${angleZ}deg) rotateY(${angleX}deg) rotateX(${angleY * -1}deg)`;
    card.style.boxShadow = `${angleX * -1}px ${angleY * -1}px 30px rgba(0, 0, 0, 0.4) `;
}

const cardResetState3D = (card, switchbox) => (e) => {
    switchbox.style.opacity = "0";
    
    card.style.transition = `transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease`;
    card.style.transform = `rotateZ(0deg) rotateY(0deg) rotateX(0deg)`;
    card.style.boxShadow = `0px 0px 15px rgba(0, 0, 0, 0.4)`;
}

export const Card3D = () => {
    const card = document.querySelector(".Card");
    const switchbox = document.getElementById("switch");
    const slider = document.querySelector(".slider");

    card.addEventListener("mousemove", cardFollowCursor3D(card, switchbox, slider), false);
    card.addEventListener("mouseout", cardResetState3D(card, switchbox), false);
}