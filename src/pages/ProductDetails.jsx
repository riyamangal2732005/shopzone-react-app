import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../store/cartSlice';

function ProductDetails(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();//here we are initializing dispatch

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()).then((data) => {
            setProduct(data);
        });
    }, [id]);
    
    const handleAddToCart = () => {
        if(product) {
            dispatch(addToCart(product));
            alert(`${product.title} added to cart!`);
        }
    };

    if (!product){
        return <h2>Loading...</h2>;
    }

    return (
        <div className={styles['productDetailsContainer']}>
            <div className={styles['productDetailsCard']}>

                <div className={styles['productImage']}>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                
                <div className={styles['productInfo']}>
                    <h2>{product.title}</h2>

                    <div className={styles['productPrice']}>
                        <h3>${product.price}</h3>
                    </div>
                    
                    <div className={styles['productDescription']}>
                        <p>{product.description}</p>
                    </div>
                    
                    <div className={styles['productMeta']}>
                        <p>⭐ Rating: {product.rating} </p>
                        <p>Category: {product.category}</p>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className={styles['cartButton']}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
                    >Add To Cart</button>
                </div>   
            </div>
        </div>
    )
}

export default ProductDetails;