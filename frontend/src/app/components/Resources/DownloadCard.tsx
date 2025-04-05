// components/Resources/DownloadCard.tsx
export default function DownloadCard({ title, downloadUrl }: { title: string; downloadUrl: string }) {
    return (
      <div className="p-4 border rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500">Click below to download</p>
        </div>
        <a
          href={downloadUrl}
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download
        </a>
      </div>
    );
  }
  