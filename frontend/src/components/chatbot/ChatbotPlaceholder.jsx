/**
 * ChatbotPlaceholder.jsx
 * Re-exports the full interactive Gemini-powered ChatbotModal
 * to preserve backwards compatibility with any existing imports.
 */

import ChatbotModal from "./ChatbotModal";

export default function ChatbotPlaceholder() {
  return <ChatbotModal />;
}
