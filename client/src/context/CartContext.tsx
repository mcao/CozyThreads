import { createContext, useState, useContext, ReactNode } from "react";
import CartItem from "../types/cart";
import Product from "../../../shared/types/product";

interface CartContextValue {
  cartItems: CartItem[];
  addToCart(product: Product): void;
  removeFromCart(productId: string, qtyToRemove: number): void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const removeFromCart = (productId: string, qtyToRemove: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === productId);
      if (existing) {
        if (existing.qty - qtyToRemove <= 0) {
          return prev.filter((item) => item.product.id !== productId);
        } else {
          return prev.map((item) =>
            item.product.id === productId
              ? {
                  ...item,
                  qty: item.qty - qtyToRemove,
                }
              : item,
          );
        }
      }
      return [...prev];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };