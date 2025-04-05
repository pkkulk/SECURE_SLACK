import BlogCategoryFilter from "@/app/components/Blog/BlogCategoryFilter";
import BlogPreview from "@/app/components/Blog/BlogPreview";

const dummyBlogs = [
  {
    id: "1",
    title: "The Rise of AI in Cybersecurity",
    category: "AI",
    summary: "Learn how AI is shaping the future of digital security.",
  },
  {
    id: "2",
    title: "Why DevOps Matters in 2025",
    category: "DevOps",
    summary: "A deep dive into modern software delivery practices.",
  },
];

export default function BlogPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <BlogCategoryFilter />
      <div className="grid gap-4">
        {dummyBlogs.map((blog) => (
          <BlogPreview key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
