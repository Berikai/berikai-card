import React, { useState, useLayoutEffect } from 'preact/compat';

export default function Spotify() {
    let _currentSong = {};
    const [currentSong, setCurrentSong] = useState({});
    const [progressMs, setProgressMs] = useState(0);

    let counterMs = [];

    const fetchCurrentSong = () => {
        const spotify = document.querySelector('.spotify');
        const spotify_panel = document.querySelector('.spotify-panel');
        const spotify_container = document.querySelector('.spotify-container');

        fetch('https://api.berikai.dev/spotify/current')
        .then((res) => res.json())
        .then((data) => {
            if(data.error == "Not authenticated" || data.error == "No track playing") {
                spotify_container.style.opacity = 0;
                spotify.style.opacity = 0;
                spotify.style.pointerEvents = 'none';
                return;
            }

            spotify_container.style.opacity = 1;
            spotify.style.opacity = 1;
            spotify.style.pointerEvents = 'all';

            counterMs.forEach(removeMs => clearInterval(removeMs));
            
            _currentSong = data;
            setCurrentSong(data);
            if (spotify_panel.style.opacity == 1) {
                spotify.getElementsByTagName('a')[0].href = _currentSong.item?.external_urls.spotify;
            } else {
                spotify.getElementsByTagName('a')[0].removeAttribute('href');
            }
            setProgressMs(data.progress_ms);
            
            const newCounterMs = setInterval(() => {
                setProgressMs((prevProgressMs) => {
                    const newProgressMs = prevProgressMs + 1000;
                    if (newProgressMs >= data.item?.duration_ms) {
                        counterMs.forEach(removeMs => clearInterval(removeMs));
                        fetchCurrentSong();
                        console.log('Song ended, fetching new song...');
                    }
                    return newProgressMs;
                });
            }, 1000);

            counterMs.push(newCounterMs);
        });
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            const spotify = document.querySelector('.spotify');
            const spotify_panel = document.querySelector('.spotify-panel');
            const spotify_container = document.querySelector('.spotify-container');

            fetchCurrentSong();

            const generalInterval = setInterval(() => {
                console.log('Fetching current playing song...');
                fetchCurrentSong();
            }, 20000);

            spotify.addEventListener('mousemove', () => {
                spotify_panel.style.opacity = 1;
                setTimeout(() => {
                    spotify.getElementsByTagName('a')[0].href = _currentSong.item?.external_urls.spotify;
                }, 200);
            });

            spotify_container.addEventListener('mouseleave', () => {
                spotify_panel.style.opacity = 0;
                setTimeout(() => {
                    spotify.getElementsByTagName('a')[0].removeAttribute('href');
                }, 200);
            });

            spotify_container.style.opacity = 1;

        }, 2000);
    }, []);

    return (
        <div className="spotify-container" style="opacity: 0;">
            <div className="spotify-panel">
                <div className="spotify-panel-content dark">
                    <img className="spotify-artwork dark" src={currentSong.item?.album.images[2].url} width="33"></img>
                    <div className="spotify-info dark">
                        <div className="text-spotify" style="display:flex;justify-content:space-between;font-size: 8px;">
                            <span>I'm currently listening</span>
                            <span>
                            {Math.floor(progressMs / 60000)}:{Math.floor((progressMs % 60000) / 1000).toFixed(0).padStart(2, '0')} / {Math.floor(currentSong.item?.duration_ms / 60000)}:{Math.floor((currentSong.item?.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="text-spotify"><b>{currentSong.item?.artists.length < 4 ? currentSong.item?.artists.map(artist => artist.name).join(', ') : currentSong.item?.artists[0].name} - {currentSong.item?.name}</b></div>
                    </div>
                </div>
            </div>
            <div className="spotify" style="opacity: 0;">
                <a target="_blank" rel="noreferrer"><img id="spotify-img" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" width="24"></img></a>
            </div>
        </div>
    )
}