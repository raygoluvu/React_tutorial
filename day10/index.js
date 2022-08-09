function App() {
    const [itemsArray, setItemsArray] = React.useState(["Thing 1", "Thing 2"])
    var itemsElements = itemsArray.map(item => {
        return <span key={item} className="app--item">{item}</span>
    })
    function addItem() {
        const lastItem = itemsArray.slice(-1)[0]
        const str = lastItem.slice(0, -1)
        const newNum = Number(lastItem.slice(-1)) + 1

        const newStr = str.concat(newNum)

        setItemsArray((preArray) => {
            // es6 method, divided preArray into pieces, add the new String, last return the new array.
            // preArray is an object.
            console.log((preArray))
            return [...preArray, newStr]
        })
    }
    return (
        <div className="app">
            <button className="app--btn" onClick={addItem}>Add Item</button>
            <div className="app--container">
                {itemsElements}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div>
        < App />
    </div>
)