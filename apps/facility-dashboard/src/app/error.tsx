'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <AlertCircle className="mb-4 h-12 w-12 text-healthcare-red" />
      <h2 className="mb-2 text-xl font-semibold text-gray-900">Something went wrong</h2>
      <p className="mb-6 max-w-md text-gray-500">
        We encountered an issue loading this section of the dashboard. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Try again
      </button>
    </div>
  );
}
