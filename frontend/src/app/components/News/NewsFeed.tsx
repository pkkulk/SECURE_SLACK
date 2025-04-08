// components/News/NewsFeed.tsx

"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import API_BASE_URL from "@/app/styles/config";
type NewsItem = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

export default function NewsFeed() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/news/cyber`);
        const data = await res.json();
        setNewsList(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsList.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          date={news.publishedAt}
          description={news.description}
          image={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
}
