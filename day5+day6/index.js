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
    console.log(`../images/${props.img}`)
    return (
        <div className='card'>
            <img className='card--img' src={`../images/${props.img}`}></img>
            <br></br>
            <div className='card--status'>
                <img className='card--star' src='../images/star.png'></img>
                <span className='card--rate'>{props.rate}</span>
                <span className='card--country'>(6)·{props.country}</span>
            </div>
            <br></br>
            <p className='card--desc'>{props.desc}</p>
            <br></br>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}
// Try componant

function Hello(props) {
    return (
        <h1>Hello {props.name}</h1>
    )
}

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card img='cat1.jpg' desc="Life lessons with Kate Zaferes" price="123" rate="5" country="USA" />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
