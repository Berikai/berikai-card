import React from 'preact/compat';

export default function About() {
    return (
        <div className="App-about-extra" style={"opacity: 0; transform: rotate(-90deg);transition: 0.1s, transform 0.1s;"}>
            <p className="title-about">About Me</p>
            <p className="text-about">
                My name is Berkay Eren Konuk, but I usually go by the names <b>Berikai</b> or <b>Verdant</b> online.
            </p>
            <p className="text-about">
                I'm a big fan of open source technologies and I love learning new things about software technologies. ...and "I use Arch, btw." 😄
            </p>
            <p className="text-about">
                I create dubstep and drum and bass oriented experimental music under the alias <b>Verdant</b>. You can check out my music on <a href="https://soundcloud.com/verdantbass" target="_blank" rel="noreferrer">Soundcloud</a>.
            </p>
            <p className="text-about">
                I'm currently studying mechatronics engineering (sophomore) in <i>Izmir University of Economics</i>.
            </p>
            <p className="text-about">
                Feel free to reach out to me if you want to chat or work together on something cool.
            </p>
        </div>
    )
}