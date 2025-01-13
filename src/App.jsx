import React, { useLayoutEffect } from 'preact/compat';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { Card3D } from './scripts/Card3D';

export default function App() {

    useLayoutEffect(() => {
        Card3D();
    }, []);
    
    return (
        <div className="App">
            <div id={"Card"} className="Card">
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}