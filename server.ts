import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Inquiry
  app.post("/api/inquiry", (req, res) => {
    const { email, message } = req.body;
    
    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required" });
    }

    const inquiry = {
      id: Date.now(),
      email,
      message,
      timestamp: new Date().toISOString()
    };

    // In a real app, we'd save to a database. 
    // Here we'll append to a local file as a simple persistent store.
    const filePath = path.join(process.cwd(), "inquiries.json");
    let inquiries = [];
    
    if (fs.existsSync(filePath)) {
      try {
        const data = fs.readFileSync(filePath, "utf8");
        inquiries = JSON.parse(data);
      } catch (e) {
        console.error("Error reading inquiries file:", e);
      }
    }

    inquiries.push(inquiry);
    
    try {
      fs.writeFileSync(filePath, JSON.stringify(inquiries, null, 2));
      console.log("New inquiry received:", inquiry);
      res.status(200).json({ success: true, message: "Inquiry sent successfully" });
    } catch (e) {
      console.error("Error saving inquiry:", e);
      res.status(500).json({ error: "Failed to save inquiry" });
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
