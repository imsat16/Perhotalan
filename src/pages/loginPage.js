import React from "react";
import { Link } from "react-router-dom";
import NavbarComp from "../component/NavbarComp";

export const LoginPage = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="p-4">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src="https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                alt="Man looking at item at a store"
              />
            </div>
            <div class="p-4 flex flex-col justify-center">
              <div className="">
                <h1 class="">Homans</h1>
                <h6 class="mb-2">Sign into your account</h6>
                <input
                  className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="email"
                  placeholder="Username"
                />
                <input
                  className="w-full h-10 px-3 mb-3 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                />
                <Link to="/reservations">
                  <button className="mb-3 px-8 w-full py-1 text-md text-gray-800 font-semibold rounded-md border bg-gray-100 border-gray-200 hover:text-white hover:bg-gray-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Login
                  </button>
                </Link>
                <a href="s" className="text-gray-500 hover:text-black">
                  Forgot Account ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
