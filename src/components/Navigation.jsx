import React from 'preact/compat';
import NavButton from './NavButton';
import { AboutPage } from '../scripts/AboutPage';
import { showModal } from './Modal';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-half1">
                <NavButton id={"about-nav"} text={"About"} rotation={"rl"} action={() => AboutPage()}/>
                <NavButton text={"Blog"} rotation={"rl"} action={() => showModal()}/>
            </div>
            <div className="navbar-half2">
                <NavButton text={"Console"} rotation={"lr"} href={"https://console.berikai.dev"}/>
                <NavButton text={"Portfolio"} rotation={"lr"} action={() => showModal()}/>
            </div>
        </nav>
    )
}
