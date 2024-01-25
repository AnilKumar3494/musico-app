import React, { useEffect, useMemo, useState } from 'react'
import Song from './Song'
import Podcast from './Podcast';
import './styles.css'


export default function Playlist() {
    const [shuffledSongs, setShuffledSongs] = useState([])
    const [shuffledPodcasts, setShuffledPodcasts] = useState([])

    //Songs Data and info
    const songData = useMemo(() => {
        //Just to show that data can be fetched and used - scalable 
        const artistNames = ["Avicii"]
        return ([
            {
                songTitle: "My Way", artistName: "Frank Sinatra", year: 1969,
                songLink: "https://www.youtube.com/watch?v=qQzdAsjWGPg&pp=ygUFbXl3YXk%3D",
                artistLink: "https://en.wikipedia.org/wiki/Frank_Sinatra"
            },
            {
                songTitle: "Just the way you are", artistName: "Burno Mars", year: 'Sep 8, 2010',
                songLink: "https://www.youtube.com/watch?v=LjhCEhWiKXk&pp=ygUUanVzdCB0aGUgd2F5IHlvdSBhcmU%3D",
                artistLink: "https://en.wikipedia.org/wiki/Bruno_Mars"
            },
            {
                songTitle: "Perfect", artistName: "Ed Sheeran", year: 'Nov 9, 2017',
                songLink: "https://www.youtube.com/watch?v=2Vv-BfVoq4g&pp=ygUTcGVyZmVjdCBlZCBzaGVlcmFuIA%3D%3D",
                artistLink: "https://en.wikipedia.org/wiki/Ed_Sheeran"
            },
            {
                songTitle: "Waiting for Love", artistName: artistNames[0], year: '2015',
                songLink: "https://music.apple.com/in/album/waiting-for-love/1440834059?i=1440834312",
                artistLink: "https://en.wikipedia.org/wiki/Avicii"
            },
        ])
    }, []
    )

    //Podcasts Data and info
    const podcastData = useMemo(() => [

        { season: 1, episodeNumber: 1, episodeName: "The One Where It All Began" },
        { episodeNumber: 2, episodeName: "The One With Sonogram at the End" },
        { episodeNumber: 3, episodeName: "The One With the Thumb" },
        { episodeNumber: 4, episodeName: "The One With Geroge Stephanopoulos" },


    ], [])

    // const shuffleArray = (array) => {
    //     const shuffledArray = [...array]

    //     for (let i = shuffledArray.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1))
    //         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    //     }

    //     return shuffledArray
    // }

    // useEffect(() => {
    //     const shuffledSongs = shuffleArray(songData)
    //     const shuffledPodcasts = shuffleArray(podcastData)

    //     setShuffledSongs(shuffledSongs)
    //     setShuffledPodcasts(shuffledPodcasts)
    // }, [songData, podcastData])


    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    useEffect(() => {
        const shuffledSongs = shuffleArray(songData);
        const shuffledPodcasts = shuffleArray(podcastData);

        setShuffledSongs(shuffledSongs);
        setShuffledPodcasts(shuffledPodcasts);
    }, [songData, podcastData]);

    //Front-end
    return (
        <div>
            <h1>Songs & Podcasts</h1>
            <div>
                <h2>Shuffled Songs Playlist for you</h2>
                {shuffledSongs.map((song, index) => (
                    <Song key={index} {...song} />
                )
                )}
            </div>
            <div>
                <h2>Shuffled Podcasts for you</h2>
                {shuffledPodcasts.map((podcast, index) => (
                    <Podcast key={index} {...podcast} />
                )
                )}
            </div>
        </div>
    )
}




// const [playlist, setPlaylist] = useState([])

// useEffect(() => {

//     //Songs Data and info
//     const songData = [
//         { songTitle: "My Way", artistName: "Frank Sinatra", year: 2022 },
//         { songTitle: "Just the way you are", artistName: "Burno Mars", year: 2023 },
//         { songTitle: "perfect", artistName: "Ed Sheeran", year: 2023 },
//     ]

//     //Podcasts Data and info
//     const podcastData = [
//         {
//             episodeNumber: 2, episodeName: "The One With Sonogram at the End",
//             episodeNumber: 1, episodeName: "The One Where It ALl Began",
//             episodeNumber: 3, episodeName: "The One With the Thumb",
//         }
//     ]

//     const combinedPlaylist = [...songData, ...podcastData];
//     const shuffledPlaylist = shuffleArray(combinedPlaylist);

//     setPlaylist(shuffledPlaylist);
// }, []);

// // Function to shuffle the array
// const shuffleArray = (array) => {
//     const shuffledArray = [...array];
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
// };

/* <>
<h1>Playlist</h1>
<div>
    <h2>Shuffled Playlist for you</h2>
    {playlist.map((item, index) => (
        <div key={index}>
            {item.hasOwnProperty('title') ? (
                <Song title={item.title} artistName={item.artistName} year={item.year} />) : (<Podcast
                    season={item.season}
                    episodeNumber={item.episodeNumber}
                    episodeName={item.episodeName}
                />)
            }
        </div>
    ))}
</div>
</> */