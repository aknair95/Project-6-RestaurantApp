import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider=(props) =>{
    const [items,setItems]=useState([]);
    const addItemToCartHandler=(item) =>{
        setItems([...items,item]);
    }

    const removeItemFromCartHandler=(id) =>{

    }
    const cartContext={
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;