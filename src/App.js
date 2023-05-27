
import { Fragment } from "react";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import Cart from "./components/cart/cart";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
      
  );
}

export default App;
