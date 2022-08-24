function Navbar(props) {

    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img className="nav--logo" id="logo" src="./logo192.png" >
            </img>
            <h2 className="nav--logo_text" id="title">
                ReactFacts
            </h2>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className={"toggler--slider" + props.darkMode ? "dark" : ""} onClick={props.toggleDarkMode}>
                    <img className="nav--btnImg" src={`../images/${props.darkMode ? "on-button" : "off-button"}.png`} ></img>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav >
    )
}
function Content(props) {
    return (
        <div className={props.darkMode ? "dark content" : "content"}>
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

    const [darkMode, setdarkMode] = React.useState(false)
    function toggleDarkMode() {
        console.log("clicked")
        setdarkMode(
            (preVal) => !preVal
        )
    }
    return (
        <main>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Content darkMode={darkMode} />
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <App />
)