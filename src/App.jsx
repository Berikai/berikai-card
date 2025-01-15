import React, { useLayoutEffect } from 'preact/compat';

import { Card3D, SwitchListener } from './scripts/Card3D';

import Header from './components/Header';
import About from './components/About';
import AboutExtra from './components/AboutExtra';
import Footer from './components/Footer';
import Switch from './components/Switch';
import Navbar from './components/Navigation';
import Modal from './components/Modal';

export default function App() {

    useLayoutEffect(() => {
        setTimeout(() => {
            //Card3D();
            SwitchListener();
        }, 2000);
    }, []);
    
    return (
        <div className="App">
        <Modal />
            <div id={"Card"} className="Card">
                <Switch />
                <Navbar />
                <Header />
                <About />
                <AboutExtra />
                <Footer />
            </div>
        </div>
    )
}