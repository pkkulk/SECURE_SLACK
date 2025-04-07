// components/Resources/ResourceList.tsx
import KnowledgeBaseCard from "./KnowledgeBaseCard";
import DownloadCard from "./DownloadCard";

export default function ResourceList() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Knowledge Center</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <KnowledgeBaseCard title="What is Phishing?" content="Phishing is a type of cyber attack..." />
          <KnowledgeBaseCard title="Zero Trust Security" content="Zero Trust assumes no implicit trust..." />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Downloads</h2>
        <div className="space-y-4">
          <DownloadCard title="Cybersecurity Checklist 2025" downloadUrl="/files/checklist.pdf" />
           <DownloadCard title="Security Policy Template" downloadUrl="/files/policy-template.pdf" />
        </div>
      </section>
    </div>
  );
}
