import Link from "next/link";

export default function LoginParallelPage() {
  return (
    <div className="p-6 bg-white shadow-lg rounded">
      <h1 className="mb-4">Please login first</h1>
      <Link href="/login" className="text-blue-500 underline">
        Go to Login
      </Link>
    </div>
  );
}
