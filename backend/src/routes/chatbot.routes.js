import { Router } from "express";
import rateLimit from "express-rate-limit";
import { handleChatbotMessage } from "../controllers/chatbot.controller.js";

const router = Router();

// Chatbot rate limiter: allow up to 25 AI queries per 10 minutes per IP
const chatbotLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 25,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "You have sent too many messages to the AI assistant. Please wait a few minutes before asking again.",
  },
});

// POST /api/chatbot - Ask questions to Gemini AI assistant
router.post("/", chatbotLimiter, handleChatbotMessage);

export default router;
