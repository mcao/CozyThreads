import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";

function ReturnContent() {
  const stripe = useStripe();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    const clientSecret = searchParams.get("payment_intent_client_secret");
    if (!stripe || !clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent?.status === "succeeded") {
        setStatus("success");

        if (window.opener && window.opener !== window) {
          setTimeout(() => window.close(), 3000);
        }
      } else {
        setStatus("error");
      }
    });
  }, [stripe]);

  return (
    <main>
      <section className="py-12 text-center">
        <h2 className="text-5xl font-bold">Order Status</h2>
        <div className="mt-8">
          {status === "loading" && <p>Loading payment status...</p>}
          {status === "success" && (
            <p className="text-xl text-success">✅ Payment Successful!</p>
          )}
          {status === "error" && (
            <p className="text-xl text-error">❌ Payment Failed</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default ReturnContent;
