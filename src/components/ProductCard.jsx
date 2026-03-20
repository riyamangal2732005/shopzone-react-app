import {Link} from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product}){
    return(
        <div className={styles['card']}>
            <img
                src={product.thumbnail}
                alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <Link to={`/product/${product.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
}

export default ProductCard;