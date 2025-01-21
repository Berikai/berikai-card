import React from 'preact/compat';

export default function Portfolio() {
    return (
        <div className="App-portfolio" style={"opacity: 0;transition: transform 0.1s;"}>
            <p className="title-about">Portfolio</p>
            <p className="text-about">
                Here, you can find some of my projects
            </p>
            <div className="portfolio">
                <div className="portfolio-element">
                    <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                    href="https://github.com/Berikai/bitwig-theme-editor"></a>
                    <img className="portfolio-img" width={68} src="https://cdn.discordapp.com/attachments/935545276008116276/1331268052716752896/image.png?ex=6790ff7d&is=678fadfd&hm=2feaee3fb40c09aa0e2bceb14b9fd58ead48fe9f0b8bc11667436b2729322335&"></img>
                    <div className="portfolio-element-content dark">
                        <div className="portfolio-element-title dark">Bitwig Theme Editor</div>
                        <div className="portfolio-element-info dark">A patcher for Bitwig Studio, let's you customize the appearance of the most modular DAW in the world!</div>
                    </div>
                </div>
                <div className="portfolio-element">
                    <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                    href="https://bitwig.berikai.dev"></a>
                    <div className="portfolio-element-content dark">
                        <div className="portfolio-element-title dark">Bitwig Theme Editor WebUI</div>
                        <div className="portfolio-element-info dark">Interactive visual playground to create and edit themes with ease and joy for Bitwig Studio</div>
                    </div>
                    <img className="portfolio-img" width={68} src="https://cdn.discordapp.com/attachments/935545276008116276/1331267497726316647/image.png?ex=6790fef9&is=678fad79&hm=fe4a49a3ae9a4563eb2a050e095a73bf51ac0d14812c3958e64973c736c3f5f7&"></img>
                </div>
                <div className="portfolio-element">
                    <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                    href="https://github.com/Berikai/data/tree/main/pixbud"
                    onClick={(e) => {
                        e.preventDefault();
                         if (window.confirm('This project is not finished and as of now it\'s closed source. You\'ll be redirected to a github page to download the Windows binaries of its prototype.\n\nWould you like to continue?')) {
                            window.open(e.target.href, '_blank');
                        }
                    }}></a>
                    <img className="portfolio-img" width={68} src="https://cdn.discordapp.com/attachments/935545276008116276/1331266107226456086/ezgif-2-6735a308d0.gif?ex=6790fdad&is=678fac2d&hm=3532848315807f625c44ab7912f6d942c7daf1028d53abe87b09e61c92ba1ef1&"></img>
                    <div className="portfolio-element-content dark">
                        <div className="portfolio-element-title dark">Pixbud</div>
                        <div className="portfolio-element-info dark">Your desktop buddy, loves to hang around on the rooftops of your application windows</div>
                    </div>
                </div>
                <div className="portfolio-element">
                    <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                    href="https://github.com/berikai/oasis-android"></a>
                    <div className="portfolio-element-content dark">
                        <div className="portfolio-element-title dark">OASIS Android</div>
                        <div className="portfolio-element-info dark">An unofficial mobile application for the student information system of Izmir University of Economics</div>
                    </div>
                    <img className="portfolio-img" width={68} src="https://cdn.discordapp.com/attachments/935545276008116276/1331268275077644370/image.png?ex=6790ffb2&is=678fae32&hm=4f1108b77f83c9e40fa3e1f4eb4f809585c2b7d1db8ddeeb4835a0798ba8d593&"></img>
                </div>
                <div className="portfolio-element">
                    <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                    href="https://github.com/berikai/wr2-server-connector"></a>
                    <img className="portfolio-img" width={68} src="https://user-images.githubusercontent.com/18515671/160943154-ebd29b37-19ec-4687-899a-24d555c46e7b.png"></img>
                    <div className="portfolio-element-content dark">
                        <div className="portfolio-element-title dark">WR2 Server Connector</div>
                        <div className="portfolio-element-info dark">A simple tool to play World Racing 2 online, since the official multiplayer tool is deprecated</div>
                    </div>
                </div>
                <div className="text-about" style="margin-top: -4px;">and many more, check my <a href="https://github.com/berikai" target="_blank" rel="noreferrer">Github</a>!</div>
                {/*}<div className="portfolio-element">
                    <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                    href="https://bitwig.berikai.dev"></a>
                    <img className="portfolio-img" width={68} src="https://i.scdn.co/image/ab67616d0000b273d1f003772a6b26d57294587b"></img>
                    <div className="portfolio-element-content dark">
                        <div className="portfolio-element-title dark">Project Title</div>
                        <div className="portfolio-element-info dark">Information about the project, and it's getting longer and longer. I really mean it, though.</div>
                    </div>
                </div>{*/}
            </div>
        </div>
    )
}