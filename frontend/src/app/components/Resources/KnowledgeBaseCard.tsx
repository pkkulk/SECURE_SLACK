import React from 'react';

interface KnowledgeBaseCardProps {
  title: string;
  description: string;
  fileUrl: string;
}

const KnowledgeBaseCard: React.FC<KnowledgeBaseCardProps> = ({
  title,
  description,
  fileUrl,
}) => {
  return (
    <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-5 border border-white/30 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-white/90">
      <h3 className="text-lg font-bold text-purple-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <p className="text-sm font-semibold text-pink-700">Type: Knowledge Base</p>
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition"
      >
        View Resource
      </a>
    </div>
  );
};

export default KnowledgeBaseCard;