import { Router } from "express";
import rateLimit from "express-rate-limit";
import { submitContactMessage } from "../controllers/contact.controller.js";

const router = Router();

// Dedicated rate limiter for contact form submissions (5 submissions per 15 minutes per IP)
const contactSubmissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact messages submitted from this IP. Please wait a few minutes before trying again.",
  },
});

// POST /api/contact - Submit a new contact message
router.post("/", contactSubmissionLimiter, submitContactMessage);

export default router;
