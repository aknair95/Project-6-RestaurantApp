
import { Fragment, useState } from "react";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import Cart from "./components/cart/cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartStatus,setCartStatus]=useState(false);
  const cartShowHandler=() =>{
    setCartStatus(true);
  }

  const cartHideHandler=() =>{
    setCartStatus(false);
  }

  return (
    <CartProvider>
      {cartStatus && <Cart onClose={cartHideHandler}/>}
      <Header onClickCart={cartShowHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
      
  );
}

export default App;
