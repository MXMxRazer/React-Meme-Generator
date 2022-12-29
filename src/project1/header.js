import "../index.css"
import logo from "../logo.svg"

function Header() {
    return (
        <header className="Header">
            <img src={logo} id="header-img"></img> 
            <h1>Meme generator -React</h1>
        </header>
    ) 
}

export default Header; 
 