import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider=(props) =>{

    const [items,setItems]=useState(props.mealsAvailable);
   
    const addItemToCartHandler=(item,qty) =>{
        const updatedItems=items.map((element) =>{
            if(element.id===item.id){
                element.qty=Number(element.qty)+Number(qty);        //using number function to convert string to number
            }
            return element;
        })
        setItems(updatedItems);
    }

    const removeItemFromCartHandler=(id,qty) =>{
        const updatedItems=items.map((element) =>{
            if(element.id===id){
                element.qty=Number(element.qty)-qty;                
            }
            return element;
        })
        setItems(updatedItems);
    }
    const cartContext={
        items: items,
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