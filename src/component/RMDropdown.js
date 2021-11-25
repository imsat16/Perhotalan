import React, { useState } from "react";

function RMDropdown() {
  const [isOpenRM, setIsOpenRM] = useState(false);
  return (
    <div className=" rounded-lg shadow-md">
      <button
        className="bg-blue-300 hover:bg-blue-400 text-white lw-auto rounded-lg hover:font-medium p-2 border-b "
        onClick={() => setIsOpenRM(!isOpenRM)}
      >
        <div className="flex items-center">
          {" "}
          Dropdown
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={!isOpenRM ? "block" : "hidden"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
            <path
              className={isOpenRM ? "block" : "hidden"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`${
          isOpenRM ? "block" : "hidden"
        } w-auto text-center lg:text-left flex flex-col rounded-lg bg-blue-400 `}
      >
        <a
          className="hover:bg-blue-500 hover:font-medium text-white p-3 hover:rounded-t-lg"
          href
        >
          Reservation
        </a>
        <a
          className="hover:bg-blue-500 hover:font-medium text-white p-3 hover:rounded-b-lg"
          href
        >
          Room/Bed Search center
        </a>
      </div>
    </div>
  );
}

export default RMDropdown;
