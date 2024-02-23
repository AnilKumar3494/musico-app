import React, { useEffect, useMemo, useState } from 'react';
import Song from './Song';
import Podcast from './Podcast';
import './styles.css';

export default function Playlist() {
    const [shuffledSongs, setShuffledSongs] = useState([]);
    const [shuffledPodcasts, setShuffledPodcasts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/songData') // Assuming your songs data is served from this endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Shuffle the songs
                const shuffledSongs = shuffleArray(data);
                setShuffledSongs(shuffledSongs);
            })
            .catch(error => {
                console.error('There was a problem with fetching songs:', error);
            });

        fetch('http://localhost:4000/podcastData') // Assuming your podcasts data is served from this endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Shuffle the podcasts
                const shuffledPodcasts = shuffleArray(data);
                setShuffledPodcasts(shuffledPodcasts);
            })
            .catch(error => {
                console.error('There was a problem with fetching podcasts:', error);
            });
    }, []);

    // Logic used for shuffling
    const shuffleArray = array => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    // Page Reloader - Shuffle
    const redloadHandle = () => {
        window.location.reload();
    };

    // Front-end - user can see this
    return (

        <div>
            <div>
                <h1>Musico - Songs & Podcasts</h1>
                <button onClick={redloadHandle}>Give it a Whirl</button>
            </div>

            <div>
                <h2>Songs for you</h2>
                <div className="songs_box">
                    {shuffledSongs.map((song, index) => (
                        <Song key={index} {...song} />
                    ))}
                </div>
            </div>
            <div className="podcast_section">
                <h2>Shuffled Podcasts for you</h2>
                <div className="podcast_box">
                    {shuffledPodcasts.map((podcast, index) => (
                        <Podcast key={index} {...podcast} />
                    ))}
                </div>
            </div>
        </div>
    );
}
