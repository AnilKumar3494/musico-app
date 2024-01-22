const Song = ({ songTitle, artistName, year, songLink, artistLink }) => {
    return (

        <div>
            <div >
                <a href={songLink} style={{
                    color: "black",
                    display: "block"
                }}
                    target="_blank"
                >Song Name: {songTitle}</a>

                <a href={artistLink} style={{
                    color: "black"
                }}
                    target="_blank">Sung By: {artistName}</a>

                <p style={{
                    margin: "0",
                    paddingBottom: "1rem"
                }}>Year: {year}</p>
            </div>
        </div>

    )
}

export default Song