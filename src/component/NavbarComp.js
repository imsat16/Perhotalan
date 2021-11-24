import React, { useState } from "react";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-blue-300">
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-between items-center px-4 py-4 lg:py-0 border-b lg:border-0">
          <div>
            <a href className="uppercase font-semibold text-white">
              Brand
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-white block lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row justify-between w-full py-3 lg:py-0 `}
        >
          <div className="flex flex-col lg:flex-row items-center">
            <a
              href="rm"
              className="block px-4 py-3 lg:py-5 text-white hover:border-b-3"
            >
              Reservations Management
            </a>
            <a
              href="hm"
              className="block px-4 py-3 lg:py-5 text-white hover:border-b-3"
            >
              Hotel Management
            </a>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <a
              href="profile"
              className="block px-4 py-3 lg:py-5 text-white hover:font-medium"
            >
              Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
