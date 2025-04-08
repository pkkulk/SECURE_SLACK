// src/app/blog/[id]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'; // Ensure installed
import { getBlogById, getAllBlogs } from '@//app/data/blog'; // Adjust path
// --- generateMetadata ---
// Using 'any' to bypass the PageProps constraint error
export async function generateMetadata(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { params }: { params: any } // Using 'any' and disabling ESLint rule for this line
): Promise<Metadata> {
  const blogId = params?.id as string; // Safely access id

  if (!blogId) {
    console.error("generateMetadata: Blog ID is missing from params");
    return { title: 'Error: Missing Blog ID' };
  }

  const blog = getBlogById(blogId);

  if (!blog) {
    // Handle case where blog is not found during metadata generation
    return { title: 'Post Not Found' };
  }

  // Return metadata if blog is found
  return {
    title: `${blog.title} | My Awesome Site`, // Customize
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      type: 'article',
      publishedTime: blog.date,
      // url: `YOUR_BASE_URL/blog/${blog.id}`, // Add your site's base URL
      authors: ['Your Name or Team'], // Optional: Add author info
      images: blog.image ? [{ url: blog.image }] : [], // Ensure image URLs are absolute if needed
    },
  };
}

// --- generateStaticParams ---
// (This function usually doesn't cause the PageProps error)
export async function generateStaticParams() {
  const blogs = getAllBlogs();

  if (!Array.isArray(blogs)) {
    console.error("generateStaticParams: Failed to fetch blogs or blogs is not an array.");
    return [];
  }

  // Generate params making sure 'id' exists
  return blogs
    .map((blog) => ({
      id: blog?.id,
    }))
    .filter(p => typeof p.id === 'string' && p.id.length > 0); // Ensure id is a valid string
}

// --- formatDate Helper ---
const formatDate = (dateString: string): string => {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  } catch (_e) { // Use _e to silence unused variable warning/error
    console.error("Error formatting date:", dateString, _e);
    return dateString; // Fallback to original string on error
  }
};

// --- BlogPostPage Component (Default Export) ---
// Using 'any' to bypass the PageProps constraint error
export default function BlogPostPage(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { params }: { params: any } // Using 'any' and disabling ESLint rule for this line
) {
  const blogId = params?.id as string; // Safely access id

  // Validate ID early
  if (typeof blogId !== 'string' || !blogId) {
    console.error("BlogPostPage: Invalid or missing Blog ID in params:", blogId);
    notFound(); // ID is required and must be a string
  }

  const blog = getBlogById(blogId);

  // Trigger 404 if blog post not found
  if (!blog) {
    console.warn(`BlogPostPage: Blog not found for ID: ${blogId}`);
    notFound();
  }

  // --- Render the page ---
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <article>
        <header className="mb-8">
          {/* Category Badge */}
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl mb-3">
            {blog.title}
          </h1>

          {/* Date */}
          <time dateTime={blog.date} className="text-gray-500 dark:text-gray-400 text-base">
            Published on {formatDate(blog.date)}
          </time>
        </header>

        {/* Optional Hero Image */}
        {blog.image && (
          <div className="mb-10 aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={blog.image}
              alt={`Featured image for ${blog.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 900px" // Example sizes
              className="object-cover"
              priority // Add priority if this is likely LCP
            />
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-indigo text-white
                        prose-headings:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-800 dark:prose-a:text-indigo-400 dark:hover:prose-a:text-indigo-300">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>

      {/* Back Link */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
           <Link href="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              ← Back to Blog List
           </Link>
      </div>
    </div>
  );
}