import { generateChatbotReply } from "../services/gemini.service.js";

const MAX_MESSAGE_LENGTH = 500;

/**
 * Handle POST /api/chatbot
 * Accepts visitor questions, validates input, calls Gemini service, and returns JSON reply.
 */
export async function handleChatbotMessage(req, res, next) {
  try {
    const { message, history } = req.body || {};

    // 1. Validation - Presence check
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required and cannot be empty.",
      });
    }

    const trimmedMessage = message.trim();

    // 2. Maximum length constraint
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        success: false,
        message: `Message exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters.`,
      });
    }

    // 3. Optional conversation history sanitation
    const validHistory = Array.isArray(history)
      ? history
          .filter(
            (item) =>
              item &&
              typeof item === "object" &&
              (item.role === "user" || item.role === "model" || item.role === "assistant") &&
              typeof item.content === "string" &&
              item.content.trim().length > 0
          )
          .slice(-6)
      : [];

    // 4. Generate AI reply via Gemini service
    try {
      const reply = await generateChatbotReply(trimmedMessage, validHistory);

      return res.status(200).json({
        success: true,
        reply,
      });
    } catch (aiError) {
      console.error("[Chatbot Controller] AI Generation Error:", aiError.message);
      return res.status(503).json({
        success: false,
        message:
          "The AI assistant is temporarily unavailable. Please try again shortly or use the contact form.",
      });
    }
  } catch (error) {
    next(error);
  }
}

export default {
  handleChatbotMessage,
};
