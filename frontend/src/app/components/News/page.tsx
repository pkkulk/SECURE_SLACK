// app/news/page.tsx

import NewsFeed from "./NewsFeed";

export default function NewsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white mx-auto w-56">Latest News</h1>
      <NewsFeed />
    </main>
  );
}
