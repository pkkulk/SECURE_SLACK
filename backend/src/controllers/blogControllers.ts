import { Request, Response } from "express";
import Blog from "../models/Blog";

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const category = req.query.category;
    const blogs = category
      ? await Blog.find({ category })
      : await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Error fetching blog" });
  }
};
