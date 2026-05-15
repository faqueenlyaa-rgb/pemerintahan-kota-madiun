import express from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .trim()
      .isLength({ min: 3 })
      .escape(),

    body("email")
      .isEmail()
      .normalizeEmail(),

    body("message")
      .trim()
      .isLength({ min: 5 })
      .escape()
  ],

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { name, email, message } = req.body;

    console.log({
      name,
      email,
      message
    });

    res.status(200).json({
      success: true,
      message: "Pesan berhasil dikirim"
    });
  }
);

export default router;