import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import ReturnContent from "./ReturnContent";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Return() {
  return (
    <Elements stripe={stripePromise}>
      <ReturnContent />
    </Elements>
  );
}

export default Return;
