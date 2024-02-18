const Song = ({ songTitle, artistName, year, songLink, artistLink }) => {
    return (
        <div className="songs-entry">
            <div className="song">
                <iframe width="560" height="315" src={songLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoplay="1"></iframe>

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