function Header() {
    return (
        <div className="header">
            <img className='header--selfie header' src='./OIP.jpg'></img>
            <h1 className='header--name header'>Laura Smith</h1>
            <h5 className='header--position header'>Frontend Developer</h5>
            <h6 className='header--desc header'>laurasimth.website</h6>
            <div className='header--buts'>
                <button className='header--email header'><i class="fa fa-inbox"></i>Email</button>
                <button className='header--link header'><i class="fa fa-external-link"></i>LinkedIn</button>
            </div>
        </div>
    )
}
function Section() {
    return (
        <div className='section'>
            <div className='section--about'>
                <h3 className='section--subtitle'>About</h3>
                <p className='section--content'>My name is Tami Bowers and I am a Certified Personal Trainer with 10+ years' experience providing personal training for physical therapists, chiropractors & coaches specializing pain relief from sports injuries & soft tissue dysfunction.</p>
                <h3 className='section--subtitle'>Interests</h3>
                <p className='section--content'>I will help you reach your goals by helping you to achieve your goals. I can provide you with the right workout routine to get you feeling like you should again, whether it's building a strong foundation, cutting body fat, or simply toning up your whole body. I'm a firm believer in personalized treatment to help get you started on the right path to a stronger, healthier you. I have been doing this work for over 2 years and I still love it! This is what I love to do!</p>
            </div>
        </div>
    )
}

function Footer() {
    <div>
        <img className='Footer--logo'></img>
        <img className='Footer--logo'></img>
        <img className='Footer--logo'></img>
        <img className='Footer--logo'></img>
    </div>
}

function App() {
    return (
        <div>
            <Header />
            <Section />
            <Footer />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    < App />
)