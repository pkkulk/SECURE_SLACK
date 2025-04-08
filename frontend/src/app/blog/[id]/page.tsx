import ReactMarkdown from "react-markdown";

import blogs from "@/data/blog"; // Make sure this path is correct
// import blogs from "@/data/blogs";
import Image from "next/image";
export default function BlogPostPage({ params }: { params: { id: string } }) {
  // const blog = blogs.find((b) => b.id === params.id);
  const blogId = params.id; // Access after awaitable
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <div className="p-10 text-center text-lg text-red-500">Blog not found 😞</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
        {blog.title}
      </h1>
      <p className="text-base text-gray-500 mb-10">
        {blog.date} • Category: {blog.category}
      </p>

      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}        // Add width
          height={600}
          className="w-1/2 h-64 object-cover rounded-lg mb-8 shadow-md mx-auto"
        />
      )}
      <article className="prose prose-lg">
      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </article>
    </div>
  );
}