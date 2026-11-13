import { MongoClient, ServerApiVersion } from "mongodb";
import env from "./env.js";

let client = null;
let db = null;
let isConnected = false;

/**
 * Connect to MongoDB Atlas using the MongoDB Native Driver.
 * Reuses existing connection if already established.
 */
export async function connectDB() {
  if (db && isConnected) {
    return db;
  }

  try {
    if (!client) {
      client = new MongoClient(env.MONGODB_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
        maxPoolSize: 10,
        minPoolSize: 2,
        serverSelectionTimeoutMS: 5000,
      });
    }

    await client.connect();

    // Verify connection using the ping command
    await client.db("admin").command({ ping: 1 });

    db = client.db(env.DB_NAME);
    isConnected = true;

    console.log(`[Database] Successfully connected to MongoDB Atlas (DB: "${env.DB_NAME}")`);
    return db;
  } catch (error) {
    isConnected = false;
    console.error("[Database] Failed to connect to MongoDB Atlas:", error.message);
    throw error;
  }
}

/**
 * Get the current MongoDB database instance.
 * Throws an error if connectDB() has not been called.
 */
export function getDB() {
  if (!db || !isConnected) {
    throw new Error("[Database] Database not connected. Call connectDB() first.");
  }
  return db;
}

/**
 * Check if the database connection is currently alive.
 */
export async function checkDBHealth() {
  if (!client || !isConnected) {
    return { connected: false, message: "Client not initialized or disconnected" };
  }

  try {
    await client.db("admin").command({ ping: 1 });
    return { connected: true, database: env.DB_NAME };
  } catch (err) {
    return { connected: false, error: err.message };
  }
}

/**
 * Gracefully close the MongoDB client connection.
 */
export async function closeDB() {
  if (client) {
    try {
      await client.close();
      isConnected = false;
      db = null;
      client = null;
      console.log("[Database] MongoDB connection closed cleanly.");
    } catch (err) {
      console.error("[Database] Error closing MongoDB connection:", err.message);
    }
  }
}

export default {
  connectDB,
  getDB,
  checkDBHealth,
  closeDB,
};
