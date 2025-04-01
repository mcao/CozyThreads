import axios from "axios";
import Product from "../../../shared/types/product";
import CartItem from "@/types/cart";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_SERVER_PROTOCOL}://${import.meta.env.VITE_API_SERVER_HOST}:${
    import.meta.env.VITE_API_SERVER_PORT
  }`,
  headers: {
    "Content-Type": "application/json",
  },
});

async function fetchProducts() {
  try {
    const res = await apiClient.get<Product[]>("/api/products");

    return res.data;
  } catch (err) {
    console.error("Failed to fetch products: ", err);
    throw err;
  }
}

async function createPaymentIntent(cartItems: CartItem[]) {  
  const res = await apiClient.post("/api/create-payment-intent", {
    cartItems,
  });

  return res.data.clientSecret;
}

export { fetchProducts, createPaymentIntent };
