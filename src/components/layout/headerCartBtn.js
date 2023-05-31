import CartIcon from "../cart/cartIcon";
import classes from "./headerCartBtn.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";

const HeaderCartBtn=(props) =>{
    const cartCtx=useContext(CartContext);
    let qty=0;
    cartCtx.items.forEach((item) =>{
        qty=qty+Number(item.qty);               //using Number function as item.qty gives string output
    })
    return (
        <button className={classes.button} onClick={props.onClickCart}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>CART</span>
            <span className={classes.badge}>{qty}</span>
        </button>
    )
}

export default HeaderCartBtn;