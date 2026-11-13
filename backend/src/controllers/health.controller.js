import { checkDBHealth } from "../config/db.js";

/**
 * Health check controller.
 * Checks Express server and MongoDB Atlas connection status.
 */
export async function getHealthStatus(req, res, next) {
  try {
    const dbHealth = await checkDBHealth();

    const isHealthy = dbHealth.connected;
    const statusCode = isHealthy ? 200 : 503;

    res.status(statusCode).json({
      success: isHealthy,
      message: isHealthy
        ? "Express server and MongoDB Atlas are operational."
        : "Express server running, but MongoDB connection is degraded.",
      server: {
        status: "up",
        uptimeSeconds: Math.floor(process.uptime()),
        environment: process.env.NODE_ENV || "development",
      },
      database: {
        status: dbHealth.connected ? "connected" : "disconnected",
        name: dbHealth.connected ? dbHealth.database : undefined,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
}
