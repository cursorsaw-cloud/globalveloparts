import express from "express";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { contactSubmissions, insertContactSubmissionSchema } from "../shared/schema.js";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/contact", async (req, res) => {
  try {
    const parsed = insertContactSubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }
    const [submission] = await db.insert(contactSubmissions).values(parsed.data).returning();
    return res.status(201).json({ success: true, id: submission.id });
  } catch (err) {
    console.error("Contact submission error:", err);
    return res.status(500).json({ error: "Failed to save submission" });
  }
});

app.get("/api/contact", async (_req, res) => {
  try {
    const submissions = await db
      .select()
      .from(contactSubmissions);
    return res.json(submissions);
  } catch (err) {
    console.error("Contact fetch error:", err);
    return res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

export default app;
