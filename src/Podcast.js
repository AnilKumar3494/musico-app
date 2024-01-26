import React from "react"
const Podcast = ({ season, episodeNumber, episodeName, episodeLink }) => {
    return (
        <div className="podcasts-entry" style={{
            padding: "0.5rem"
        }}>

            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="188" src={episodeLink}></iframe>
            <p style={{
                margin: "0rem"
            }}>
                {season ? `Season ${season} Episode ${episodeNumber}` : `Episode: ${episodeNumber}`}
            </p>
            <p style={{
                margin: "0",
            }}>
                Episode Title: {episodeName}
            </p>
        </div>
    )
}

export default Podcast
