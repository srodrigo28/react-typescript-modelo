import { Link } from "react-router-dom";
import { Menu } from "./styles"

export function Navbar(){
    return(
        <Menu>
            <ul>
                <Link to="#">Home</Link>
                <Link to="#">Cursos</Link>
                <Link to="#">Contato</Link>
                <Link to="#">Trabalhe com nosco</Link>
            </ul>
        </Menu>
    )
}