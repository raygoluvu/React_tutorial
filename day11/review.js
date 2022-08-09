function App() {
    // 初始化states
    const [things, setThings] = React.useState(["thing 1", "thing 2"])

    // 點擊按鈕新增一行文字，
    function handleClick() {
        const len = things.length + 1
        const str = things[0].slice(0, -1)
        const newStr = str.concat(len)
        // 需要回傳的是陣列，所以要用中括號包住，並且要加上原本就存在的值，要用到es6的 <...> method，將原本串裂解封裝。
        setThings(
            prethings => {
                return [...prethings, newStr]
            }
        )
    }
    const elements = things.map((thing) => {
        return <p>{thing}</p>
    })


    return (
        <div>
            <button className="btn" onClick={handleClick}>add item</button>
            <div className="things">{elements}</div>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    < App />
)