function Navbar() {
    return (
        <nav className='navbar'>
            <img src='./airbnb.png' className='navbar--logo'></img>
            <h2 className='navbar--title'>airbnb</h2>
        </nav>
    )
}

function Hero() {
    return (
        <section className='hero'>
            <img className='hero--img' src='./hero.png'></img>
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--content'>Joint unique interactive activeities led by one-of-a-kind hosts-all without leaving home.</p>

        </section>
    )
}

// Reusable Componant
function Card() {
    return (
        <div className='card'>
            <img className='card--img' src='./cat1.jpg'></img>
            <br></br>
            <div className='card--status'>
                <img className='card--star' src='./star.png'></img>
                <span className='card--rate'>5.0</span>
                <span className='card--country'>(6)·USA</span>
            </div>
            <br></br>
            <p className='card--desc'>Life lessons with Kate Zaferes</p>
            <br></br>
            <p className='card--price'><span className='bold'>From $136</span> / person</p>
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
            < Card />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
