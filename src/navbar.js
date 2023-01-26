import React, { useState } from "react";
import logo from "./images/logo.svg";
import arrowDown from "./images/icon-arrow-down.svg";
import arrowUp from "./images/icon-arrow-up.svg";
import menuOpen from "./images/icon-menu.svg";
import closeMenu from "./images/icon-close-menu.svg";
import planning from "./images/icon-planning.svg";
import reminders from "./images/icon-reminders.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";

const Navbar = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menuBtn");

    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
      menuBtn.src = closeMenu;
    } else {
      menuBtn.src = menuOpen;
    }
  };
  return (
    <main>
      <header className=" p-5 flex justify-between items-center">
        <div className="flex items-start justify-start">
          <img src={logo} alt="" className=" mr-14" />
          <nav className="navbar">
            <div>
              <button
                onClick={() => setOpenFeatures(!openFeatures)}
                className=" flex items-center justify-start opacity-60 hover:opacity-100"
              >
                Features{" "}
                {openFeatures ? (
                  <img src={arrowUp} alt="" className="ml-2" />
                ) : (
                  <img src={arrowDown} alt="" className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg:-ml-6 md:shadow rounded p-4 items-center">
                  <li className=" flex justify-start items-center text-sm mb-2">
                    <img src={todo} alt="" className=" mr-2" />
                    Todo list
                  </li>
                  <li className=" flex justify-start items-center text-sm mb-2">
                    <img src={calendar} alt="" className=" mr-2" />
                    Calendar
                  </li>
                  <li className=" flex justify-start items-center text-sm mb-2">
                    <img src={reminders} alt="" className=" mr-3" />
                    Reminder
                  </li>
                  <li className=" flex justify-start items-center text-sm mb-2">
                    <img src={planning} alt="" className=" mr-2" />
                    Planning
                  </li>
                </ul>
              )}
            </div>
            <div>
              <button
                onClick={() => setOpenCompany(!openCompany)}
                className=" flex items-center justify-start opacity-60 hover:opacity-100"
              >
                Company{" "}
                {openCompany ? (
                  <img src={arrowUp} alt="" className="ml-2" />
                ) : (
                  <img src={arrowDown} alt="" className="ml-2" />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 md:shadow p-4 rounded items-center">
                  <li className="text-sm mb-2">History</li>
                  <li className="text-sm mb-2">Our Team</li>
                  <li className="text-sm mb-2">Blog</li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0">
              <button className="opacity-60 hover:opacity-100">Careers</button>
            </div>
            <div>
              <button className="opacity-60 hover:opacity-100">About</button>
            </div>
            <div className="flex flex-col items-center justify-between py-8 md:hidden">
              <button className="mb-5 opacity-60 hover:opacity-100">
                Login
              </button>
              <button className="border-2 border-black opacity-60 hover:opacity-100 py-2 px-10 rounded-2xl w-full">
                Register
              </button>
            </div>
          </nav>
        </div>
        <div className=" md:hidden">
          <button onClick={handleOpenMenu}>
            <img src={menuOpen} alt="" className="menuBtn" />
          </button>
        </div>
        <div className=" hidden md:block">
          <button className="mr-10 opacity-60 hover:opacity-100">Login</button>
          <button className="border-2 border-black opacity-60 hover:opacity-100 py-2 px-6 rounded-2xl">
            Register
          </button>
        </div>
      </header>
    </main>
  );
};

export default Navbar;
