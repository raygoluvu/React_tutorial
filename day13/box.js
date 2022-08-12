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
    const styles = {
        backgroundColor: array.on ? "black" : "lightblue"
    }

    return (
        <div className="box" style={styles} onClick={() => props.toggle(props.id)} >
        </ div>
    )
}

function App(props) {
    const [datas, setDatas] = React.useState(boxes)
    // For change bgColor using a button.
    // const [trigger, setTrigger] = React.useState(true)

    function toggle(id) {
        setDatas(preDatas => {
            return preDatas.map((data) => {
                return data.id === id ? { ...data, on: !data.on } : data
            })
        })
    }


    const elements = datas.map(element => {
        return < Box
            info={{ ...element }}
            toggle={toggle}
            id={element.id}
            key={element.id}
        />
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