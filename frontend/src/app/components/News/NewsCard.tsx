"use client";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
};

export default function NewsCard({ title, description, date, url, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      {image && (
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-sm"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
