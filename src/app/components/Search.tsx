import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-68">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4" />
      <input
        type="text"
        placeholder="Buscar"
        className="bg-gray-100 py-2 pl-10 pr-3 w-full rounded-2xl outline-none placeholder:text-gray-700 placeholder:text-sm"
      />
    </div>
  );
}
