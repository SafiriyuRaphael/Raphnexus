// app/error.tsx
"use client"; // Mark this as a Client Component

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-auto border border-gray-100">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-4">Something went wrong.</p>
        <p className="text-gray-500 mb-6">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}