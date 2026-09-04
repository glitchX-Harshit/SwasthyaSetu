export default function Loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600"></div>
        <p className="text-sm font-medium text-gray-500">Loading facility data...</p>
      </div>
    </div>
  );
}
