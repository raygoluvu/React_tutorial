function Div() {
    const tf = true
    let color = !tf ? "black" : "white"
    function click() {
        console.log(color)
    }

    return (
        <div>
            <img src="../images/cat1.jpg"></img>
            <button onClick={click}>click me</button>
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