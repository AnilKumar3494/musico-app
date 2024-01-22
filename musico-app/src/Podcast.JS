import React from "react"
const Podcast = ({ season, episodeNumber, episodeName }) => {
    return (
        <>
            <p>
                {season ? `Season ${season} Episode ${episodeNumber}` : `Episode: ${episodeNumber}`}
            </p>
            <p>
                Episode title: {episodeName}
            </p>
        </>
    )
}

export default Podcast