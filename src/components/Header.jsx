import React, { useLayoutEffect } from 'preact/compat';
import { callbacks, Card3D, DisableCard3D } from '../scripts/Card3D';

export default function Header() {
    const [mode3D, setMode3D] = React.useState(false);

    
    useLayoutEffect(() => {
        if(localStorage.getItem("mode3D") === "true") {
            setMode3D(true);
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
                alt="Berikai" />
            </a></p>
            <div className="username">Berikai<div className="aka">also known as Verdant</div></div>
        </header>
    )
}