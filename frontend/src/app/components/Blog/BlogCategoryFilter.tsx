// components/Blog/BlogCategoryFilter.tsx
"use client";

import { useState } from "react";

const categories = ["All", "AI", "Security", "Cloud", "DevOps"];

export default function BlogCategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex gap-4 flex-wrap mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm border transition ${
            activeCategory === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
