import React from 'react';
import ResourceList from './ResourceList';


const resources = [
  {
    title: 'Cyber Security White Papers - SANS Institute',
    description: 'A collection of white papers on various cybersecurity topics provided by the SANS Institute.',
    fileUrl: 'https://www.sans.org/white-papers/',
    type: 'Whitepaper',
  },
  {
    title: 'Cybersecurity Whitepaper By Cybersecurity Exchange - EC-Council',
    description: 'Comprehensive whitepapers on the latest cybersecurity research and industry trends.',
    fileUrl: 'https://www.eccouncil.org/cybersecurity-exchange/whitepapers/',
    type: 'Whitepaper',
  },
  {
    title: 'Cybersecurity Guide for Financial Institution Customers - FDIC',
    description: 'A guide providing cybersecurity best practices for customers of financial institutions.',
    fileUrl: 'https://www.fdic.gov/consumers/assistance/protection/brochures/cybersecurity-guide-financial-institution-customers.pdf',
    type: 'Brochure',
  },
  {
    title: 'Cybersecurity Knowledge Base - Verimatrix XTD',
    description: 'A curated collection of valuable articles on enhancing the security of mobile apps.',
    fileUrl: 'https://www.verimatrix.com/cybersecurity/knowledge-base/',
    type: 'Knowledge Base',
  },
  {
    title: 'Cybersecurity Knowledgebase Articles - Lumitiv',
    description: 'Expert advice on best cybersecurity practices, tools, and tactics to defend against threats.',
    fileUrl: 'https://lumitiv.com/kb/article-category/cybersecurity/',
    type: 'Knowledge Base',
  },
];

const ResourceCenterPage = () => {
  return (
    <main className="min-h-screen text-gray-900">
      <div className="">
        <h1 className="text-4xl mt-4 text-white font-bold text-center drop-shadow-md flex justify-center items-center gap-3">
          📚 <span>Resource Center</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <ResourceList resources={resources} />
      </div>
    </main>
  );
};

export default ResourceCenterPage;