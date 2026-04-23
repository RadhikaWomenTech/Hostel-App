import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory "database" for this session
  const data = {
    announcements: [
      { id: '1', title: 'New Menu Update', content: 'Homely meals now include special Sunday brunch!', date: new Date().toISOString() },
      { id: '2', title: 'Maintenance Notice', content: 'Water tank cleaning scheduled for this Saturday.', date: new Date().toISOString() }
    ],
    maintenanceStaff: "07355660636",
    rooms: [
      { id: '101', type: 'Single AC', available: true, price: 10000 },
      { id: '102', type: 'Double Non-AC', available: false, price: 6000 },
      { id: '103', type: 'Single Non-AC', available: true, price: 7000 },
    ]
  };

  // API Routes
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Login attempt:", email);
    // Mock success for any input
    res.json({ success: true, user: { email, name: email.split('@')[0] } });
  });

  app.post("/api/auth/register", (req, res) => {
    const { email, name } = req.body;
    console.log("Register attempt:", email);
    res.json({ success: true, user: { email, name } });
  });

  app.get("/api/announcements", (req, res) => {
    res.json(data.announcements);
  });

  app.post("/api/maintenance", (req, res) => {
    console.log("Maintenance Report Received:", req.body);
    res.json({ success: true, message: "Report successfully filed." });
  });

  app.get("/api/rooms", (req, res) => {
    res.json(data.rooms);
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
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
