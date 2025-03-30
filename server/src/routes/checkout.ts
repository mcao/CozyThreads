import express from "express";
import stripe from "../utils/stripeClient";

import products from "../data/products";
import Product from "../../../shared/types/product";

const router = express.Router();

function calculateTotal(cartItems: { product: Product; qty: number }[]) {
  return cartItems.reduce((total, item) => {
    return total + item.product.price * item.qty;
  }, 0);
}

router.post("/", async (req, res) => {
  try {
    const total = calculateTotal(req.body.cartItems);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
});

export default router;
