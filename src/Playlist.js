import React, { useEffect, useMemo, useState } from 'react'
import Song from './Song'
import Podcast from './Podcast';
import './styles.css'


export default function Playlist() {
    const [shuffledSongs, setShuffledSongs] = useState([])
    const [shuffledPodcasts, setShuffledPodcasts] = useState([])

    //Songs Data and info
    const songData = useMemo(() => {
        //Just to show that data can be fetched and used - making it scalable if needed 
        const artistNames = ["Avicii"]
        return ([

            {
                songTitle: "My Way", artistName: "Frank Sinatra", year: 1969,
                songLink: "https://www.youtube.com/embed/qQzdAsjWGPg?si=8BlxHYxR0mXgbt4n",
                artistLink: "https://en.wikipedia.org/wiki/Frank_Sinatra"
            },
            {
                songTitle: "Just the way you are", artistName: "Burno Mars", year: 'Sep 8, 2010',
                songLink: "https://www.youtube.com/embed/LjhCEhWiKXk?si=takZmbk-0RbQEwdz",
                artistLink: "https://en.wikipedia.org/wiki/Bruno_Mars"
            },

            {
                songTitle: "Perfect", artistName: "Ed Sheeran", year: 'Nov 9, 2017',
                songLink: "https://www.youtube.com/embed/2Vv-BfVoq4g?si=VyOPgKfNitXRaKqT",
                artistLink: "https://en.wikipedia.org/wiki/Ed_Sheeran"
            },
            {
                songTitle: "Waiting for Love", artistName: artistNames[0], year: '2015',
                songLink: "https://www.youtube.com/embed/cHHLHGNpCSA?si=nR7vGe-j8q2UdceV",
                artistLink: "https://en.wikipedia.org/wiki/Avicii"
            }
        ]
        )
    }, [])

    //Podcasts Data and info
    const introductionEpisode = {
        season: 1,
        episodeNumber: 1,
        episodeName: "Introduction",
        episodeLink: "https://embed.music.apple.com/in/album/introduction/359236365?i=359236431"
    };

    const thomasMetzingerEpisode = {
        episodeNumber: 2,
        episodeName: "It Is Never Too Late",
        episodeLink: "https://embed.music.apple.com/in/album/it-is-never-too-late-come-to-our-youtube/1635241701?i=1635241702"
    };

    const problemOfConsciousnessEpisode = {
        season: 1,
        episodeNumber: 301,
        episodeName: "Tripping",
        episodeLink: "https://embed.music.apple.com/in/album/episode-301-tipping-feat-patton-oswalt/1050870322?i=1050870325"
    };


    const subjectiveConsciousnessEpisode = {
        episodeNumber: 4,
        episodeName: "Why is Consciousness Subjective",
        episodeLink: "https://embed.music.apple.com/in/album/why-is-consciousness-subjective/359236365?i=359236415"
    };

    // Combine individual episodes into an array
    const podcastData = useMemo(() => [
        introductionEpisode,
        thomasMetzingerEpisode,
        problemOfConsciousnessEpisode,
        subjectiveConsciousnessEpisode
    ], []);


    /*Logic used for shuffling*/
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    //To do the shuffle only when rendered - if not for this, the shuffling keeps on hapenning!!
    useEffect(() => {
        const shuffledSongs = shuffleArray(songData);
        const shuffledPodcasts = shuffleArray(podcastData);

        setShuffledSongs(shuffledSongs);
        setShuffledPodcasts(shuffledPodcasts);
    }, [songData, podcastData]);

    //Page Reloader - Shuffle
    const redloadHandle = () => {
        window.location.reload()
    }

    //Front-end - user can see this
    return (
        <div>
            <div>
                <h1>Musico - Songs & Podcasts</h1>
                <button onClick={redloadHandle} >Give it a Whirl</button>
            </div>

            <div>
                <h2>Songs for you</h2>
                <div className='songs_box'>
                    {shuffledSongs.map((song, index) => (
                        <Song key={index} {...song} />
                    )
                    )}
                </div>
            </div>
            <div className='podcast_section'>
                <h2>Shuffled Podcasts for you</h2>
                <div className='podcast_box'>
                    {shuffledPodcasts.map((podcast, index) => (
                        <Podcast key={index} {...podcast} />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}



