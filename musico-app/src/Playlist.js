import React from 'react'
import Song from './Song'

export default function Playlist() {
    const songData = [
        { songTitle: "My Way", artistName: "Frank Sinatra", year: 2022 },
        { songTitle: "Just the way you are", artistName: "Burno Mars", year: 2023 },
    ]
    return (
        <>
            <h1>Playlist</h1>
            <h2>Song Just for you</h2>
            {songData.map((songInfo, index) => {
                return <Song key={index} {...songInfo} />
            })}
        </>

    )
}
