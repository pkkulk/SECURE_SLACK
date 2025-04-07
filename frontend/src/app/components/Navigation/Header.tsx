import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🚀 Secure Slack</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          
          <li>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </li>

          <li>
            <Link href="/components/News" className="hover:underline">news</Link>
          </li>
          <li>
            <Link href="/components/Resources" className="hover:underline">Resources</Link>
          </li>
          <li>
            <Link href="/signup" className="hover:underline">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
