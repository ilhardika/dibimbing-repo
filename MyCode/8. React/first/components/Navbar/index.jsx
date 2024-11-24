import "../../assets/style.css"
import Logo from "../../assets/logo.png"

export const Navbar = () => {
    return(
        <div className="navbar">
            <div>
                <img className="logo" src={Logo} alt="" />
            </div>
            <div >
                <ul className="list-wrapper">
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Service</li>
                    <li className="list-active">Contact</li>
                </ul>
            </div>
        </div>
    )
}
