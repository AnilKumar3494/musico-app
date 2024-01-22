import React, { useEffect, useState } from 'react'
import Song from './Song'
import Podcast from './Podcast';


export default function Playlist() {


    //Songs Data and info
    const songData = [
        { songTitle: "My Way", artistName: "Frank Sinatra", year: 2022 },
        { songTitle: "Just the way you are", artistName: "Burno Mars", year: 2023 },
        { songTitle: "Perfect", artistName: "Ed Sheeran", year: 2023 },
    ]

    //Podcasts Data and info
    const podcastData = [

        { season: 1, episodeNumber: 1, episodeName: "The One Where It All Began" },
        { episodeNumber: 2, episodeName: "The One With Sonogram at the End" },
        { episodeNumber: 3, episodeName: "The One With the Thumb" }

    ]
    return (
        <>
            <h1>Playlist</h1>
            <div>
                <h2>Shuffled Songs Playlist for you</h2>
                {songData.map((song, index) => (
                    <Song key={index} {...song} />
                )
                )}
            </div>
            <div>
                <h2>Shuffled Podcasts for you</h2>
                {podcastData.map((podcast, index) => (
                    <Podcast key={index} {...podcast} />
                )
                )}
            </div>
        </>
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

{/* <>
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
</> */}