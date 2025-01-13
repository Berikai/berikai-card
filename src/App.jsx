import React, { useLayoutEffect } from 'preact/compat';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { Card3D } from './scripts/Card3D';
import Switch from './components/Switch';

export default function App() {

    useLayoutEffect(() => {
        setTimeout(() => {
            Card3D();
        }, 2000);
    }, []);
    
    return (
        <div className="App">
            <div id={"Card"} className="Card">
                <Switch />
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}