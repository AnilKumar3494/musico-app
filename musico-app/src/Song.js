const Song = ({ songTitle, artistName, year }) => {
    return (
        <>
            <a href="#">Song Name: {songTitle}</a>
            <a href="#">Sung By: {artistName}</a>
            <p>Year: {year}</p>
        </>
    )
}

export default Song