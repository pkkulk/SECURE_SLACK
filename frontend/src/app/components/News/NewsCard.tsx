// components/News/NewsCard.tsx

interface NewsCardProps {
    title: string;
    date: string;
    description: string;
  }
  
  export default function NewsCard({ title, date, description }: NewsCardProps) {
    return (
      <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  