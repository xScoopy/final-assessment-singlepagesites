const CharacterDisplay = (props) => {
    const info = props.info
    const films = info.films.map((film) => {
        return <li>{film}</li>
    })
    return (
        <div className="characterInfo">
            <h2>{info.name}</h2>
            <h4>Homeworld: <strong>{info.homeworld}</strong></h4>

            <ul>
                <li>Height: {info.height}</li>
                <li>Mass: {info.mass}</li>
                <li>Hair: {info.hair_color}</li>
                <li>Skin: {info.skin_color}</li>
                <li>Eye: {info.eye_color}</li>
                <li>BirthYear: {info.birth_year}</li>
                <li>Gender: {info.gender}</li>
            </ul>
            <ul>
                <li><strong>Films:</strong></li>
                {films}
            </ul>
        </div>
    )
}
export default CharacterDisplay