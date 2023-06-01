
import { Fragment, useState } from "react";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import Cart from "./components/cart/cart";
import CartProvider from "./store/cartProvider";

let mealsData = [
  {
    id: "1",
    name: "Masala Dosa",
    description: "South special",
    price: 80,
    qty: 0
  },
  {
    id: "2",
    name: "Chole Bhature",
    description: "Delhi special",
    price: 150,
    qty: 0

  },
  {
    id: "3",
    name: "Chole Kulche",
    description: "North special",
    price: 120,
    qty: 0
  },
];

function App() {
  const [cartStatus,setCartStatus]=useState(false);
  const cartShowHandler=() =>{
    setCartStatus(true);
  }

  const cartHideHandler=() =>{
    setCartStatus(false);
  }

  return (
    <CartProvider mealsAvailable={mealsData}>
      {cartStatus && <Cart onClose={cartHideHandler}/>}
      <Header onClickCart={cartShowHandler}/>
      <main>
        <Meals mealsAvailable={mealsData}/>
      </main>
    </CartProvider>
      
  );
}

export default App;
