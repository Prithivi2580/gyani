import "dotenv/config";
import express, { type Express } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { auth } from "@/lib/auth";
import { toNodeHandler } from "better-auth/node";

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(cors({ origin: process.env.CORS_ORIGIN!, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
