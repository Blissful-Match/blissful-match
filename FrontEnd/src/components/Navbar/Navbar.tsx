import React from 'react';
import 'flowbite';
// import './Navbar.css';
import logo from '@assets/logo.png';
import user_placeholder from '@assets/images/user-placeholder.png';
//import Home from '../../pages/Home/Home';
//import Login from '../../pages/Login/Login';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/"
                        className="flex items-start space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={logo}
                            className="h-10"
                            alt="Blissful Match Logo"
                        />
                    </NavLink>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src={user_placeholder}
                                alt="user photo"
                            />
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                            id="user-dropdown"
                            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                        >
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900">
                                    Roby F.
                                </span>
                                <span className="block text-sm  text-gray-500 truncate">
                                    roby.f@gmail.com
                                </span>
                            </div>
                            <ul
                                className="py-2"
                                aria-labelledby="user-menu-button"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/members"
                                >
                                    Find Match
                                </NavLink>
                            </li>
                            <li>
                                {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a> */}
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/packages"
                                >
                                    Our Packages
                                </NavLink>
                            </li>
                            <li>
                                {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a> */}
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/contact"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block py-2 px-3 rounded bg-transparent text-black p-0"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
