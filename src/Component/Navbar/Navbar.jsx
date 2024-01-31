import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/moodifylogo.png";
import HomeIcon from "../../Assets/HomeIcon.png";
import CalendarIcon from "../../Assets/CalendarIcon.png";
import GoalIcon from "../../Assets/Goalicon.png";
export const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <img src={logo} className="logo" />
      <ul className="Box">
        <li
          className="cursor-pointer hover:bg-gray-300  p-2 rounded"
          onClick={() => {
            setMenu("Home");
            navigate("/");
          }}
        >
          <img src={HomeIcon} className="w-10 h-10 float-start mb-4 " />
          <p className="mt-2 ml-9">Home</p>
        </li>
        <li
          className="cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={() => {
            setMenu("Calendar");
            navigate("/Calendar");
          }}
        >
          <img src={CalendarIcon} className="w-8 h-8 float-start mb-4 " />{" "}
          <p className="ml-9 mt-1">Calendar</p>
        </li>
        <li
          className="cursor-pointer hover:bg-gray-300 p-2 rounded"
          onClick={() => {
            setMenu("Goals");
            navigate("/Goals");
          }}
        >
          <img src={GoalIcon} className="w-8 h-8 float-start mb-4 " />
          <p className="ml-9 mt-1"> Goals</p>
        </li>
      </ul>
    </div>
  );
};
