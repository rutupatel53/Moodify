import React from "react";
import homeimg from "../Assets/homepage.jpg";
import Calendar from "../Component/Calendar/Calendar";

export const Home = () => {
  return (
    <div className="Home">
      <div className="float-right mr-96 border-r-4 w-0.5 border-black-100 h-screen p-4">
        <div className="w-96 h-96">
          <Calendar />
        </div>
      </div>

      <img
        src={homeimg}
        alt="Homepage"
        className="w-1/2 h-96 pt-4 pb-24 pl-24 rounded-full"
      />
    </div>
  );
};
