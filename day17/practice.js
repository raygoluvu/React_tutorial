
function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log("resized window")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function () {
            console.log("clean up")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}


function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show, setShow] = React.useState(true)

    function handleClick() {
        setShow((preShow) => !preShow)
    }

    return (
        <div className="container">
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    < App />
)