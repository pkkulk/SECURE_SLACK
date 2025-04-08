import React from 'react';
import DownloadCard from './DownloadCard';


interface Resource {
  title: string;
  description: string;
  fileUrl: string;
  type: string;
}

interface ResourceListProps {
  resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {resources.map((resource, index) => (
        <DownloadCard link={''} key={index} {...resource} />
      ))}
    </div>
  );
};

export default ResourceList;