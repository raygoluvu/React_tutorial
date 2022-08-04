function Header() {
    return (
        <div className='header'>
            <img className='header--icon' src="../images/face.png"></img>
            <h2 className='header--title'>MemeGenerator</h2>
            <div className='header--desc'>React Course - Project 3</div>
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)