import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
function Add_teachers() {
  const [startDate, setStartDate] = useState(new Date());
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div>
      <div>
        <div className="student flex flex-col ml-4">
          <h3 className="text-2xl font-bold font-serif">Teachers</h3>
          <span className="flex w-[50px] border-b-2 border-red-600"></span>
        </div>

        <div className=" student_add_admin bg-white mt-8 shadow-2xl w-[1020px] h-[120vh] mb-10">
          {/* .................. add student form  */}
          <h2 className="pt-4 pl-2 font-semibold text-gray-700 text-2xl">
            Add New Teacher
          </h2>
          <div className="forms pt-10 pl-2">
            <form className="" action="">
              {/* .................. add student form  */}
              <div className="grid grid-cols-4 add_student_grid ">
                <div className="name_input_div flex flex-col">
                  <label className="font-serif font-semibold" htmlFor="">
                    Name *
                  </label>
                  <input
                    className="name_input border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                    type="text"
                  />
                </div>
                {/* ................ sec type input */}
                <div className="sex sex_type_input">
                  <label htmlFor="" className="pl-2">
                    Sex
                  </label>
                  <select
                    name=""
                    id=""
                    className="sex_class_type w-[240px] mt-[1px] cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                  >
                    <option value="">Please select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                {/* ................ class input */}
                <div className="class class_type_div">
                  <label htmlFor="" className="pl-2">
                    Class *
                  </label>
                  <select
                    name=""
                    id=""
                    className="class_type_input mt-[1px] w-[200px] mt-6 cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                  >
                    <option value="" className="">
                      Please select Class
                    </option>
                    <option value="form 1">Form 1</option>
                    <option value="form 2">Form 2</option>
                    <option value="form 3">Form 3</option>
                    <option value="form 4">Form 4</option>
                  </select>
                </div>
                {/* ................ date birth input */}
                <div className="flex flex-col class_type_div">
                  <div>
                    <label htmlFor="" className="pl-[10px]">
                      Date of Birth *
                    </label>
                  </div>
                  <div className="class_type_input pt-2 mt-[1px] w-[200px] mt-6 cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm">
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

                {/* ................. blood group input */}
                <div className="mt-4 blood_type_div">
                  <label htmlFor="">Blood type *</label>
                  <input
                    type="text"
                    className="blood_type_input border-2 w-[250px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                  />
                </div>
                {/* .............. religion */}
                <div className="Religion_type_div mt-4">
                  <label htmlFor="" className="pl-2">
                    Religion *
                  </label>
                  <select
                    name=""
                    id=""
                    className="Religion_type_input w-[240px] mt-[1px] cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                  >
                    <option value="">Please select Religion</option>
                    <option value="Islam">Islam</option>
                    <option value="Crestin">Crestin</option>
                    <option value="Buddis">Buddis</option>
                  </select>
                </div>
                {/* .................... admition date */}
                <div className="flex flex-col mt-4">
                  <div>
                    <label htmlFor="" className="pl-[10px] ">
                      Admission date *
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

              {/* ............... upload student photo */}
              <div className="upload_photo flex mt-10">
                <img
                  className="bg-white w-[280px] shadow-2xl h-[200px] rounded-full "
                  alt="preview image"
                  src={image}
                />
                <div className="mt-20 ml-10 flex flex-col">
                  <label htmlFor="" className="text-xl font-semibold">
                    upload teacher photo (150 x 150)
                  </label>
                  <input
                    type="file"
                    onChange={onImageChange}
                    className="filetype mt-2"
                  />
                </div>
              </div>

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
      </div>
    </div>
  );
}
export default Add_teachers;
