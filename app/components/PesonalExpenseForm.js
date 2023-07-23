"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import SmallExpenseTable from "./SmallExpenseTable";

export const PesonalExpenseForm = () => {
  const [date, setDateInput] = useState("");
  const [givento, setNameInput] = useState("");
  const [Ammount, setAmmountInput] = useState(0);
  const [ExpenseNote, setNoteInput] = useState("");
  const [ExpenseSubmitted, setExpenseSubmitted] = useState(false);

  const { data } = useSession();
  const User_Email = data?.user?.email;
  const handleExpenseSubmittedClick = () => {
    setExpenseSubmitted(true);
  };
  useEffect(() => {
    const getExpense = async () => {
      axios
        .get("/api/expenseui")
        .then((response) => {
          // setExpense(response.data[]);
          // console.log(response.data[1].User_Email);
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].User_Email === User_Email) {
              setExpense(response.data[i].Expenses.splice(-5).reverse());
            }
          }
        })
        .catch((error) => {
          console.log("Failed to fetch expenses", error);
        });
    };
    getExpense();
    if (ExpenseSubmitted) {
      setExpenseSubmitted(false);
    }
  }, [ExpenseSubmitted]);
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

  const isClearDisabled = date !== "" || givento !== "" || Ammount !== 0;
  const isAddExpenseDisables = date !== "" && givento !== "" && Ammount > 0;
  const ExpensesubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/expenseui", {
        User_Email,
        Expenses: [{ date, givento, Ammount, ExpenseNote }],
      });
      console.log(data);
      handleExpenseSubmittedClick();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
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
          <SmallExpenseTable />
        </div>
      </section>
    </>
  );
};
