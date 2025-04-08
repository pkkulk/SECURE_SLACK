// src/app/blog/[id]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getBlogById, getAllBlogs } from '@/app/data/blog'; // Adjust path if needed
 // Adjust path if needed

// REMOVE the separate PageProps type definition:
// type PageProps = {
//   params: {
//     id: string;
//   };
// };

// Type params directly in generateMetadata
export async function generateMetadata(
  { params }: { params: { id: string } } // Type params directly here
): Promise<Metadata> {
  const blog = getBlogById(params.id);

  if (!blog) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${blog.title} | My Awesome Blog`,
    description: blog.summary,
    openGraph: {
        title: blog.title,
        description: blog.summary,
        type: 'article',
        publishedTime: blog.date,
        authors: ['Your Name Here'],
        images: blog.image ? [ { url: blog.image } ] : [],
    },
  };
}

// generateStaticParams remains the same
export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

// Helper function for formatting date (assuming it's defined elsewhere or here)
const formatDate = (dateString: string): string => {
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
        });
    } catch (e) {
      console.log(e);
       return dateString; }
};

// Type params directly in the Page component
export default function BlogPostPage(
  { params }: { params: { id: string } } // Type params directly here
) {
  const blog = getBlogById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <article>
        <header className="mb-8">
          {/* ... rest of header ... */}
           <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
            {blog.category}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl mb-3">
            {blog.title}
          </h1>
          <time dateTime={blog.date} className="text-gray-500 dark:text-gray-400 text-sm">
            Published on {formatDate(blog.date)}
          </time>
        </header>

        {blog.image && (
          <div className="mb-8 aspect-video relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={blog.image}
              alt={`Featured image for ${blog.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none prose-indigo">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>
        {/* ... optional back link ... */}
    </div>
  );
}