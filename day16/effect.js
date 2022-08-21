
function Count(props) {
    return (
        <div>
            <div>The count is {props.count}</div>
        </div>
    )
}

function Api(props) {
    return (
        <div>
            <pre>
                {JSON.stringify(props.data, null, 2)}
            </pre>
        </div>
    )
}

function App() {

    const [count, setCount] = React.useState(1)
    const [starWarsData, setStarWarsData] = React.useState({})
    function handleClick() {
        setCount(pre => pre + 1)
    }

    React.useEffect(
        function () {
            fetch(`https://swapi.dev/api/people/${count}`)
                .then(res => res.json())
                .then(data => setStarWarsData(data))
        }, [count])


    return (
        <div>
            <Count count={count}></Count>
            <button onClick={handleClick}>Get Next Charactor</button>
            <Api data={starWarsData}></Api>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App></App>
)