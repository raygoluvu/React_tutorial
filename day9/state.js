
function Counter() {
    const [count, setCount] = React.useState(0)
    const handleClick_add = () => {
        setCount(
            oldValue => {
                return oldValue + 1
            }
        )
    }
    const handleClick_min = () => {
        setCount(
            oldValue => {
                return oldValue - 1
            }
        )
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={handleClick_min}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={handleClick_add}>+</button>
        </div>
    )
}

function Important() {
    const [isImportant, setIsImportant] = React.useState("Yes")

    function handleClick() {
        setIsImportant((oldValue) => {

            return oldValue === "Yes" ? "No" : "Yes"
        })
    }
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
function App() {
    return (
        <div>
            < Important />
            < Counter />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div>
        < App />
    </div>
)