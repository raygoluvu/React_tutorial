const root = document.getElementById('root')

function Header() {
    return (
        <header className="d-flex py-4">
            <img src="./tea.png" width="100px"></img>
            < Navbar />
        </header>
    )
}
function Body() {
    return (
        <ul className='Body'>
            <li>this is first line.</li>
            <li>this is 2 line.</li>
            <li>this is 3 line.</li>
        </ul>
    )
}

function Footer() {
    return (
        <small>2022 Ray development. All rights reserved.</small>
    )
}
function CreatePage() {
    return (
        <div className="page">
            < Header />

            <h1>Why I learn react!</h1>
            <div className='pageBody'>
                < Body />
            </div>
            <footer>
                < Footer />
            </footer>
        </div>
    )
}

function Navbar() {
    return (
        <div className='d-flex'>
            <ul className="nav float-start">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}
ReactDOM.render(<CreatePage></CreatePage>, root)


