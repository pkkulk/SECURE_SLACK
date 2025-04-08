// src/app/page.tsx
import { getAllBlogs } from '@/app/data/blog'; // Adjust path if needed
import BlogPreview from '@/app/components/Blog/BlogPreview'; // Adjust path if needed
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Awesome Blog | Home',
  description: 'Read the latest posts about technology, cybersecurity, and more.',
};

export default function HomePage() {
  const blogs = getAllBlogs(); // Fetch sorted blogs

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Latest Posts
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Insights, tutorials, and thoughts on modern tech.
        </p>
      </header>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No blog posts found yet.</p>
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