import { Router } from "express";
import { getHealthStatus } from "../controllers/health.controller.js";

const router = Router();

// GET /api/health - Health check status
router.get("/", getHealthStatus);

export default router;
