import FilterButton from "./FilterButton";

export default function FilterButtonsList(props) {

   return (
      <div className="flex gap-2 mb-4 justify-center">
         <FilterButton value="all" {...props} />
         <FilterButton value="active" {...props} />
         <FilterButton value="completed" {...props} />

         {/* <button
            className={`px-3 py-1 rounded-lg border ${
               filter === "active" ? "bg-indigo-600 text-white" : "bg-white"
            }`}
            onClick={() => setFilter("active")}
         >
            Active
         </button>

         <button
            className={`px-3 py-1 rounded-lg border ${
               filter === "completed" ? "bg-indigo-600 text-white" : "bg-white"
            }`}
            onClick={() => setFilter("completed")}
         >
            Completed
         </button> */}
      </div>
   );
}
