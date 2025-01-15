import React, { useLayoutEffect } from 'preact/compat';
import { cardStyle } from '../scripts/Card3D';

export default function NavButton({ id = null, text, rotation, action = () => {}, href = null}) {
    return (
        <a {...(id ? {id} : {})} className="nav-button dark" onClick={action} {...(href ? {href} : {})}>
            <span className={rotation == "rl" ? "rotate-clockwise" : "rotate-counterclockwise"}>{text}</span>
        </a>
    )
}
