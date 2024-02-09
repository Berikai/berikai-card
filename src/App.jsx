import React from 'preact/compat';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="App">
            <div className="Card">
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}