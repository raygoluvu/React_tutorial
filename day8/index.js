function Header() {
    return (
        <div className='header'>
            <img className='header--icon' src="../images/face.png"></img>
            <h2 className='header--title'>MemeGenerator</h2>
            <div className='header--desc'>React Course - Project 3</div>
        </div>
    )
}

function Section() {
    return (
        <div className="section">
            <form className='section--form'>
                <div className='form--inputBox'>
                    <input type='text' name="input1" className="form--input" id="input1" placeholder="Top text"></input>
                    {/* <label htmlFor="input1"></label> */}
                    <input type='text' name="input2" className="form--input" placeholder="bottom text"></input>
                    {/* <label htmlFor="input2"></label> */}
                </div>
                <button type="submit" name="submit" className='form--submit'>Get a new meme image</button>
            </form>
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Section />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)