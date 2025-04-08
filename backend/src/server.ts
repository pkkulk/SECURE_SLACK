import express from "express";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import connectDB from "./db/connect";
import cors from "cors";
import newsRoutes from "./routes/newsRoutes";
import blogRoutes from "./routes/blogRoutes";


const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://secure-slack-frontend.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);
app.use(express.json());

(async () => {
  try {
    await connectDB();

    app.use("/api/auth", authRoutes);
    app.use("/api/chat",chatRoutes);
    app.use("/api/news", newsRoutes);

app.use("/api/blogs", blogRoutes);
    app.get("/", (req, res) => {
      res.send("Hello from backend!");
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
})();
