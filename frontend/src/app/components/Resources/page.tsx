import ResourceList from "./ResourceList"
export default function ResourcePage()
{
    return(
        <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Resources</h1>
        <ResourceList />
      </main>
    )
}