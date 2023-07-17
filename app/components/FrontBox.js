import Link from "next/link";
import React from "react";

export default function FrontBox() {
  return (
    <>
      <section className="text-gray-600 body-font bg-purple-100">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-purple-500 text-center">
              <span className="border-b border-b-yellow-500 mr-3">
                TrackEx-
              </span>
              Expense Manager
              <br className="hidden lg:inline-block" />
            </h1>
            <p className=" font-semibold text-xl mb-4 leading-relaxed">
              For Anyone Who Wants{" "}
              <b className="text-yellow-500 mr-1 text-2xl">
                To Keep An Eye On Monthly Expenses
              </b>
            </p>
            <p className=" font-semibold text-xl leading-relaxed">
              Which Will Surely:
            </p>
            <div className="container w-full mb-8">
              <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 ">
                <div className="p-2 w-full">
                  <div className="bg-purple-200 rounded-xl flex p-4 h-full items-center border border-yellow-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      Protect one from Over-Spending
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-purple-200 rounded-xl flex p-4 h-full items-center border border-yellow-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      Helps in Maintaining Monthly Budget
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-purple-200 rounded-xl flex p-4 h-full items-center border border-yellow-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      Most Importantly Increase Savings at the End of the Month
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-lg text-lg"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg"
                href="/register"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/FrontBox Image.png"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-purple-100">
        <div className=" title-font sm:text-3xl text-2xl mb-4 font-semibold border-b text-purple-500 border-b-yellow-300  rounded-3xl bg-yellow-100 px-5 py-3 ml-auto text-center lg:w-3/5 w-full">
          Some Exciting Features
        </div>
        <div className="container px-5 py-4 mx-auto">
          <div className="flex items-center lg: w-11/12 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-500 flex-shrink-0">
              <img src="/EVcircular.png" alt="Expense Visuallizer"/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-600 text-xl title-font px-5 border lg:w-fit bg-yellow-100 border-yellow-500 rounded-xl font-semibold mb-2">
                Expenses Visuallizer
              </h2>
              <p className="leading-relaxed text-base">
                With tracking expenses by just adding them in table you can also
                visuallize them Graphycally to do accurate analysis on them.
              </p>
              <a className="mt-3 text-purple-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-11/12 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-600 text-xl title-font px-5 border lg:w-fit bg-yellow-100 border-yellow-500 rounded-xl font-semibold mb-2">
                Eventwise Expense Organizer
              </h2>
              <p className="leading-relaxed text-base">
                To Manage and Track all your expenses in particular event
                seamlessly with the provision of adding Receipt or Bill of
                expenses No worries of loosing the important bills.
              </p>
              <a className="mt-3 text-purple-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-500 flex-shrink-0">
            <img src="/EEO_circular.png" alt="Eventwise Expense Organizer"/>
            </div>
          </div>
          <div className="flex items-center lg:w-11/12 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-500 flex-shrink-0">
              <img src="/ES_circular.png" alt="Expense Splitter"/>
                          </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-600 text-xl title-font px-5 border lg:w-fit bg-yellow-100 border-yellow-500 rounded-xl font-semibold mb-2">
                Expense Splitter
              </h2>
              <p className="leading-relaxed text-base">
                Once you organize your expenses in events Further you can split
                that expenses with friends also.
              </p>
              <a className="mt-3 text-purple-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWwidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto mt-20 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
    </>
  );
}
