export default function FilterButton({ value, activeFilter, onFilter }) {
   return (
      <button
         className={`px-3 py-1 rounded-lg border capitalize transition ${
            activeFilter === value
               ? "bg-indigo-600 text-white"
               : "bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-100"
         }`}
         onClick={() => onFilter(value)}
      >
         {value}
      </button>
   );
}
