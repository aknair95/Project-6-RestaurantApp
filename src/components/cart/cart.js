import { useContext } from "react";
import Modal from "../UI/modal";
import classes from "./cart.module.css";
import CartContext from "../../store/cartContext";
import classes1 from "./CartItem.module.css";

const Cart=(props) =>{
    const cartItemsCtx=useContext(CartContext); 
    const cartItemsStatus=cartItemsCtx.items.length>0;
                         
    const cartItems=(
        <ol>
            {cartItemsCtx.items.map((item) =>{
                return(
                    <li key={Math.random()} className={classes1.cartItem}>
                            <div>
                                <h2>{item.name}</h2>
                                <div className={classes1.summary}>
                                    <span className={classes1.price}>Rs {item.price}</span>
                                    <span className={classes1.qty}>x {item.qty}</span>
                                </div>
                            </div>
                            <div className={classes1.actions}>
                                <button onClick={cartItemsCtx.removeItem}>-</button>
                                <button onClick={cartItemsCtx.addItem}>+</button>
                            </div>  
                    </li>   
                )
            })}
        </ol>
    )
    const cartPrice=cartItemsCtx.items.reduce((totalPrice,item) =>{             // reduce function to get total price from cart items
        return totalPrice+(Number((item.qty))*Number((item.price)))
    },0);

    return(
        <Modal onClose={props.onClose}>
            <div className={classes.cartItems}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Price</span>
                    <span>{`Rs ${cartPrice}`}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes.buttonClose} onClick={props.onClose}>Close</button>
                    {cartItemsStatus && <button className={classes.buttonOrder}>Order</button>}
                </div>
            </div>
        </Modal>    
    )
}

export default Cart;