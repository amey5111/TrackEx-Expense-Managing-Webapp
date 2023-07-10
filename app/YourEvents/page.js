"use client";
import React, { useState } from "react";
import YourEventsBox from "../components/YourEventsBox";
import CreateEventUI from "../components/CreateEventUI";

export default function page() {
  const [showYourEventsComponent, setshowYourEventsComponent] = useState(true);
  const [buttonText, setButtonText] = useState("Create New Event");
  const handleButtonClick = () => {
    if (showYourEventsComponent == true) {
      setshowYourEventsComponent(false);
      setButtonText("Cancel");
    } else {
      setshowYourEventsComponent(true);
      setButtonText("Create New Event");
    }
  };
  return (
    <>
      <div className=" flex flex-row-reverse pr-5 py-5 ">
        <button
          className=" text-white bg-yellow-500 font-bold flex flex-row border-0 w-fit py-2 px-5 ml-auto focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
      {showYourEventsComponent ? <YourEventsBox /> : <CreateEventUI />}
    </>
  );
}
