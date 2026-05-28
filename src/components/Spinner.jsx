export default function Spinner() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

      <p className="font-semibold">
        Loading Chart...
      </p>
    </div>
  );
}