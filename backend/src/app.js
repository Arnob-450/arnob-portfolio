import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import env from "./config/env.js";
import healthRoutes from "./routes/health.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";
import { notFoundHandler, errorHandler } from "./middleware/error.middleware.js";

const app = express();

// 1. Basic HTTP security headers with Helmet
app.use(helmet());

// 2. CORS Configuration
const rawFrontendUrl = (env.FRONTEND_URL || "").replace(/\/+$/, "");
const allowedOrigins = [rawFrontendUrl];
if (env.isDevelopment) {
  // Allow common local development origins
  allowedOrigins.push("http://localhost:3000", "http://127.0.0.1:3000");
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (such as mobile apps, Postman, or curl)
      if (!origin) return callback(null, true);

      const normalizedOrigin = origin.replace(/\/+$/, "");
      if (allowedOrigins.includes(normalizedOrigin) || !env.isProduction) {
        return callback(null, true);
      } else {
        return callback(new Error(`[CORS] Origin "${origin}" is not allowed by CORS policy.`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 3. Body Parsing Middleware
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// 4. Rate Limiting Middleware (General API rate limiter)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150, // Limit each IP to 150 requests per window
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
  message: {
    success: false,
    message: "Too many requests from this IP. Please try again after 15 minutes.",
    timestamp: new Date().toISOString(),
  },
});
app.use("/api", generalLimiter);

// 5. API Routes
app.use("/api/health", healthRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/chatbot", chatbotRoutes);

// Root route friendly message
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Tawhid Khan Arnob Portfolio API is running.",
    documentation: "/api/health",
    version: "1.0.0",
  });
});

// 6. Handle Invalid Routes (404)
app.use(notFoundHandler);

// 7. Centralized Error Handler
app.use(errorHandler);

export default app;
