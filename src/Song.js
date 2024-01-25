const Song = ({ songTitle, artistName, year, songLink, artistLink }) => {
    return (
        <div className="songs-entry">
            <div >
                <a href={songLink}
                    target="_blank"
                >Song Name: {songTitle}</a>

                <a href={artistLink}
                    target="_blank">Sung By: {artistName}</a>

                <p style={{
                    margin: "0",
                }}>{`Date: ${year}`}</p>
            </div>
        </div>

    )
}

export default Song