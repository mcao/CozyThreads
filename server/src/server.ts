import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const host = process.env.VITE_API_SERVER_HOST;
const port = process.env.VITE_API_SERVER_PORT;

import productsRouter from "./routes/products";
import checkoutRouter from "./routes/checkout";

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/create-payment-intent", checkoutRouter);

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
