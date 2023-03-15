import logo from "../../assets/Nu Kenzie.png"
import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";

const Header = () => {
    return (
        <HeaderStyle>
            <header>
                <nav>
                    <img src={logo} alt="Logo" />
                    <Link className="buttonHeader Body" to={"/"}>Inicio</Link>
                </nav>
            </header>
        </HeaderStyle>
    )
}

export default Header