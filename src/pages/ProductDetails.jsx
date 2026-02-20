import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import "./ProductDetails.css";

function ProductDetails(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()).then((data) => {
            setProduct(data);
        });
    }, [id]);
    
    if (!product){
        return <h2>Loading...</h2>;
    }
    console.log(product);

    return (
        <div className="product-details-container">
            <div className="product-details-card">

                <div className="product-image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                
                <div className="product-info">
                    <h2>{product.title}</h2>

                    <div className="product-price">
                        <h3>${product.price}</h3>
                    </div>
                    
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    
                    <div className="product-meta">
                        <p>⭐ Rating: {product.rating} </p>
                        <p>Category: {product.category}</p>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default ProductDetails;