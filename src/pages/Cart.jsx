import {useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../store/cartSlice';
import styles from "./Cart.module.css";

const Cart = () => {
    
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

    return (
        <div className={styles['pageWrapper']}>

            <main>
                <h2 className={styles['cartHeadline']}>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p className={styles['cartContent']}>Your cart is empty.</p> : (
                <ul className ={styles['cartList']}>
                    {cartItems.map((item) => (
                        <li key={item.id} className={styles['cartItem']}>
                            <img src={item.thumbnail}
                            alt={item.title}
                            className={styles['cartThumb']}/>

                            <div className={styles['cartItemInfo']}>
                                <h3>{item.title}</h3>
                                <p className={styles['itemPrice']}>Total: ${item.totalPrice.toFixed(2)}</p>
                                <p className={styles['itemQty']}>Quantity: {item.quantity}</p>

                            </div>
                            
                            <div className={styles['cartControls']}>
                                <button className={styles['qtyBtn']}onClick = {() => dispatch       (removeFromCart(item.id))}>-</button>

                                <span className={styles['qty-number']}>{item.quantity}</span>

                                <button className={styles['qtyBtn']}onClick={() => dispatch(addToCart(item))}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>

               
            )}
            <div className={styles['cartSummary']}>
                <div className={styles['summaryDetails']}>
                    <span>Grand Total:</span>
                    <span className={styles['totalPriceText']}>${totalAmount.toFixed(2)}</span>
                    </div>

                    <button className={styles['checkoutBtn']}>
                        Checkout <span>&rarr;</span>
                    </button>
                </div>
            </main>
        </div> 
    );
};

export default Cart;