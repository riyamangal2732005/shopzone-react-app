import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(){
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    return(
        <nav className={styles['navbar']}>
            <h2 className={styles['logo']}>ShopZone</h2>

            <div className={styles['navLinks']}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart <span>({totalQuantity})</span></Link>
            </div>
        </nav>
    );
};

export default Navbar;