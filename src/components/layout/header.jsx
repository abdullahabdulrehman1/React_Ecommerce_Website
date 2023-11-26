import React from "react";
import { MdShoppingCart } from "react-icons/md";
// import {AiOutlineLogin} from 'react-icons/md'
import { AiOutlineLogin } from "react-icons/ai";
// import { useAuth } from "../../context/authRoute";
import { toast } from "react-toastify";
import useState from "react";
import { useDispatchContext, useStateContext } from "../../context/authRoute";


const Header = () => {
  const {user,token} = useStateContext();
  const dispatch = useDispatchContext();
  const userstringify = JSON.stringify(user);
  const handlelogout = () => {
    dispatch({
      user: "",
      token: "",
      auth: false,
    });

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
  };
  return (
    <div>
      <nav className="container mx-auto rounded-lg my-5 bg-white border border-gray-600 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="vite.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ecommerce Store
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
              {/* console.log(user.role) */}
                <a
              //  href = {}
              href={`/dashboard/${Number(user?.role) === 1 ? "admin" : "user"}`}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Dashboard
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex py-0 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="mt-1 mr-2">
                    {" "}
                    <MdShoppingCart />{" "}
                  </span>
                  Cart
                </a>
              </li>
              {!user?.auth  ? (
                <>
                  {" "}
                  <li>
                    <a
                      href="/register"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Register
                    </a>
                  </li>
                  <li>
                    <a
                      href="/login"
                      className="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <span className="mt-1 mr-2">
                        {" "}
                        <AiOutlineLogin />{" "}
                      </span>
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li onClick={handlelogout}>
                    <a
                      href="/login"
                      className="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <span className="mt-1 mr-2">
                        {" "}
                        <AiOutlineLogin />{" "}
                      </span>
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
