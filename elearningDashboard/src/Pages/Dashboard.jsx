import logo from "../assets/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faPerson } from "@fortawesome/free-solid-svg-icons";
import Charts from "../Components/Charts";
import EventCalender from "../Components/EventCalender";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <motion.div
      animate={{ x: 10 }}
      className=""
    >
      <h1 className=" pt-10 font-bold text-xl text-gray-700">
        Admin Dashboard
      </h1>
      {/* ....... cards.... */}
      <div className="card  lg:flex lg:flex-shrink md:grid md:grid-cols-3 md:gap-y-2 flex-wrap sm:gap-x-0 sm:space-x-1 sm:grid sm:grid-cols-2 sm:gap-y-2 p-0">
        {/* card one */}
        <div className="bg-white  shadow-md w-[200px] h-[100px] flex items-center">
          <div>
            <span className="  mt-16 pl-4 bg-[#c2ffc2] px-4 py-4  ml-2 rounded-full">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-green-600"
              />
            </span>
          </div>
          <div className="flex flex-col pl-10">
            <h1 className="text-gray-500">Students</h1>
            <p>10,000</p>
          </div>
        </div>
        {/* ... card two */}
        <div className=" bg-white lg:mx-4 shadow-md w-[200px] h-[100px] flex items-center ml-0">
          <div>
            <span className="  mt-16 pl-4 bg-[#d1d1fb] px-[22px] py-2 ml-2 rounded-full text-2xl">
              <FontAwesomeIcon icon={faPerson} className="text-[#4f4fce]" />
            </span>
          </div>
          <div className="flex flex-col pl-10">
            <h1 className="text-gray-500">Teachers</h1>
            <p>1500</p>
          </div>
        </div>
        {/* ...card three */}
        <div className=" bg-white lg:mx-4 shadow-md w-[200px] h-[100px] flex items-center">
          <div>
            <span className="  mt-16 pl-4 bg-[#ffffbe] px-4 py-4  ml-2 rounded-full">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-[#96963a]"
              />
            </span>
          </div>
          <div className="flex flex-col pl-10">
            <h1 className="text-gray-500">Parents</h1>
            <p>10,000</p>
          </div>
        </div>
        {/* ....card four */}
        <div className="bg-white lg:mx-4 shadow-md w-[200px] h-[100px] flex items-center ml-0">
          <div>
            <span className="  mt-16 pl-4 bg-[#ffbebe] px-4 py-4  ml-2 rounded-full">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-[#8c4141]"
              />
            </span>
          </div>
          <div className="flex flex-col pl-10">
            <h1 className="text-gray-500">Earnings</h1>
            <p>$100,000</p>
          </div>
        </div>
      </div>
      {/* .....end cards */}
      {/* ....... charts component */}
      <Charts />
      <EventCalender />
    </motion.div>
  );
}
export default Dashboard;
