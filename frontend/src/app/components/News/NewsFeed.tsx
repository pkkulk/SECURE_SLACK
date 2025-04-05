// components/News/NewsFeed.tsx

import NewsCard from "./NewsCard";

const dummyNews = [
  {
    title: "New Cybersecurity Update Released",
    date: "April 4, 2025",
    description: "Version 2.0 of our secure communication protocol is now live.",
  },
  {
    title: "Hackathon Winners Announced",
    date: "April 1, 2025",
    description: "Team CipherSec won first place for their innovative end-to-end encryption.",
  },
  {
    title: "Secure Slack Reaches 10K Users",
    date: "March 28, 2025",
    description: "A milestone celebration for our growing open-source community.",
  },
];

export default function NewsFeed() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {dummyNews.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          date={news.date}
          description={news.description}
        />
      ))}
    </div>
  );
}
