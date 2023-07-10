"use client";
import React, { useState } from "react";
import FamilyEventCreatorForm from "./FamilyEventCreatorForm";
import BusinessEventCreatorForm from "./BusinessEventCreatorForm";

export default function CreateEventUI() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className=" font-extrabold text-4xl p-3 text-yellow-500 underline underline-offset-8 bg-purple-300">
        Create New Event
      </div>
      <div className="flex flex-col items-center w-1/2 ml-3">
        <div className="p-3 text-xl font-bold text-purple-500 border-b-2 border-b-purple-300">
          Please Select catagory of Event
        </div>
        <div className="flex flex-row flex-wrap justify-center mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Family and Friend Event
          </label>
          <label className="mr-4">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Business Event
          </label>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:ml-3">
          {selectedOption === "option1" && <FamilyEventCreatorForm />}
          {selectedOption === "option2" && <BusinessEventCreatorForm />}
        </div>
        <div className="w-full lg:w-1/2 mx-4">
          {selectedOption === "option1" && (
            <img
              src="/Family and Friends Event Image.jpg"
              alt="illustration"
              className="w-full"
            />
          )}
          {selectedOption === "option2" && (
            <img
              src="/Business Event Image.jpg"
              alt="illustration"
              className="w-full"
            />
          )}
        </div>
      </div>
    </>
  );
}
