import "./Navbar.css";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CgLogIn } from "react-icons/cg";
import { AiOutlineTeam } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure id="nav-container" as="nav" className="sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                  <NavLink
                      to="/about"
                      className="text-gray-300 hover:bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium Lamia"
                    >
                      درباره ما
                    </NavLink>
                    <NavLink
                      to="/news"
                      className="text-gray-300 hover:bg-transparent  hover:text-white  rounded-md px-3 py-2 text-sm font-medium Lamia"
                    >
                      اخبار
                    </NavLink>
                    <NavLink
                      to="/"
                      className="text-gray-300 hover:bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium Lamia"
                    >
                      صفحه اصلی
                    </NavLink>
                 
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      id="menu-btn"
                      className="menu-button w-[100px] h-7 sm:w-44 sm:h-10 p-2  justify-center items-center relative flex rounded-sm text-sm focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <svg
                        id="user-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#dedede"
                          d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                        />
                      </svg>
                      <a
                        href=""
                        className="Fredoka uppercase mx-2 text-neutral-100 text-[10px] md:text-sm"
                      >
                        Home
                      </a>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md box-color py-1 shadow-lg ring-1 ring-black ring-opacity-15 focus:outline-none ">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/panel"
                            className={classNames(
                              active
                                ? " text-center text-black font-extrabold "
                                : "",
                              "flex justify-center items-center gap-2 px-4 py-2 text-sm text-center Lamia transition-all hover:text-white hover:-translate-y-1 "
                            )}
                          >
                            <CgProfile size={18} /> پنل
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/login"
                            className={classNames(
                              active
                                ? " text-center text-black font-extrabold"
                                : "",
                              "flex justify-center items-center gap-2 px-4 py-2 text-sm text-center Lamia transition-all hover:text-white hover:-translate-y-1"
                            )}
                          >
                            <CgLogIn size={20} /> ورود
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/about"
                            className={classNames(
                              active
                                ? " text-center text-black font-extrabold"
                                : "",
                              "flex justify-center items-center gap-2 px-4 py-2 text-sm text-center Lamia transition-all hover:text-white hover:-translate-y-1 "
                            )}
                          >
                            <AiOutlineTeam size={20} /> درباره ما
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink
                to="/"
                className="text-gray-300  hover:text-white block rounded-md px-3 py-2 text-base font-medium text-center Lamia"
              >
                صفحه اصلی
              </NavLink>
              <NavLink
                to="/news"
                className="text-gray-300  hover:text-white block rounded-md px-3 py-2 text-base font-medium text-center Lamia"
              >
                اخبار
              </NavLink>
              <NavLink
                to="/shop"
                className="text-gray-300  hover:text-white block rounded-md px-3 py-2 text-base font-medium text-center Lamia"
              >
                محصولات
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
