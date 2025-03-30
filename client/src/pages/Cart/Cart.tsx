import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const formattedPrice = (price: number, currency: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price / 100);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0,
  );

  return (
    <main>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-5xl font-bold">Your Cart</h2>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="mx-auto max-w-3xl">
                <ul className="rounded-box divide-y divide-base-200 bg-base-100 shadow-md">
                  {cartItems.map((cartItem) => (
                    <li
                      key={cartItem.product.id}
                      className="grid w-full grid-cols-[80px_1fr_auto_auto_auto_auto] items-center gap-4 overflow-hidden py-2"
                    >
                      <div>
                        <img
                          className="h-20 w-20 rounded object-cover"
                          src={cartItem.product.images[0]}
                          alt={cartItem.product.name}
                        />
                      </div>
                      <div className="w-48 truncate">
                        {cartItem.product.name}
                      </div>
                      <div className="w-24 truncate">
                        {formattedPrice(
                          cartItem.product.price,
                          cartItem.product.currency,
                        )}
                      </div>
                      <button
                        aria-label="Decrease quantity"
                        className="flex h-6 w-6 items-center justify-center rounded hover:bg-base-300"
                        onClick={() => removeFromCart(cartItem.product.id, 1)}
                      >
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4"
                            y="10"
                            width="16"
                            height="4"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <div>{cartItem.qty}</div>
                      <button
                        aria-label="Increase quantity"
                        className="flex h-6 w-6 items-center justify-center rounded hover:bg-base-300"
                        onClick={() => addToCart(cartItem.product)}
                      >
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="10"
                            y="4"
                            width="4"
                            height="16"
                            fill="currentColor"
                          />
                          <rect
                            x="4"
                            y="10"
                            width="16"
                            height="4"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {cartItems.length > 0 && (
              <div className="mt-8 flex justify-end">
                <p className="text-xl font-bold">
                  Subtotal:{" "}
                  {formattedPrice(subtotal, cartItems[0].product.currency)}
                </p>
              </div>
            )}
            <div className="mt-4 flex justify-end">
              <button
                className="btn-primary btn"
                disabled={cartItems.length === 0}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
