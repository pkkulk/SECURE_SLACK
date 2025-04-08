// src/routes/newsRoutes.ts
import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/cyber", async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "cybersecurity",
        sortBy: "publishedAt",
        language: "en",
        apiKey: process.env.NEWS_API_KEY
      }
    });
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;
