import React, { useState, useLayoutEffect } from 'preact/compat';

const setDarkMode = (darkMode) => {
    const card = document.querySelector(".Card");
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

        if (localStorage.getItem("mode") === "dark") { 
            checkbox.checked = true;
            setDarkMode(true);
        }

        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                setDarkMode(true);
                localStorage.setItem("mode", "dark");
            } else {
                setDarkMode(false);
                localStorage.setItem("mode", "light");
            }
        });
    }, []);

    return (
        <div className="switch">
            <label id="switch" className="switch" style={`opacity: 0; transition: 0.4s;`}>
                <input id="mode_switch" type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}