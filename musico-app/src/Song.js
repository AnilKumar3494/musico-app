const Song = ({ songTitle, artistName, year }) => {
    return (
        <>
            <a href="#" style={{
                color: "black"
            }}>Song Name: {songTitle}</a>
            <br></br>
            <a href="#" style={{
                color: "black"
            }}>Sung By: {artistName}</a>
            <p>Year: {year}</p>
        </>
    )
}

export default Song