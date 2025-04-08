import React from 'react';

    type DownloadCardProps = {
      title: string;
      description: string;
      link: string;
    };
    
    const DownloadCard: React.FC<DownloadCardProps> = ({ title, description, link }) => {
      return (
        <div className=" border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-white text-sm">{description}</p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full text-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Download
          </a>
        </div>
      );
    };
    
    export default DownloadCard;