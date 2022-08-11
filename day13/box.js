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


function Box(props) {
    // Use Local State
    const array = props.info
    const [mode, setMode] = React.useState(array.on)
    const styles = {
        backgroundColor: mode ? "black" : "lightblue"
    }

    function handleMode() {
        setMode(preMode => !preMode)
    }
    return (
        <div className="box" style={styles} onClick={handleMode}>
        </div>
    )
}

function App(props) {
    const [datas, setDatas] = React.useState(boxes)
    const [trigger, setTrigger] = React.useState(true)

    // no need
    // function handleTrigger() {
    //     setTrigger(preVal => !preVal)
    // }


    const elements = datas.map(element => {
        return < Box info={{ ...element }} key={element.id} />
    })

    return (
        <div >
            <h1>Boxes will go here</h1>
            <button>Change Mode</button>
            <br></br>
            {elements}
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    < App />
)