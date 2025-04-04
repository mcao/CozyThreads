import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Cart, Home, NoMatch, Checkout, Return } from "@/pages";
import { CartProvider } from "@/context/CartContext";

const App: FC = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="return" element={<Return />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </CartProvider>
  );
};

export default App;
