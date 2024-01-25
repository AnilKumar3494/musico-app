import React from "react"
const Podcast = ({ season, episodeNumber, episodeName }) => {
    return (
        <div className="podcasts-entry" style={{
            padding: "0.5rem"
        }}>
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