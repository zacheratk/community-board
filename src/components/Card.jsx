import "./Card.css"

const Card = (props) => {
    return (
    <div className="card">
        <img src={props.image} />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button>View Wiki</button>
        </a>
    </div>
    )
}

export default Card;