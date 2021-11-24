import React from "react";

function SearchRMReservations() {
  return (
      <div class="relative pr-2">
        <input
          type="text"
          class=" h-8 w-2/3 lg:w-10/12 float-right pr-8 pl-2 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search anything..."
        />
        <div className="absolute top-2 right-3">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
  );
}

export default SearchRMReservations;
