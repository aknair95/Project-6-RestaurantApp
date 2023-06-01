import React from "react";

const CartContext= React.createContext({
    items: [],
    addItem: (item,qty) =>{},
    removeItem: (id) =>{}
})

export default CartContext;