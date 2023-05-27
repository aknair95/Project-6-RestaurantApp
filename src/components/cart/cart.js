import Modal from "../UI/modal";
import classes from "./cart.module.css";

const Cart=(props) =>{
    const cartItems=(
        <ul>
            {[ {id:"1",name:"Chole kulche",qty:"2",price:120,}].map((item) =>{
                return(
                    <li>{item.name}</li>
                )
            })}
        </ul>
    )
    return(
        <Modal>
            <div className={classes.cartItems}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Price</span>
                    <span>Rs 240</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes.buttonClose}>Close</button>
                    <button className={classes.buttonOrder}>Order</button>
                </div>
            </div>
        </Modal>    
    )
}

export default Cart;