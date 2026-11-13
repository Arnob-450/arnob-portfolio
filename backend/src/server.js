import app from "./app.js";
import env from "./config/env.js";
import { connectDB, closeDB } from "./config/db.js";

let server = null;

/**
 * Start the Express HTTP server and connect to MongoDB.
 */
async function startServer() {
  try {
    // 1. Connect to MongoDB Atlas
    await connectDB();

    // 2. Start Express HTTP server (bind to 0.0.0.0 for containerized hosting like Render)
    server = app.listen(env.PORT, "0.0.0.0", () => {
      console.log(`===============================================`);
      console.log(`🚀 Express Server listening on port: ${env.PORT}`);
      console.log(`📡 Environment: ${env.NODE_ENV}`);
      console.log(`🔗 Health Check: http://localhost:${env.PORT}/api/health`);
      console.log(`🌐 Allowed Frontend: ${env.FRONTEND_URL}`);
      console.log(`===============================================`);
    });
  } catch (error) {
    console.error("[Fatal Error] Failed to start server:", error.message);
    process.exit(1);
  }
}

/**
 * Graceful shutdown handler.
 * Closes the HTTP server, finishes in-flight requests, and closes the MongoDB connection.
 */
async function handleShutdown(signal) {
  console.log(`\n[Shutdown] Received ${signal}. Starting graceful shutdown...`);

  if (server) {
    server.close(async () => {
      console.log("[Shutdown] HTTP server stopped accepting new requests.");
      try {
        await closeDB();
        console.log("[Shutdown] Graceful shutdown completed cleanly.");
        process.exit(0);
      } catch (err) {
        console.error("[Shutdown] Error during database disconnect:", err.message);
        process.exit(1);
      }
    });

    // Force shutdown if cleanup takes too long
    setTimeout(() => {
      console.error("[Shutdown] Could not close connections in time, forcefully shutting down.");
      process.exit(1);
    }, 10000);
  } else {
    await closeDB();
    process.exit(0);
  }
}

// Listen for process termination signals
process.on("SIGINT", () => handleShutdown("SIGINT"));
process.on("SIGTERM", () => handleShutdown("SIGTERM"));

// Handle uncaught exceptions and unhandled promise rejections
process.on("uncaughtException", (error) => {
  console.error("[Uncaught Exception]:", error);
  handleShutdown("uncaughtException");
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("[Unhandled Rejection] at:", promise, "reason:", reason);
  handleShutdown("unhandledRejection");
});

// Launch the server
startServer();
