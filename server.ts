import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock API Routes
  app.get("/api/jobs", (req, res) => {
    res.json([
      { id: 1, title: "Handicraft Making", category: "Handicrafts", reward: "50 XLM", description: "Create traditional bamboo baskets." },
      { id: 2, title: "Community Cooking", category: "Cooking", reward: "30 XLM", description: "Prepare meals for disaster relief centers." },
      { id: 3, title: "Digital Data Entry", category: "Digital", reward: "40 XLM", description: "Help NGOs digitize field records." },
      { id: 4, title: "Tailoring Masks", category: "Tailoring", reward: "25 XLM", description: "Sew protective masks for local clinics." },
    ]);
  });

  app.post("/api/register", (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `User ${name} registered successfully!`, userId: Math.random().toString(36).substr(2, 9) });
  });

  app.post("/api/log-task", (req, res) => {
    const { taskId, userId, hours } = req.body;
    res.json({ message: "Task logged successfully. Pending NGO verification.", status: "pending" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
