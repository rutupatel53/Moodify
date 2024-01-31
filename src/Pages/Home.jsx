import React, { useState } from "react";
import homeimg from "../Assets/homepage.jpg";
import Calendar from "../Component/Calendar/Calendar";
import smile from "../Assets/smile.svg";
import sad from "../Assets/c.svg";
import angry from "../Assets/angry.svg";
import normal from "../Assets/Normal.svg";
import cool from "../Assets/cool.svg";

export const Home = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedInput, setSelectedInput] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  const handleInputClick = (e) => {
    setSelectedInput(e.target.value);
  };

  return (
    <div className="Home  pl-52">
      <div className="float-right mr-96 border-r-4 w-0.5 border-black-100 p-4 h-[880px]">
        <div className="w-96 h-96">
          <Calendar />
        </div>
      </div>

      <img
        src={homeimg}
        alt="Homepage"
        className="w-[750px] h-96 pt-4 pb-20 ml-24 rounded-full"
      />
      <div className="-mb-3 ml-14">
        <div>
          <h1 className="text-blue-500 flex items-center  justify-center text-lg">
            How was Your day?
          </h1>
          <p className="text-black-200 flex justify-center text-sm ">
            Rate Your day And Tell us what you Have explore today?
          </p>
        </div>
        <div className="justify-between flex-col-4">
          <div className="float-start">
            <div>
              <img
                src={smile}
                onClick={handleMoodClick}
                className="h-20 w-20 mt-10 ml-28"
              />
              <p
                className="flex ml-32
               mt-2"
              >
                Happy
              </p>
            </div>
          </div>
          <div className="float-left">
            <img
              src={sad}
              onClick={handleMoodClick}
              className="h-20 w-20 ml-24 mt-10"
            />
            <p className="flex ml-28 pl-2 mt-2">Sad</p>
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
        <button
          type="button"
          className="px-4 py-2 ml-[350px] mt-5 bg-blue-500 text-white rounded-md ml-24 hover:bg-blue-600"
        >
          Store Memories!
        </button>
      </div>
    </div>
  );
};
