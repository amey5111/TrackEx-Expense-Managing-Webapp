"use client";
import React, { useState } from "react";
import axios from "axios";
export const PesonalExpenseForm = () => {
  const [date, setDateInput] = useState("");
  const [givento, setNameInput] = useState("");
  const [Ammount, setAmmountInput] = useState(0);
  const [ExpenseNote, setNoteInput] = useState("");

  const handleDateInput = (event) => {
    setDateInput(event.target.value);
  };
  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };
  const handleAmmountInput = (event) => {
    setAmmountInput(event.target.value);
  };
  const handleNoteInput = (event) => {
    setNoteInput(event.target.value);
  };

  const hanndleClearClick = () => {
    setDateInput("");
    setNameInput("");
    setAmmountInput(0);
    setNoteInput("");
  };

  const isClearDisabled =
    date !== "" || givento !== "" || Ammount !== 0;
  const isAddExpenseDisables =
    date !== "" && givento !== "" && Ammount > 0;
  const ExpensesubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/expenseui", {
        date,
        givento,
        Ammount,
        ExpenseNote,
      });
      console.log(data);
      // let r = prompt();
      // document.getElementById(
      //   "Register User"
      // ).innerHTML = `<p> Signed In Successfully just <a href="/login">Login</a> here</p>`;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex md:flex-row flex-col items-center">
        <div className=" ml-3 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium w-fit mx-auto text-center text-gray-900 border-b-2 border-b-yellow-300 pb-1">
            Personal Expnse Tracker
          </h1>
          <p className="mb-8 leading-relaxed">
            To add new expense you can simply fill following fields and press
            Add Expense Button
          </p>
          <div className=" flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Date
              </label>
              <input
                placeholder="When did you gave the momey"
                type="Date"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={date}
                onChange={handleDateInput}
              />
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                placeholder="To whoom you given momey"
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={givento}
                onChange={handleNameInput}
              />
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Ammount in Rs
              </label>
              <input
                placeholder="How much ammount you gave....."
                type="number"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={Ammount}
                onChange={handleAmmountInput}
              />
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Note (optional)
              </label>
              <input
                placeholder=" just a note about expense For what the expense is"
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={ExpenseNote}
                onChange={handleNoteInput}
              />
            </div>
            <button
              className="inline-flex text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded disabled:bg-yellow-200"
              onClick={hanndleClearClick}
              disabled={!isClearDisabled}
            >
              Clear
            </button>
          </div>
          <button
            className=" mt-5 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md disabled:bg-purple-300"
            onClick={ExpensesubmitHandler}
            disabled={!isAddExpenseDisables}
          >
            Add Expense
          </button>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <section className="text-gray-600 body-font">
            <div className="container mt-3">
              <div className=" mx-auto flex flex-col text-center w-full mb-5">
                <h1 className="sm:text-4xl text-3xl mx-auto font-medium title-font mb-5 border-b-2 border-b-yellow-300 pb-1 text-gray-900">
                  Expenses Table
                </h1>
                <p className="lg:w-full mx-auto leading-relaxed text-base">
                  Here you can see your  recent expenses. To See and Analyze your all Expenses click on Analyze all expenses link bellow the table.
                </p>
              </div>
              <div className="lg:w-5/6 w-full mx-auto overflow-auto">
                <table className="table-auto text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Given To
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Date
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Ammount
                      </th>
                      <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                        Choose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3">Grocery Shop</td>
                      <td className="px-4 py-3">11-07-2023</td>
                      <td className="px-4 py-3 text-lg text-gray-900">1000</td>
                      <td className="w-10 text-center">
                        <input name="select" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        Project Element Shop
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        09/05/2023
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        24
                      </td>
                      <td className="w-10 text-center">
                        <input name="select" type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex pl-4 mt-4 lg:w-5/6 w-full mx-auto">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Analyze Expenses
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
                <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                  Deselect All
                </button>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Delete
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
