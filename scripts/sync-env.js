import fs from "node:fs";
import { fileURLToPath } from "url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootEnvPath = path.resolve(__dirname, "../.env");
const clientEnvPath = path.resolve(__dirname, "../client/.env");

try {
  const env = fs.readFileSync(rootEnvPath, "utf8");
  fs.writeFileSync(clientEnvPath, env);
  console.log("✅ Synced .env file to /client/.env");
} catch (err) {
  console.error("❌ Failed to sync .env:", err);
}