import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const requiredEnvVars = ["MONGODB_URI"];

// Validate critical environment variables
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(
      `[Config Error] Missing required environment variable: "${envVar}". Please verify your backend .env file.`
    );
  }
}

export const env = {
  PORT: parseInt(process.env.PORT, 10) || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME || "arnob_portfolio",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  // Resend Email variables
  RESEND_API_KEY: process.env.RESEND_API_KEY || "",
  EMAIL_FROM: process.env.EMAIL_FROM || "onboarding@resend.dev",
  RECEIVER_EMAIL: process.env.RECEIVER_EMAIL || "tawhidkhanarnob@gmail.com",
  // Gemini AI variables
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
  GEMINI_MODEL: process.env.GEMINI_MODEL || "gemini-3.5-flash-lite",
  // Environment flags
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV !== "production",
};

export default env;
