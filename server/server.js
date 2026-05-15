import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import limiter from "./middleware/rateLimiter.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

/* =========================
   PARSER
========================= */
app.use(express.json());

/* =========================
   SECURITY HEADERS
========================= */
app.use(helmet());

/* =========================
   LOGGING
========================= */
app.use(morgan("combined"));

/* =========================
   CORS RESTRICTION
========================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://pemerintahan-kota-madiun.vercel.app/"
    ]
  })
);

/* =========================
   RATE LIMITER
========================= */
app.use(limiter);

/* =========================
   ROUTES
========================= */
app.use("/api/contact", contactRoutes);

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.json({
    message: "Backend Pemkot Aman Berjalan"
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});