import React from "react"
const Podcast = ({ season, episodeNumber, episodeName }) => {
    return (
        <>
            <p style={{
                margin: "0"
            }}>
                {season ? `Season ${season} Episode ${episodeNumber}` : `Episode: ${episodeNumber}`}
            </p>
            <p style={{
                margin: "0",
                paddingBottom: "1rem"
            }}>
                Episode title: {episodeName}
            </p>
        </>
    )
}

export default Podcast