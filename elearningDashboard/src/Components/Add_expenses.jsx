import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
function Add_expenses() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      {/* .............. add expenses */}
      <div className="forms pt-10 pl-2">
        <form className="" action="">
          {/* .................. add name form  */}
          <div className="grid grid-cols-4 add_student_grid ">
            <div className="name_input_div flex flex-col">
              <label className="font-serif font-semibold" htmlFor="">
                Name *
              </label>
              <input
                className="w-[250px] border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                type="text"
              />
            </div>
            {/* ................ Expenses type input */}
            <div className="sex sex_type_input flex flex-col">
              <label htmlFor="" className="pl-2">
                Expenses type *
              </label>
              <select
                name=""
                id=""
                className="sex_class_type w-[200px] mt-[1px] cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              >
                <option value="">Expenses type</option>
                <option value="Male">Salary</option>
                <option value="Female">Transparent</option>
              </select>
            </div>
            {/* ................ Status input */}
            <div className="class class_type_div flex flex-col">
              <label htmlFor="" className="pl-2">
                Status *
              </label>
              <select
                name=""
                id=""
                className="class_type_input mt-[1px] w-[200px] mt-6 cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              >
                <option value="" className="">
                  Please select status
                </option>
                <option value="form 1">Paid</option>
                <option value="form 2">Unpaid</option>
              </select>
            </div>
            {/* ................ Amount input */}

            <div className="mt-0 blood_type_div flex flex-col">
              <label htmlFor="">Amount *</label>
              <input
                type="text"
                className="blood_type_input border-2 w-[250px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              />
            </div>
            {/* ................. Phone input */}
            <div className="mt-4 blood_type_div flex flex-col">
              <label htmlFor="">Phone *</label>
              <input
                type="text"
                className="blood_type_input border-2 w-[250px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              />
            </div>
            {/* .............. emaila adress */}
            <div className="mt-4 blood_type_div flex flex-col ml-2">
              <label htmlFor="">Email address *</label>
              <input
                type="text"
                className="blood_type_input border-2 w-[250px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              />
            </div>
            {/* .................... due date */}
            <div className="flex flex-col mt-4">
              <div>
                <label htmlFor="" className="pl-[10px] ">
                  Due date *
                </label>
              </div>
              <div className=" pt-2 mt-[1px] w-[200px] mt-6 cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm">
                <div className="flex">
                  <DatePicker
                    className="flex items-center justify-between   outline-none w-[110px] p-[1px] bg-transparent border-none text-gray-500 cursor-pointer pl-2"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <span>
                    <FontAwesomeIcon
                      className="text-gray-500 text-[14px] pr-4"
                      icon={faCalendar}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ................................ add parents form */}

          <div className="btn flex  mt-20 ml-4">
            <button className="bg-red-700 text-white w-[130px] h-[45px] rounded-sm">
              Save
            </button>
            <button className="bg-[#6918b4] ml-4 text-white w-[130px] h-[45px] rounded-sm">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Add_expenses;
