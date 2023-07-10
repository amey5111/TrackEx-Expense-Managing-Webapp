"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        callbackUrl: "/PesonalETracker",
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="container bg-purple-100  h-1/2 w-1/2 my-auto ">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-10 col-lg-5 ">
            <form
              className="border border-secondary rounded p-4"
              onSubmit={submitHandler}
            >
              <p className=" text-2xl text-center py-2 mb-4  w-1/2 font-bold bg-purple-400 text-yellow-300 mx-auto border rounded-xl">
                Login
              </p>
              <div className=" mb-4 w-fit mx-auto">
                <label
                  className="  font-semibold text-lg"
                  htmlFor="email_field"
                >
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

              <div className=" w-fit form-outline mb-4 mx-auto">
                <label
                  className="  font-semibold text-lg"
                  htmlFor="password_field"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password_field"
                  className=" w-full border-2 border-purple-500 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" w-fit mb-4 mx-auto">
                <button
                  type="submit"
                  className=" bg-purple-500 text-white p-2 hover:text-yellow-300 border rounded-lg w-fit "
                >
                  Login
                </button>
              </div>

              <div className="text-center">
                <p>
                  Not have account?{" "}
                  <Link className=" underline text-purple-500" href="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <div id="problemdiv"></div>
          </div>
        </div>
      </div>
      <div className=" h-3/4 w-1/2 ">
        <img
          src="/loginPage image.png"
          alt="login component images"
          width="90%"
          height={50}
        />
      </div>
    </div>
  );
};

export default Login;
