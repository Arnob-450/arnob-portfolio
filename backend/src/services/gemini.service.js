import { GoogleGenAI } from "@google/genai";
import env from "../config/env.js";
import { buildSystemInstruction } from "../data/portfolio.context.js";

let genAIInstance = null;

function getGenAI() {
  if (!genAIInstance) {
    if (!env.GEMINI_API_KEY) {
      throw new Error("[Gemini Service] GEMINI_API_KEY is not configured.");
    }
    genAIInstance = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
  }
  return genAIInstance;
}

/**
 * Generate a response using Gemini AI for visitor portfolio questions.
 * @param {string} userMessage - User's latest inquiry
 * @param {Array<{ role: "user"|"model", content: string }>} [conversationHistory=[]]
 * @returns {Promise<string>} Assistant reply text
 */
export async function generateChatbotReply(userMessage, conversationHistory = []) {
  const ai = getGenAI();
  const systemInstruction = buildSystemInstruction();

  // Format valid conversation history (limit to last 6 messages to prevent token abuse)
  const safeHistory = Array.isArray(conversationHistory)
    ? conversationHistory.slice(-6).map((msg) => ({
        role: msg.role === "assistant" || msg.role === "model" ? "model" : "user",
        parts: [{ text: String(msg.content || "").slice(0, 500) }],
      }))
    : [];

  // Add the current user message to contents
  const contents = [
    ...safeHistory,
    {
      role: "user",
      parts: [{ text: userMessage }],
    },
  ];

  try {
    const response = await ai.models.generateContent({
      model: env.GEMINI_MODEL,
      contents,
      config: {
        systemInstruction: {
          parts: [{ text: systemInstruction }],
        },
        temperature: 0.3, // Low temperature for factual, grounded answers
        maxOutputTokens: 600,
      },
    });

    const replyText = response?.text?.trim();

    if (!replyText) {
      return "I'm sorry, I couldn't process your question at the moment. Please try asking again or reach out through the contact form!";
    }

    return replyText;
  } catch (error) {
    console.error("[Gemini Service] Error calling Gemini API:", error.message);
    throw new Error("Failed to generate response from Gemini AI.");
  }
}

export default {
  generateChatbotReply,
};
