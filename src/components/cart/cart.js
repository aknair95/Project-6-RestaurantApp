import { useContext } from "react";
import Modal from "../UI/modal";
import classes from "./cart.module.css";
import CartContext from "../../store/cartContext";

const Cart=(props) =>{
    const cartItemsCtx=useContext(CartContext);                         
    const cartItems=(
        <ol>
            {cartItemsCtx.items.map((item) =>{
                return(
                        <li key={Math.random()}>Name: {item.name} Price: {item.price} Quantity: {item.qty}</li>   
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
                    <button className={classes.buttonOrder}>Order</button>
                </div>
            </div>
        </Modal>    
    )
}

export default Cart;