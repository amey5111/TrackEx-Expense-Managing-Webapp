"use client"; // This is a client component
import React, { useEffect } from "react";
import { Chart } from "chart.js";

export default function Analyzer() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: "Applied",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Accepted",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            fill: false,
          },
          {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Pending",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            fill: false,
          },
          {
            data: [6, 3, 2, 2, 7, 0, 16],
            label: "Rejected",
            borderColor: "#c45850",
            backgroundColor: "#d78f89",
            fill: false,
          },
        ],
      },
    });
  }, []);
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center w-full">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <section className="text-gray-600 body-font">
            <div className="container mt-3">
              <div className=" mx-auto flex flex-col text-center w-full mb-5">
                <h1 className="sm:text-4xl text-3xl mx-auto font-medium title-font mb-2 text-gray-900">
                  Expenses Table
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Here you can see all your expenses
                </p>
              </div>
              <div className="lg:w-5/6 w-full mx-auto overflow-auto">
                <table className="table-auto text-left whitespace-no-wrap w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Name
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Date
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Catagory
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
                      <td className="px-4">Start</td>
                      <td className="px-4">5 Mb/s</td>
                      <td className="px-4">15 GB</td>
                      <td className="px-4 text-lg text-gray-900">Free</td>
                      <td class="w-10 text-center">
                        <input name="select" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        Pro
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        25 Mb/s
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        25 GB
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $24
                      </td>
                      <td class="w-10 text-center">
                        <input name="select" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        Business
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        36 Mb/s
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        40 GB
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $50
                      </td>
                      <td class="w-10 text-center">
                        <input name="select" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Exclusive
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        48 Mb/s
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        120 GB
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $72
                      </td>
                      <td class="w-10 text-center">
                        <input name="select" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Exclusive
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        48 Mb/s
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        120 GB
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $72
                      </td>
                      <td class="w-10 text-center">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-full">
          <h1 className="w-fit mx-auto mt-10 text-xl font-semibold capitalize ">
            line Chart
          </h1>
          <div className=" w-full h-full flex mx-auto my-auto">
            <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
              <canvas id="myChart"></canvas>
            </div>
          </div>
          <button className="flex mt-5 mx-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
            Replot
          </button>
        </div>
      </div>
    </section>
  );
}
