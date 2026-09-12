import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import "dotenv/config";
import bcrypt from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing from your .env file");
}

const mongoClient = new MongoClient(MONGODB_URI);

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoClient.connect();

    // Verify the connection
    await mongoClient.db("stellar_stree").command({ ping: 1 });

    console.log("✅ MongoDB connected successfully");

    const db = mongoClient.db("stellar_stree");

    const app = express();

    app.use(express.json());

    // Health check
    app.get("/api/health", async (_req, res) => {
      try {
        await db.command({ ping: 1 });

        res.json({
          success: true,
          message: "Stellar Stree backend is healthy",
          database: "connected",
        });
      } catch (error) {
        console.error("Health check failed:", error);

        res.status(500).json({
          success: false,
          message: "Database connection failed",
        });
      }
    });

    // Existing jobs API
    app.get("/api/jobs", (_req, res) => {
      res.json([
        {
          id: 1,
          title: "Handicraft Making",
          category: "Handicrafts",
          reward: "50 XLM",
          description: "Create traditional bamboo baskets.",
        },
        {
          id: 2,
          title: "Community Cooking",
          category: "Cooking",
          reward: "30 XLM",
          description: "Prepare meals for disaster relief centers.",
        },
        {
          id: 3,
          title: "Digital Data Entry",
          category: "Digital",
          reward: "40 XLM",
          description: "Help NGOs digitize field records.",
        },
        {
          id: 4,
          title: "Tailoring Masks",
          category: "Tailoring",
          reward: "25 XLM",
          description: "Sew protective masks for local clinics.",
        },
      ]);
    });

    // Temporary register API
    // We will replace this with the real User model in the next step.
    // User registration API
    app.post("/api/register", async (req, res) => {
      try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
          return res.status(400).json({
            success: false,
            message: "Name, email and password are required",
          });
        }

        const existingUser = await db.collection("users").findOne({ email });

        if (existingUser) {
          return res.status(409).json({
            success: false,
            message: "An account with this email already exists",
          });
        }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await db.collection("users").insertOne({
      name,
      email,
      passwordHash,
      role: "worker",
      createdAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      userId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create account",
    });
  }
});

    // Existing task logging API
    app.post("/api/log-task", async (req, res) => {
      try {
        const { taskId, userId, hours } = req.body;

        const result = await db.collection("work_logs").insertOne({
          taskId,
          userId,
          hours,
          status: "pending",
          createdAt: new Date(),
        });

        res.status(201).json({
          success: true,
          message: "Task logged successfully. Pending NGO verification.",
          status: "pending",
          logId: result.insertedId,
        });
      } catch (error) {
        console.error("Task logging error:", error);

        res.status(500).json({
          success: false,
          message: "Failed to log task",
        });
      }
    });

    // Vite middleware for development
    if (process.env.NODE_ENV !== "production") {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });

      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), "dist");

      app.use(express.static(distPath));

      app.get("*", (_req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`🗄️ Database: stellar_stree`);
    });

    // Graceful shutdown
    const shutdown = async () => {
      console.log("\nShutting down server...");
      await mongoClient.close();
      process.exit(0);
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    await mongoClient.close();
    process.exit(1);
  }
}

startServer();