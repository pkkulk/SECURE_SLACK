// components/Resources/KnowledgeCard.tsx
export default function KnowledgeBaseCard({ title, content }: { title: string; content: string }) {
    return (
      <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    );
  }
  