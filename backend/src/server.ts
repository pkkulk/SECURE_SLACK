import express from "express";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import connectDB from "./db/connect";
import cors from "cors";
const app = express();
const allowedOrigins = [
  'http://localhost:3000', // for dev
  'https://secure-slack-frontend.vercel.app' // your deployed frontend
];
app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin as string) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true // Allow cookies if needed
  })
);
app.options('*', cors());
app.use(express.json());

(async () => {
  try {
    await connectDB();

    app.use("/api/auth", authRoutes);
    app.use("/api/chat",chatRoutes);

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
