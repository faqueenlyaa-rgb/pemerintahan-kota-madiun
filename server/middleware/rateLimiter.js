import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    message: "Terlalu banyak request, coba lagi nanti"
  }
});

export default limiter;