
function Test(props) {
    console.log(props)
    const s = "string";
    return (
        <div>
            {/* Props of string type. */}
            {/* 用到Props函數的地方需要用大括號{}包起來 */}
            <span>My name is {props.name[0]}</span>
            <br></br>
            {s && <span>str:{s}</span>}
            <br></br>
            {/* change the display: 0|1 can disable the block.*/}
            {<span style={{ display: false ? 'block' : "none" }} >invisiable span</span>}
        </div>
    )
}



const jokes =
    [
        {
            setup: "I got my daughter a fridge for her birthday.",
            punchline: "I can't wait to see her face light up when she opens it."
        },
        {
            setup: "How did the hacker escape the police?",
            punchline: "He just ransomware!"
        },
        {
            setup: "Why don't pirates travel on mountain roads?",
            punchline: "Scurvy."
        },
        {
            setup: "Why do bees stay in the hive in the winter?",
            punchline: "Swarm."
        },
        {
            setup: "What's the best thing about Switzerland?",
            punchline: "I don't know, but the flag is a big plus!"
        }
    ]

function Joke(props) {
    return (
        <div>
            <span>setup: {props.setup}</span>
            <br></br>
            <span>punchline: {props.punchline}</span>
            <hr></hr>
        </div>
    )
}

function App() {
    const jokeArr = jokes.map(joke => {
        return (
            <Joke setup={joke.setup} punchline={joke.punchline} />
        )
    })
    return (
        <div>
            {jokeArr}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)