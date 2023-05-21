import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
function EventCalender() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mt-10 mb-10">
      <div className="lg:grid lg:grid-cols-2 md:flex-col sm:flex-col">
        <div className="div_one bg-white lg:w-[500px] md:w-[600px] h-[280px] shadow-xl sm:w-[590px]">
          <div className="flex justify-between px-4 pt-2">
            <h3 className="font-semibold text-lg font-serif text-gray-600">
              Event calendar
            </h3>
            <span className="text-gray-500 cursor-pointer">
              <FontAwesomeIcon icon={faEllipsisV} />
            </span>
          </div>
          {/* .............. date picker use state.... */}
          <div className="flex">
            <div>
              <DatePicker
                className="outline-none w-[110px] p-[1px] bg-none border-none text-gray-500 cursor-pointer pl-6"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <span>
              <FontAwesomeIcon
                className="text-gray-500 text-[14px]"
                icon={faAngleUp}
              />
            </span>
          </div>
        </div>
        {/* .................. second div.............. */}
        <div className="div_two bg-white lg:mt-0 lg:ml-10 lg:w-[400px] h-[410px] md:w-[600px] sm:w-[590px] sm:ml-0 sm:mt-4 shadow-xl ml-10 md:ml-0 md:mt-4">
          <div className="flex justify-between px-4 pt-2">
            <h3 className="font-semibold text-lg font-serif text-gray-600">
              Reminders
            </h3>
            <span className="text-gray-500 cursor-pointer">
              <FontAwesomeIcon icon={faEllipsisV} />
            </span>
          </div>
          {/* ........ */}
          <div className="flex flex-col p-4">
            <button className="bg-green-400 text-white w-[140px] h-[35px]  rounded-lg shadow-lg outline-none border-none">
              16 june, 2022
            </button>
            <p className="text-[14px] text-gray-500 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium deleniti asperiores id, distinctio beatae quam!
            </p>
            <span className="border-b-2 border-gray-200 flex pt-2"></span>
          </div>
          {/* . */}
          <div className="flex flex-col p-4">
            <button className="bg-yellow-400 text-white w-[140px] h-[35px]  rounded-lg shadow-lg outline-none border-none">
              16 Augost, 2022
            </button>
            <p className="text-[14px] text-gray-500 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium deleniti asperiores id, distinctio beatae quam!
            </p>
            <span className="border-b-2 border-gray-200 flex pt-2"></span>
          </div>
          {/* ... */}
          <div className="flex flex-col p-4">
            <button className="bg-[#ff4dff] text-white w-[140px] h-[35px]  rounded-lg shadow-lg outline-none border-none">
              16 , Apri;022
            </button>
            <p className="text-[14px] text-gray-500 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium deleniti asperiores id, distinctio beatae quam!
            </p>
            <span className="border-b-2 border-gray-200 flex pt-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventCalender;
