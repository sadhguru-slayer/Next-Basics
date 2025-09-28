"use client";
import { useRouter } from "next/navigation";

export default function InterceptedLogin() {
  console.log("✅ Came into interceptor");
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h1 className="text-xl font-semibold mb-2">Intercepted Login</h1>
        <p className="text-gray-600 text-sm mb-4">
          You must log in to access the dashboard.
        </p>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Username"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
