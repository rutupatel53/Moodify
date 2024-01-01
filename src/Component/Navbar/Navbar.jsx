import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/moodifylogo.png";
export const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <img src={logo} className="logo" />
      <ul className="Box">
        <li
          className="cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={() => {
            setMenu("Home");
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={() => {
            setMenu("Calendar");
            navigate("/Calendar");
          }}
        >
          Calendar
        </li>
        <li
          className="cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={() => {
            setMenu("Goals");
            navigate("/Goals");
          }}
        >
          Goals
        </li>
      </ul>
    </div>
  );
};
