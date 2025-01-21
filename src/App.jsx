import React, { useLayoutEffect } from 'preact/compat';

import { Card3D, SwitchListener } from './scripts/Card3D';

import Header from './components/Header';
import About from './components/About';
import AboutExtra from './components/AboutExtra';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Switch from './components/Switch';
import Navbar from './components/Navigation';
import Modal from './components/Modal';
import Spotify from './components/Spotify';

export default function App() {

    useLayoutEffect(() => {
        setTimeout(() => {
            //Card3D();
            SwitchListener();
        }, 2000);
    }, []);
    
    return (
        <div className="App" style="opacity: 0; transition: opacity 0.2s;">
        <Modal />
            <div className="App-scale">
                <div id={"Card"} className="Card">
                    <Switch />
                    <Navbar />
                    <Portfolio />
                    <Header />
                    <About />
                    <AboutExtra />
                    <Footer />
                    <Spotify />
                </div>
            </div>
        </div>
    )
}