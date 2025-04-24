import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <FontAwesomeIcon icon={faFilm} className="logo-icon" />
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar;
