"use client";
import React, { useState } from "react";

export default function FamilyEventCreatorForm() {
  const [EnameField, setEnameField] = useState("");
  const [EDateField, setEDateField] = useState("");

  const handleEnameFieldChange = (event) => {
    setEnameField(event.target.value);
  };

  const handleEDateFieldChange = (event) => {
    setEDateField(event.target.value);
  };

  const isFormValid = EnameField !== "" && EDateField !== "";
  return (
    <>
      <p className=" bg-blue-300 border rounded-lg py-2">
        <b>Family OR Friends Events: </b> Reprents the Events in which uploading
        Recipts or Bill is optional part{" "}
      </p>
      <div className=" p-3 mt-5">
        <label
          htmlFor="catagory"
          className="mr-3 text-xl font-bold text-violet-500"
        >
          Catagory:
        </label>
        <input
          type="text"
          name="catagory"
          value="Family and Friend Event"
          disabled
          className=" pl-1 text-xl text-gray-400 border border-violet-300 bg-gray-200"
        />
      </div>
      <div className="  text-base bg-blue-300 border p-3 rounded-xl">
        Fill other basic information about the Event
      </div>
      <div className="mt-3 flex flex-col align-middle">
        <div className="my-3 w-full flex">
          <label
            htmlFor="Ename"
            className="mr-3 text-base font-bold text-violet-500 w-full"
          >
            Name of Event:
          </label>
          <input
            type="text"
            name="Ename"
            className=" pl-1 text-base border border-violet-300 w-full"
            value={EnameField}
            onChange={handleEnameFieldChange}
          />
        </div>
        <div className=" flex my-3 w-full">
          <label
            htmlFor="EDate"
            className="mr-3 text-base font-bold text-violet-500 w-full"
          >
            Date of Event
          </label>
          <input
            type="Date"
            name="EDate"
            className=" pl-1 text-base border border-violet-300 w-full"
            value={EDateField}
            onChange={handleEDateFieldChange}
          />
        </div>
        <div className=" flex my-3 w-full">
          <label
            htmlFor="Ediscript"
            className="mr-3 text-base font-bold text-violet-500 w-full"
          >
            Discription of Event (optional)
          </label>
          <input
            type="text"
            name="Ediscript"
            placeholder="Dicription of Event or other note about evet"
            className=" pl-1 text-base border border-violet-300 w-full"
          />
        </div>
        <button
          className=" text-white bg-purple-500 font-bold flex flex-row border-0 w-fit py-2 px-5 ml-auto focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0 disabled:bg-purple-300"
          disabled={!isFormValid}
        >
          Create Event
        </button>
      </div>
    </>
  );
}
