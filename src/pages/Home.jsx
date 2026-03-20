import styles from "./Home.module.css";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className={styles['homeContainer']}>
            <div className={styles['homeHero']}>
                <h1>Welcome to ShopZone</h1>
                <p>Your one-stop shop for amazing products.</p>

                <Link to="/shop">
                    <button className={styles['shopBtn']}>Shop Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;