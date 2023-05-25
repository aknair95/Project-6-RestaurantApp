import CartIcon from "../cart/cartIcon";
import classes from "./headerCartBtn.module.css";

const HeaderCartBtn=(props) =>{
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>CART</span>
            <span className={classes.badge}>0</span>
        </button>
    )
}

export default HeaderCartBtn;