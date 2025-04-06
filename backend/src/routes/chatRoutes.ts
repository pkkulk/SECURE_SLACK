import express from "express";
import { chatbotReply } from "../controllers/chat";

const router = express.Router();
router.post("/chatbotReply",chatbotReply);

export default router;