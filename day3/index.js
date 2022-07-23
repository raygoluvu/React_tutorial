function Navbar() {
    return (
        <nav>
            <img className="nav--logo" id="logo" src="./logo192.png" >
            </img>
            <h2 className="nav--logo_text" id="title">
                ReactFacts
            </h2>
            <h3 className="nav--title" id="subtitle">React Course - Project 1</h3>
        </nav>
    )
}
function Content() {
    return (
        <div className="content">
            <h1 className="content--title">Fun facts about React</h1>
            <ul>
                <li><span className="content--text">Was first releasef in 2013</span></li>
                <li><span className="content--text">Was originally created by Jordan Walke</span></li>
                <li><span className="content--text">has well over 100K stars on GitHub</span></li>
                <li><span className="content--text">Is maintained by facebook</span></li>
                <li><span className="content--text">Powers thousands of enterprise apps, including mobile apps</span></li>
            </ul>
        </div>
    )
}
function App() {
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <App />
)