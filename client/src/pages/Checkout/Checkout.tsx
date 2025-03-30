import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { createPaymentIntent } from "@/services/api";
import { useCart } from "@/context/CartContext";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Checkout() {
  const { cartItems } = useCart();

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    createPaymentIntent(cartItems)
      .then((data) => {
        setClientSecret(data);
      })
      .catch((err) => {
        setError("Failed to create Stripe Payment Intent");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-5xl font-bold">Checkout</h2>
          </div>
          <div className="mt-8">
            {loading && <p>Loading Checkout...</p>}
            {error && <p>{error}</p>}
            {!loading && clientSecret && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance: {
                    theme: "night", // or 'stripe', 'night', 'none'
                    variables: {
                      colorPrimary: "#4F46E5", // purple
                      colorDanger: "#e11d48", // red
                    },
                  },
                }}
              >
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
