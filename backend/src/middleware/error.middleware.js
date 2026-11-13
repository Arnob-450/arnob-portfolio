import env from "../config/env.js";

/**
 * 404 Not Found Handler for unknown API routes.
 */
export function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl} - Route not found.`,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Centralized error-handling middleware.
 * Safely returns JSON responses and hides stack traces in production.
 */
export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode || 500);

  console.error(`[Error] ${req.method} ${req.url} - ${err.message}`);
  if (env.isDevelopment && err.stack) {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(env.isDevelopment && { stack: err.stack }),
    timestamp: new Date().toISOString(),
  });
}
