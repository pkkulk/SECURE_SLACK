import express from "express";
import { getAllBlogs } from "../controllers/blogControllers";

const router = express.Router();

router.get("/", getAllBlogs); // GET /api/blogs

export default router;
