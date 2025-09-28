'use client';

export default function Error({ error, reset }) {
  return (
    <div className="text-red-600 p-4">
      <h2 className="text-xl font-semibold">Oops! Something went wrong</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
