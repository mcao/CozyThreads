import axios from "axios";
import Product from "../../../shared/types/product";

const apiClient = axios.create({
  baseURL: `http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}`,
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

export { fetchProducts };
