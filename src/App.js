import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    return setCartIsShown(true);
  };

  const hideCartHandler = () => {
    return setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown ? <Cart onHideCart={hideCartHandler}></Cart> : ""}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
