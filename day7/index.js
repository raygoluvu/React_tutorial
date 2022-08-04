const data = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "cat1.jpg",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "cat2.jpg",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "cat3.jpg",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]

function Navbar() {
    return (
        <nav className='navbar'>
            <img src='../images/airbnb.png' className='navbar--logo'></img>
            <h2 className='navbar--title'>airbnb</h2>
        </nav>
    )
}

function Hero() {
    return (
        <section className='hero'>
            <img className='hero--img' src='../images/hero.png'></img>
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--content'>Joint unique interactive activeities led by one-of-a-kind hosts-all without leaving home.</p>

        </section>
    )
}

// Reusable Componant
function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location == "Online") {
        badgeText = "Online"
    }
    return (
        <div className='card'>
            <img className='card--img' src={`../images/${props.coverImg}`}></img>
            {/* show SOLD OUT if openSpots equal to 0 */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <br></br>
            <div className='card--status'>
                <img className='card--star' src='../images/star.png'></img>
                <span className='card--rate'>{props.stats.rating}</span>
                <span className='card--location'>(6)·{props.location}</span>
            </div>
            <br></br>
            <p className='card--title'>{props.title}</p>
            <br></br>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

function App() {
    const cards = data.map(item => {
        return (
            <Card
                // img={item.coverImg}
                // rate={item["stats"].rating}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
                key={item.id}
                {...item}
            />
        )
    })
    return (

        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

// rendering onto page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
