// import { notFound } from "next/navigation";

// // Dummy blog data
// const blogs = [
//   {
//     id: "1",
//     title: "The Rise of AI in Cybersecurity",
//     content: "AI is transforming how we detect and prevent cyber threats...",
//     category: "AI",
//     date: "2025-04-04",
//   },
//   {
//     id: "2",
//     title: "Why DevOps Matters in 2025",
//     content: "DevOps enables faster and safer software delivery...",
//     category: "DevOps",
//     date: "2025-04-01",
//   },
// ];

// // ✅ Page Component
// export default function BlogPostPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const blog = blogs.find((b) => b.id === params.id);

//   if (!blog) return notFound();

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <p className="text-sm text-gray-500">
//         {blog.date} · {blog.category}
//       </p>
//       <h1 className="text-4xl font-bold mt-2">{blog.title}</h1>
//       <div className="mt-6 text-lg text-gray-700 leading-relaxed">
//         {blog.content}
//       </div>
//     </div>
//   );
// }

// // ✅ generateStaticParams for build-time dynamic routing
// export async function generateStaticParams() {
//   return blogs.map((blog) => ({
//     id: blog.id,
//   }));
// }
export default function BlogPostPage(){
    return(
        <h1>hello</h1>
    )
}