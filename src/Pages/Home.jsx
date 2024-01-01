import React from "react";
import homeimg from "../Assets/homepage.jpg";

export const Home = () => {
  return (
    <div className="Home">
      <div>
        <img
          src={homeimg}
          alt="Homepage"
          className=" w-1/2 h-96 pt-2 pb-24 pl-10 rounded-full"
        />
      </div>
    </div>
  );
};
