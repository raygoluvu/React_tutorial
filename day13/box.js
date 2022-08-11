const boxes = [
    {
        id: 1,
        on: true
    },
    {
        id: 2,
        on: false
    },
    {
        id: 3,
        on: true
    },
    {
        id: 4,
        on: true
    },
    {
        id: 5,
        on: false
    },
    {
        id: 6,
        on: false
    },
]

function App(props) {
    const [datas, setDatas] = React.useState(boxes)
    const [trigger, setTrigger] = React.useState(true)

    function handleTrigger() {
        setTrigger(preVal => !preVal)
    }


    const elements = datas.map((element => {
        const styles = {
            backgroundColor: element.on ? "black" : "lightblue"
        }
        return (<div className="box" style={styles} key={element.id}>
        </div>)
    }))

    return (
        <div >
            <h1>Boxes will go here</h1>
            <button onClick={handleTrigger}>Change Mode</button>
            {elements}
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    < App />
)