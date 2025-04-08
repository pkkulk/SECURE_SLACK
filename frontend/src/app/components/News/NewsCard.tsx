// components/News/NewsCard.tsx

type Props = {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
};

export default function NewsCard({ title, description, date, url, image }: Props) {
  return (
    <div className="border-2 bg-white/10 border-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />
      )}
      <h2 className="text-white  text-lg font-semibold mt-2">{title}</h2>
      <p className="text-white text-sm mt-1">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
          Read more
        </a>
      </div>
    </div>
  );
}
