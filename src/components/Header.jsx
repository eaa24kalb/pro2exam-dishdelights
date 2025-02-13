import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <nav>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                <Link to="/recipes" className={location.pathname === "/recipes" ? "active" : ""}>Recipes</Link>
                <Link to="/personal-favorites" className={location.pathname === "/personal-favorites" ? "active" : ""}>Favorites</Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About us</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </nav>
        </header>
    )
}