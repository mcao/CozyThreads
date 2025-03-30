import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const port = process.env.VITE_API_SERVER_PORT;

import productsRouter from "./routes/products";

const app = express();

app.use(cors());
app.use(logger);

app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
