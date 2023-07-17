"use client";
import React, { useState } from "react";
import loginbtn from "./loginbtn";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
export const Navbar = () => {
  const { data } = useSession();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="text-gray-600 body-font bg-purple-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="lg:ml-3 font-bold text-xl lg:text-5xl text-yellow-300">
            TrackEx
          </span>
        </a>

        {data?.user ? (
          <div className=" lg:ml-auto">
            <nav className=" flex flex-wrap items-center text-base justify-center">
              <Link
                href="/about"
                className=" border-b-2 border-b-yellow-300 p-1 text-white mr-3 lg:mr-6 hover:text-yellow-300"
              >
                About
              </Link>
              <Link
                href="/pesonalETracker"
                className="border-b-2 border-b-yellow-300 p-1 text-white mr-3 lg:mr-6 hover:text-yellow-300 cursor-pointer"
              >
                Personal Use
              </Link>
              <Link
                href="/YourEvents"
                className=" border-b-2 border-b-yellow-300 p-1 text-white mr-3 lg:mr-6 hover:text-yellow-300 cursor-pointer"
              >
                For Event
              </Link>
              <div className="flex">
                <div className="relative inline-block">
                  <button
                    onMouseDown={handleToggle}
                    className="flex items-center justify-center focus:outline-none"
                  >
                    <img
                      src="/Profile logo design circular.png"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full mr-1"
                    />
                    <div className=" border-b-2 border-b-yellow-300 p-1 text-white mr-3 lg:mr-6 hover:text-yellow-300 cursor-pointer">
                      {data?.user?.name}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 py-2 rounded-md bg-yellow-100 shadow-lg">
                      <div className="px-4 py-2">
                        <p className="text-gray-600 font-medium">
                          {data?.user?.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {data?.user.email}
                        </p>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="px-4 py-2">
                        <a
                          href="#"
                          className="block text-black text-base my-3 rounded-md hover:bg-purple-100 text-center hover:text-purple-600"
                        >
                          Your Expenses
                        </a>
                        <a
                          href="#"
                          className="block text-black text-base my-3 rounded-md hover:bg-purple-100 text-center hover:text-purple-600"
                        >
                          Your Events
                        </a>
                      </div>
                      <hr className="border-gray-200" />
                      <span
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="  cursor-pointer w-fit mx-auto block text-gray-600 my-2 hover:text-red-600"
                      >
                        Logout
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        ) : (
          <div className=" ml-0 lg:ml-auto">
            <Link
              href="/about"
              className=" border-b-2 border-b-yellow-300 text-white mr-6 hover:text-yellow-300 lg:ml-auto"
            >
              About
            </Link>
            <Link
              href="/login"
              className=" border-b-2 border-b-yellow-300 text-white mr-6 hover:text-yellow-300"
            >
              Login
            </Link>
            <Link
              href="/register"
              className=" border-b-2 border-b-yellow-300 text-white mr-6 hover:text-yellow-300"
            >
              Sign Up
            </Link>
          </div>
        )}
        {/* <loginbtn /> */}
        {/* {data?.user ? (
          <></>
        ) : (
          <></>
        )} */}

        {/* <button className="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-4 md:mt-0">
          Login
        </button>
        <button className="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign Up
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
};
