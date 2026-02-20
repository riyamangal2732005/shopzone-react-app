import "./Home.css";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="home-container">
            <div className="home-hero">
                <h1>Welcome to ShopZone</h1>
                <p>Your one-stop shop for amazing products.</p>

                <Link to="/shop">
                    <button className="shop-btn">Shop Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;