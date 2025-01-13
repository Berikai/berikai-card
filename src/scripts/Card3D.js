const cardFollowCursor3D = (box) => (e) => {
    const angleX = (window.innerWidth / 2 - e.pageX) / 10;
    const angleY = (window.innerHeight / 2 - e.pageY) / 20;
    const angleZ = 0;
    
    box.style.transition = `transform 0.1s ease, box-shadow 0.1s ease, border-radius 0.5s ease`
    box.style.transform = `rotateZ(${angleZ}deg) rotateY(${angleX}deg) rotateX(${angleY * -1}deg)`;
    box.style.boxShadow = `${angleX}px ${angleY}px 30px #8b8b8b `;
}

const cardResetState3D = (box) => (e) => {
    box.style.transition = `transform 1s ease, box-shadow 1s ease, border-radius 0.5s ease`;
    box.style.transform = `rotateZ(0deg) rotateY(0deg) rotateX(0deg)`;
    box.style.boxShadow = `0px 0px 15px #8b8b8b `;
}

export const Card3D = () => {
    const box = document.querySelector(".Card");

    box.addEventListener("mousemove", cardFollowCursor3D(box), false);
    box.addEventListener("mouseout", cardResetState3D(box), false);
}