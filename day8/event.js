function Div() {
    function click() {
        console.log("clicked!")
    }

    return (
        <div>
            <img src="../images/cat1.jpg"></img>
            <button onClick={click()}>click me</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <Div></Div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App />
)