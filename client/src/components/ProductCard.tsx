import Product from "../../../shared/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: product.currency,
  }).format(product.price / 100);

  const { addToCart } = useCart();

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <figure>
        <img
          className="h-64 w-full object-cover"
          src={
            product.images.length > 0 ? product.images[0] : "/images/hero.webp"
          }
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <span className="text-xl">{formattedPrice}</span>
        </div>
        <p className="mt-6 flex flex-col gap-2 text-sm">
          {product.description}
        </p>
        <div className="mt-6">
          {product.qty > 0 ? (
            <button className="btn-primary btn-active btn-block btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          ) : (
            <button className="btn-primary btn-disabled btn-block btn">
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
