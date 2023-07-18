"use client";

import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      // open("/login", "_self");
      // let r = prompt();
      if (data === email) {
        document.getElementById(
          "Register User"
        ).innerHTML = `already have an account
        <a
          href="/login"
          style="color:purple;"
        >
          <u>login</u>
        </a>
        to continue`;
      } else {
        open("/login", "_self");
      }
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <img
          src="/signIn page_Image.png"
          alt="SignIn page"
          height="90%"
          width="85%"
        />
      </div>
      <div className="container bg-purple-100  h-1/2 w-1/2 my-auto ">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-10 col-lg-5 ">
            <form
              className="border border-secondary rounded p-4"
              onSubmit={submitHandler}
            >
              <p className="text-2xl text-center py-2 mb-4  w-1/2 font-bold bg-purple-400 text-yellow-300 mx-auto border rounded-xl">
                Register
              </p>

              <div className="mb-4 w-1/2 mx-auto">
                <label className="font-semibold text-lg" htmlFor="name_field">
                  Name
                </label>
                <input
                  type="text"
                  id="name_field"
                  className=" w-full  border-2 border-purple-500 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4 w-1/2 mx-auto">
                <label className="font-semibold text-lg" htmlFor="email_field">
                  Email address
                </label>
                <input
                  type="email"
                  id="email_field"
                  className=" w-full  border-2 border-purple-500 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 w-1/2 mx-auto">
                <label
                  className="font-semibold text-lg"
                  htmlFor="password_field"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password_field"
                  className=" w-full  border-2 border-purple-500 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" w-fit mb-4 mx-auto">
                <button
                  type="submit"
                  className=" bg-purple-500 text-white p-2 hover:text-yellow-300 border rounded-lg w-fit "
                >
                  Register
                </button>
              </div>
              <div id="Register User" className=" w-fit mx-auto"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
