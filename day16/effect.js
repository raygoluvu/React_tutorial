
function App() {

    const [count, setCount] = React.useState(0)

    function handleClick() {
        setCount(pre => pre + 1)
    }

    React.useEffect(
        function () {
            console.log("effect ran.")
        }, [count])

    return (
        <div>
            <div>The count is {count}</div>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App></App>
)