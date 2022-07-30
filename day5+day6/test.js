
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Test name={['ray', 'alex', 'ann']} />
)