import { useState } from "react";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [loadingPmt, setLoadingPmt] = useState(false);

  const handleSubmit = async () => {
    setLoadingPmt(true);

    if (!stripe || !elements) {
      setLoadingPmt(false);
      return;
    }

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/return?source=popup`,
      },
    });

    setLoadingPmt(false);
  };

  return (
    <div className="CheckoutForm">
      <PaymentElement />
      <div className="mt-4 flex justify-end">
        <button
          className="btn-primary btn"
          disabled={!stripe || loadingPmt}
          onClick={handleSubmit}
        >
          {loadingPmt ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
