import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">ShopZone</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;