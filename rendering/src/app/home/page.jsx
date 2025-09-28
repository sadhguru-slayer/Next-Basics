import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Welcome to the Home Page</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Dashboard
        </Link>
        <Link href="/about" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          About
        </Link>
      </div>
    </div>
  );
}