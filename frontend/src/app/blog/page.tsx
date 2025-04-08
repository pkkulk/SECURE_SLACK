// src/app/blog/page.tsx
import { Metadata } from 'next';
import { getAllBlogs } from '@/app/data/blog'; // Adjust path as needed
import BlogPreview from '@/app/components/Blog/BlogPreview'; // Adjust path as needed

export const metadata: Metadata = {
  title: 'Blog | My Awesome Site', // Customize title
  description: 'Read the latest posts from our blog.', // Customize description
};

export default function BlogIndexPage() {
  const blogs = getAllBlogs(); // Fetch all blogs, sorted

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 border-b border-gray-200 dark:border-gray-700 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Blog
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          All the latest news, updates, and insights.
        </p>
      </header>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          No blog posts published yet. Check back soon!
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogPreview key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}