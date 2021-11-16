import { useState } from "react";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cartContext";

export const App = () => {
  const [cartIsShown, setCarIsShown] = useState(false);

  const showCartHandler = () => {
    setCarIsShown(true);
  };

  const hideCartHandler = () => {
    setCarIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
