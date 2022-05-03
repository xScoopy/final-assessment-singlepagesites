const ResultDisplay = (props) => {
    return (
        <div className="searchResult">
            <h3>{props.data.name}</h3>
            <ul>
                <li>Height: {props.data.height}</li>
                <li>Mass: {props.data.mass}</li>
                <li>Hair Color: {props.data.hair_color}</li>
                <li>Eye Color: {props.data.eye_color}</li>
            </ul>
        </div>
    )
}
export default ResultDisplay