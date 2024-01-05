import React from "react";
import homeimg from "../Assets/homepage.jpg";
import Calendar from "../Component/Calendar/Calendar";
import smile from "../Assets/smile.svg";
import sad from "../Assets/c.svg";
import angry from "../Assets/angry.svg";
import normal from "../Assets/Normal.svg";
import cool from "../Assets/cool.svg";

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
      <div>
        <h1 className="text-blue-500 flex items-center  justify-center  text-lg">
          How was Your day?
        </h1>
        <p className="text-black-200 flex justify-center text-sm ">
          Rate Your day And Tell us what you Have explore today?
        </p>
      </div>
      <div className="justify-between flex-col-4">
        <div className="float-start">
          <div>
            <img src={smile} className="h-20 w-20 ml-24 mt-10" />
            <p className="flex ml-28 mt-2">Happy</p>
          </div>
        </div>
        <div className="float-left">
          <img src={sad} className="h-20 w-20 ml-24 mt-10" />
          <p className="flex ml-28 mt-2">Sad</p>
        </div>
        <div className="float-left">
          <img src={cool} className="h-20 w-20 ml-24 mt-10" />
          <p className="flex ml-28 mt-2">Normal</p>
        </div>
        <div className="float-left">
          <img src={angry} className="h-20 w-20 ml-24 mt-10" />
          <p className="flex ml-28 mt-2">Angry</p>
        </div>
      </div>
      <div className="mt-24 pt-24">
        <input
          placeholder="tell us more about it"
          className="ml-60 w-96 h-10 pl-1 outline-gray-500 outline outline-2 outline-offset-2 rounded-md"
        />
      </div>
    </div>
  );
};
