import React, { useLayoutEffect } from 'preact/compat';
import { callbacks, Card3D, DisableCard3D } from '../scripts/Card3D';

export default function Header() {
    const [mode3D, setMode3D] = React.useState(false);

    
    useLayoutEffect(() => {
        const pp = document.getElementById("pp");
        const ppLogo = document.querySelector(".pp_logo");
        const text3d = document.querySelector(".threeD-info");
        pp.addEventListener("mouseleave" , () => {
            text3d.style.opacity = "0";
            text3d.style.scale = "1.0";
        });

        pp.addEventListener("mouseenter" , () => {
            ppLogo.style.transition = 'ease 0.2s';
            text3d.style.opacity = "1";
            text3d.style.scale = "1.05";
        });

        pp.addEventListener("mousedown" , (e) => {
            text3d.style.opacity = "1";
            text3d.style.scale = "1.1";
            text3d.style.display = "none";
        });

        pp.addEventListener("mouseup" , (e) => {
            text3d.style.opacity = "1";
            text3d.style.scale = "1.05";
        });

        if(localStorage.getItem("mode3D") === "true") {
            setMode3D(true);
            text3d.style.display = "none";
            setTimeout(() => {
                Card3D();
                document.getElementById("pp").style.pointerEvents = "auto";
            }, 2000);
        } else {
            setMode3D(false);
            setTimeout(() => {
                document.getElementById("pp").style.pointerEvents = "auto";
            }, 2000);
        }
    }, []);

    return (
        <header style="pointer-events: none;" className="App-header">
            <p><a id="pp" onMouseDown={(e) => mode3D ? (setMode3D(false), DisableCard3D(), localStorage.setItem("mode3D", "false")) : (setMode3D(true), Card3D(), callbacks.cardFollowCursor3D(e), localStorage.setItem("mode3D", "true"))}>
            <img
                className="pp_logo" 
                src="https://avatars.githubusercontent.com/u/18515671?v=4" 
                alt="Berikai" 
                onLoad={() => {
                    document.querySelector(".App").style.opacity = 1;
                    document.querySelector(".Card").style.animation = "CardFrame 2s ease-in-out";
                    document.querySelector(".pp_logo").style.animation = "ProfileFrame 2s ease-in-out";
                }}    
                />
                <p className="threeD-info">Tap to switch 3D</p>
            </a></p>
            <div className="username">Berikai<div className="aka">also known as Verdant</div></div>
        </header>
    )
}