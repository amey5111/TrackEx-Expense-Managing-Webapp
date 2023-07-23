"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";

export default function SmallExpenseTable() {
    const [Expense, setExpense] = useState([]);
    const [ExpenseSubmitted, setExpenseSubmitted] = useState(false);
    const { data } = useSession();
    const User_Email = data?.user?.email;
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
      },);
      function formatDate(isoDate) {
        const date = new Date(isoDate);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        return `${day}-${month}-${year}`;
      }
  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <section className="text-gray-600 body-font">
              <div className="container mt-3">
                <div className=" mx-auto flex flex-col text-center w-full mb-5">
                  <h1 className="sm:text-4xl text-3xl mx-auto font-medium title-font mb-5 border-b-2 border-b-yellow-300 pb-1 text-gray-900">
                    Recent Expenses
                  </h1>
                  <p className="lg:w-full mx-auto leading-relaxed text-base">
                   
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
                      {Expense.map((expenseItem) => (
                        <tr key={expenseItem._id}>
                          <td className="px-4 py-3">{expenseItem.givento}</td>
                          <td className="px-4 py-3">
                            {formatDate(expenseItem.date)}
                          </td>
                          <td className="px-4 py-3 text-lg text-gray-900">
                            {expenseItem.Ammount}
                          </td>
                          <td className="w-10 text-center">
                            <input name="select" type="checkbox" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex mt-4 w-full mx-auto">
                  <div className=" ml-auto">
                    <a className="flex text-purple-500 border-0 py-2 px-3 focus:outline-none hover:text-purple-600 font-medium cursor-pointer underline underline-offset-4">
                      Manage All Expenses
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
  )
}
