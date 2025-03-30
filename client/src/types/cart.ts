import Product from "../../../shared/types/product";

interface CartItem {
  product: Product,
  qty: number
}

export default CartItem;