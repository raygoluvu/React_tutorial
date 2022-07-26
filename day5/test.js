
function Test(props) {
    console.log(props)
    const s = "string";
    return (
        <div>
            {<span>My name is props.name</span>}
            <br></br>
            {s && <span>str:{s}</span>}
            <br></br>
            {<span style={{ display: true ? 'block' : "none" }} >invisiable span</span>}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Test name={['ray', 'alex', 'ann']} />
)