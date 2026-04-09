import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSubmissionSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
      }

      const submission = await storage.createContactSubmission(parsed.data);
      return res.status(201).json({ success: true, id: submission.id });
    } catch (err) {
      console.error("Contact submission error:", err);
      return res.status(500).json({ error: "Failed to save submission" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (err) {
      console.error("Contact fetch error:", err);
      return res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  return httpServer;
}
