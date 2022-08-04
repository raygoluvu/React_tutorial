const Info = [
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "park1.jpg"
    },
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "park2.jpg"
    },
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "park3.jpg"
    }
]

function Navbar() {
    return (
        <nav className="nav">
            <img src="../../images/earth-globe.png" className='nav--icon'></img>
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}

function Card(props) {
    const upperLocation = props.location.toUpperCase()
    return (
        <div>
            <div className='card'>
                <img className="card--img" src={`../../images/${props.imageUrl}`}></img>
                <div className="card--right">
                    <div className="card--location">
                        <img className="card--pin" src='../../images/location-pin.png'></img>
                        <span>{props.location.toUpperCase()}</span>
                        <a className="card--link" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className="card--content">
                        <h1 className="card--title">{props.title}</h1>
                        <div className="card--date">{props.startDate}-{props.endDate}</div>
                        <div className="card--desc">{props.description}</div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

function Section() {
    const cards = Info.map(data => {
        return (
            < Card {...data} />
        )
    }
    )
    return (
        <div>
            {cards}
        </div>
    )
}


function App() {
    return (
        <div>
            <Navbar />
            <Section />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    < App />
)