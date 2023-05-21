import profile_image from "../images/profile_image.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
function Settings_() {
  const [open, setOpen] = useState(false);
  const open_username_edit = () => {
    setOpen(!open);
  };
 const [password, setPassword] = useState(false)
  const edit_password = () => {
    setPassword(!password);
  }
  return (
    <div>
      <div className="main">
        {/* .................... header profile and image */}
        <div className="header_profile relative  w-[1000px] bg-gray-300 h-[100px]">
          <div className="image_profile absolute top-10 left-4 ">
            <img
              className="w-[160px] h-[160px] rounded-full"
              src={profile_image}
              alt=""
            />
            <h2 className="font-serif font-bold pt-4">Abdirsaq nor osman</h2>
          </div>
        </div>
        {/* ............... user list */}
        <div className="user_list absolute  top-72 left-6">
          <h3 className="font-bold">
            Name:
            <span className="ml-20 font-normal border-gray-400 py-[4px] pr-[70px] pl-[4px] border-2">
              Abdirsaq nor osman
            </span>
          </h3>
          <h3 className="font-bold mt-6">
            Email:
            <span className="ml-20 font-normal border-gray-400 py-[4px] pr-[70px] pl-[4px] border-2">
              rasaaq883@gmail.com
            </span>
          </h3>
          <h3 className="font-bold mt-6">
            Phone:
            <span className="ml-[74px] font-normal border-gray-400 py-[4px] pr-[70px] pl-[4px] border-2">
              252617654543
            </span>
          </h3>
          <h3 className="font-bold mt-6">
            City:
            <span className="ml-[88px] font-normal border-gray-400 py-[4px] pr-[70px] pl-[4px] border-2">
              mogdisho
            </span>
          </h3>
          {/* .................... edit username and passowrd */}
          <form action="">
            {/* .............username  */}
            <div className="username mt-6 flex">
              <h3 className="font-bold">
                Username:
                <span className="ml-10 font-normal border-gray-400 py-[4px] pr-[70px] pl-[4px] border-2">
                  abdirsaqNor
                </span>
              </h3>
              <h5 className="ml-10 cursor-pointer" onClick={open_username_edit}>
                <FontAwesomeIcon icon={faPen} />
              </h5>
            </div>
            {/* .........username edit popup */}
            <div className="username_edit ">
              {open && (
                <div className="bg-gray-200 rounded-md shadow-xl  w-[220px] h-[110px] relative -top-10 left-24">
                  <form action="" className="flex flex-col items-start   ">
                    <input
                      type="text"
                      placeholder="enter username"
                      className="mt-4 w-[170px] outline-none ml-2 p-2 rounded-md"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 rounded-md text-white w-[150px] ml-2 mt-2 h-[40px]"
                    >
                      Edit
                    </button>
                  </form>
                </div>
              )}
            </div>
            {/* .............user password */}
            <div className="username mt-6 flex">
              <h3 className="font-bold">
                Password:
                <span className="ml-10 font-normal border-gray-400 py-[4px] pr-[70px] pl-[4px] border-2">
                  ***********
                </span>
              </h3>
              <h5 className="ml-14 cursor-pointer" onClick={edit_password}>
                <FontAwesomeIcon icon={faPen} />
              </h5>
            </div>
            {/* .........user passowrd edit popup */}
            <div className="username_edit ">
              {password && (
                <div className="bg-gray-200 rounded-md shadow-xl  w-[220px] h-[110px] relative -top-10 left-24">
                  <form action="" className="flex flex-col items-start   ">
                    <input
                      type="text"
                      placeholder="enter password"
                      className="mt-4 w-[170px] outline-none ml-2 p-2 rounded-md"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 rounded-md text-white w-[150px] ml-2 mt-2 h-[40px]"
                    >
                      Edit
                    </button>
                  </form>
                </div>
              )}
            </div>

            <button className="bg-red-500 text-white w-[100px] h-[40px] my-10" type="submit">Save</button>
          </form>
          {/* .................end */}
        </div>
      </div>
    </div>
  );
}
export default Settings_;
