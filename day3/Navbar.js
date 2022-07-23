import Logo from "./logo192.png"
import react from 'react'
function Navbar() {
    return (
        <nav>
            <img src={Logo} width="30"></img>
            <h2>ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}
export default Navbar;