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
            // Setup a new array for the return values.
            const newDatas = []

            // Using for loop to iterate every element in the preArray to find the correspond ID.
            for (let i = 0; i < preDatas.length; i++) {
                const currentData = preDatas[i]
                // If id is the same update new value.
                if (currentData.id === id) {
                    console.log("before:", currentData.on)
                    const updateData = {
                        ...currentData,
                        on: !currentData.on
                    }
                    // Push new data into array.
                    newDatas.push(updateData)
                    console.log("after", updateData.on)
                }
                // Not the correspond id, push old data into array.
                else {
                    newDatas.push(currentData)
                }
            }
            return newDatas
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