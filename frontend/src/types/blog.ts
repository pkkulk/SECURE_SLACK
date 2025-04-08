// src/types/blog.ts (or types/blog.ts)

export interface Blog {
    id: string;
    title: string;
    category: string;
    summary: string;
    date: string; // Assuming ISO date string e.g., "2024-08-15"
    image?: string; // Optional image URL
    content: string; // Markdown content
  }