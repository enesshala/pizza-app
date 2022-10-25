import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaHouseUser,
  FaPhone,
  FaEnvelope,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

const Index = () => {
  const [user, setUser] = useState(false);

  const navigate = () => {
    window.location = "/";
  };

  return (
    <div className="pt-24 flex justify-center items-center px-10">
      {user ? (
        <div className="mt-44 flex flex-col gap-8 items-center">
          <h1 className="font-medium text-3xl text-center flex gap-6 px-4 items-center sm:gap-0">
            <FaCheckCircle className="w-10 h-10 text-green-400 animate-slit" />
            Your order was successful!{" "}
          </h1>
          <Link
            className="flex gap-4 items-center font-medium text-xl"
            onClick={navigate}
          >
            <FaArrowLeft className="text-red-600 h-8 w-8" />
            Go Back To Main Page
          </Link>
        </div>
      ) : (
        <form
          className="w-80 flex flex-col gap-2 items-center pt-14 md:pt-12 z-0"
          onSubmit={() => setUser(true)}
        >
          <h1 className="text-3xl font-bold pb-8">Sign In</h1>
          <div className="relative mb-6 w-full group">
            <input
              type="text"
              name="floating_email"
              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <FaUserAlt /> Full Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="address"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <FaHouseUser /> Address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <FaPhone /> Phone Number
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <FaEnvelope /> Email address
            </label>
          </div>
          <div className="w-full flex gap-2 items-center justify-start">
            <input type="checkbox" name="check" id="" />
            <label htmlFor="check" className="text-slate-500">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 w-28 h-12 bg-slate-400 text-slate-100 font-semibold tracking-wide hover:bg-slate-500 transition-all ease-in duration-150 rounded-md"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Index;
