// src/components/Blog/BlogPreview.tsx
import Link from 'next/link';
import { Blog } from '@/types/blog'; // Adjust path if needed

interface BlogPreviewProps {
  blog: Blog;
}

// Helper function to format date (optional, you can use libraries like date-fns)
const formatDate = (dateString: string): string => {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (e) {
    console.log(e);
    return dateString; // Fallback to original string if date is invalid
  }
};

export default function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <article className="group flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-indigo-600 dark:text-indigo-400 font-medium uppercase tracking-wider">
            {blog.category}
          </span>
          <time dateTime={blog.date} className="text-gray-500 dark:text-gray-400">
            {formatDate(blog.date)}
          </time>
        </div>
        <Link href={`/blog/${blog.id}`} className="block mt-1">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-200">
            {blog.title}
          </h2>
        </Link>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {blog.summary}
        </p>
      </div>
      <div className="mt-auto p-5 pt-0">
        {/* Separator */}
        {/* <hr className="border-gray-200 dark:border-gray-700 my-3" /> */}
        <Link
          href={`/blog/${blog.id}`}
          className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 group-hover:underline"
        >
          Read more
          <span aria-hidden="true" className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}