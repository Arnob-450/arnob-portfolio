"use client";

/**
 * ChatbotModal.jsx
 * Interactive AI Portfolio Chatbot powered by Gemini API.
 * Features:
 * - Floating toggle trigger with active badge
 * - Animated sliding chat modal
 * - Welcome message & quick suggested questions
 * - Chat history with auto-scroll
 * - Real-time typing indicators
 * - Safe markdown-aware text rendering
 * - Error states & retry handling
 */

import { useState, useRef, useEffect } from "react";

const SUGGESTED_QUESTIONS = [
  "Who is Arnob?",
  "What technologies does he know?",
  "Tell me about his projects.",
  "What is his educational background?",
  "How can I contact him?",
];

function createMessageId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function getFormattedTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const INITIAL_WELCOME_MESSAGE = {
  id: "welcome-msg",
  role: "assistant",
  content:
    "Hello! 👋 I'm Arnob's personal AI Portfolio Assistant powered by Gemini. Ask me anything about his skills, projects, education, or background!",
  timestamp: "Just now",
};

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_WELCOME_MESSAGE]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorNotice, setErrorNotice] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to the bottom of the message thread
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when opened
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    setErrorNotice(null);

    // Create user message object
    const userMsg = {
      id: createMessageId("user"),
      role: "user",
      content: query,
      timestamp: getFormattedTime(),
    };

    // Update conversation
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputMessage("");
    setIsLoading(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

    try {
      // Build conversation history (send last 6 exchanges excluding initial welcome message)
      const historyPayload = updatedMessages
        .filter((m) => m.id !== "welcome-msg")
        .slice(-6)
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          content: m.content,
        }));

      const response = await fetch(`${apiUrl}/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const assistantMsg = {
          id: createMessageId("ai"),
          role: "assistant",
          content: data.reply,
          timestamp: getFormattedTime(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        setErrorNotice(data.message || "Failed to receive response from assistant.");
      }
    } catch (networkErr) {
      console.warn("[Chatbot Notice]: Backend unreachable:", networkErr.message);
      setErrorNotice("Unable to reach the AI assistant. Please check your connection.");
      const offlineNotice = {
        id: createMessageId("offline"),
        role: "assistant",
        content:
          "⚠️ I'm currently unable to connect to the backend server. If running locally, please ensure the Express backend is running (`node src/server.js` on port 5000), or feel free to message Arnob directly via the Contact form!",
        timestamp: getFormattedTime(),
      };
      setMessages((prev) => [...prev, offlineNotice]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close AI chat assistant" : "Open AI chat assistant"}
        aria-expanded={isOpen}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 via-purple-600 to-cyan-500 shadow-xl shadow-violet-600/30 text-white transition-all duration-300 hover:scale-105 hover:shadow-violet-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 cursor-pointer"
      >
        {isOpen ? (
          /* Close Icon */
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Sparkles / Chatbot Icon */
          <div className="relative">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300" />
            </span>
          </div>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="AI Portfolio Assistant Window"
          className="fixed bottom-18 sm:bottom-24 right-2 sm:right-6 z-50 flex h-[520px] max-h-[82dvh] w-[calc(100vw-16px)] sm:w-[400px] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-[#232634] bg-[#101119]/98 shadow-2xl shadow-black/80 backdrop-blur-xl animate-fade-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#232634] bg-[#171923]/90 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 shadow-md shadow-violet-500/20 text-white font-bold text-sm">
                AI
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#101119] bg-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
                  <span>Arnob&apos;s Assistant</span>
                  <span className="rounded bg-violet-500/10 px-1.5 py-0.2 text-[10px] font-semibold text-violet-300 border border-violet-500/20">
                    Gemini
                  </span>
                </h3>
                <p className="text-[11px] text-zinc-400">Ask anything about my portfolio</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#1C1E2B] hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Conversation Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
            {messages.map((msg) => {
              const isUser = msg.role === "user";
              return (
                <div key={msg.id} className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                      isUser
                        ? "bg-violet-600 text-white rounded-br-xs"
                        : "bg-[#171923] border border-[#232634] text-zinc-200 rounded-bl-xs"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <span className="mt-1 px-1 text-[10px] text-zinc-500">{msg.timestamp}</span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-start">
                <div className="rounded-2xl rounded-bl-xs bg-zinc-900 border border-zinc-800/90 px-4 py-3 text-zinc-400 flex items-center gap-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Error Notification */}
            {errorNotice && (
              <div
                role="alert"
                className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-2.5 text-xs text-rose-300 text-center"
              >
                {errorNotice}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompts */}
          <div className="border-t border-zinc-900 bg-zinc-950/60 p-2.5 overflow-x-auto">
            <div className="flex gap-1.5 whitespace-nowrap">
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSendMessage(question)}
                  className="rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-[11px] text-zinc-300 hover:text-white hover:border-violet-500/40 hover:bg-zinc-800 transition-all duration-150 disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="border-t border-zinc-800/80 bg-zinc-900/90 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Arnob's skills, projects..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 rounded-xl border border-zinc-800 bg-zinc-950/80 px-3.5 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              />

              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-600/20 transition-all hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
