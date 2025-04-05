// components/Blog/BlogPreview.tsx

import Link from "next/link";

interface BlogPreviewProps {
  blog: {
    id: string;
    title: string;
    category: string;
    summary: string;
    date?: string;
  };
}

export default function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <div className="text-xs text-gray-500 mb-1">{blog.category}</div>
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-sm text-gray-600 mt-2">{blog.summary}</p>
      <Link
        href={`/blog/${blog.id}`}
        className="inline-block mt-3 text-blue-600 text-sm hover:underline"
      >
        Read more →
      </Link>
    </div>
  );
}
