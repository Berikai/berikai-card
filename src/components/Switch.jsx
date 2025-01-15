import React, { useLayoutEffect } from 'preact/compat';

const setDarkMode = (darkMode) => {
    const card = document.getElementById("Card");
    const darks = document.querySelectorAll(".dark");

    if (darkMode) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        card.style.backgroundColor = "#222";
        
        for(let dark of darks) {
            dark.style.filter = "invert(1)";
        }
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        card.style.backgroundColor = "#fff";

        for(let dark of darks) {
            dark.style.filter = "invert(0)";
        }
    }
}

export default function Switch() {
    useLayoutEffect(() => {
        const checkbox = document.getElementById("mode_switch");

        if (localStorage.getItem("themeMode") === "dark") { 
            checkbox.checked = true;
            setDarkMode(true);
        }

        setTimeout(() => {
            checkbox.addEventListener("change", (e) => {
                if (e.target.checked) {
                    localStorage.setItem("themeMode", "dark");
                    setDarkMode(true);
                } else {
                    localStorage.setItem("themeMode", "light");
                    setDarkMode(false);
                }
            });
        }, 2000);
    }, []);

    return (
        <div className="switch">
            <label id="switch" className="switch" style={`opacity: 0; transition: 0.4s, transform 0.2s;`}>
                <input id="mode_switch" type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}