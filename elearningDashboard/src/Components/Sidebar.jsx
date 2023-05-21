import { Routes, Route, Link } from "react-router-dom";
// ........... pages......
import Dashboard from "../Pages/Dashboard";
import AddStudents from "../Pages/AddStudents";
import AllStudents from "../Pages/AllStudents";
import StudentPromotion from "../Pages/StudentPromotion";
import AddTeachers from "../Pages/AddTeachers";
import AllTeachers from "../Pages/AllTeachers";
import FeesGroups from "../Pages/FeesGroups";
import StudentFees from "../Pages/StudentFees";
import Expenses from "../Pages/Expenses";
import AddExpenses from "../Pages/AddExpenses";
import Parents from "../Pages/Parents";
import Subjects from "../Pages/Subjects";
import Settings from "../Pages/Settings";
// ............ end pages
import logo from "../assets/images/logo.jpg";
// ...... react icons
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";
// ................. font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faGauge,
  faPeopleGroup,
  faUserGroup,
  faUserDoctor,
  faFileInvoiceDollar,
  faBookOpen,
  faGear,
  faBell,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// ...................... frame motion
import { motion } from "framer-motion";

// const icon_up = <FontAwesomeIcon icon="fa-solid fa-angle-up" />;

function Sidebar() {
  // students dropdown
  const [toggle_angel, setToggle_angel] = useState(false);

  const btn_toggle = () => {
    setToggle_angel(!toggle_angel);
  };

  // .... teachers dropw down
  const [teachers, setTeachers] = useState(false);
  const HandleTeachers = () => {
    setTeachers(!teachers);
  };

  // ..... Accoutn dropdown list
  const [account, setAccount] = useState(false);

  const handleAccount = () => {
    setAccount(!account);
  };
  // .......... fabars.......
  const [openfabar, setOpenfabar] = useState(true);
  const handleopen = () => {
    setOpenfabar(!openfabar);
  };

  return (
    <div className="flex  ">
      {/* ............. navbar.... */}
      {/* ................ sibarka markuu furan yhay navabrka left-52 */}
      {openfabar ? (
        <div className="fixed  left-52 z-30">
          <div className=" bg-white shadow-lg w-[1040px]   h-[50px] flex items-center justify-between px-4 ">
            {/* ......search input and menu bars */}
            <div>
              <span onClick={handleopen} className="text-lg cursor-pointer">
                <FontAwesomeIcon icon={faBars} />
              </span>

              <input className="focus:ring-2 ring- border-2 border-gray-200 rounded-sm focus:border-none outline-none ml-4 px-2 focus:ring-green-400" type="text" placeholder="search ..."/>
            </div>
            {/* ..... menu profile */}
            <div className="flex p ">
              <span className="px-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="px-2">
                <FontAwesomeIcon icon={faBell} />
              </span>

              <img className="w-[40px] px-2" src={logo} alt="" />
            </div>
          </div>
        </div>
      ) : (
        // ..... markuu xiran yahay sidebarka navbarka -left-16
        <div className="fixed left-4 z-30">
          <div className="bg-white shadow-lg w-[1040px]  h-[50px] flex items-center justify-between px-4 ">
            {/* ......search input and menu bars */}
            <div>
              <span onClick={handleopen} className="text-lg cursor-pointer">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </div>
            {/* <input className="border-green-600 border-2" type="text" placeholder="Search ..."/> */}
            {/* ..... menu profile */}
            <div className="flex p ">
              <span className="px-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="px-2">
                <FontAwesomeIcon icon={faBell} />
              </span>

              <img className="w-[40px] px-2" src={logo} alt="" />
            </div>
          </div>
        </div>
      )}
      {/* ......... end navbar */}
      {openfabar && (
        <div className="fixed left-2">
          <div className="bg-[#36117e] w-[200px] h-screen absolute text-gray-300  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 transition">
            {/* ....... logo school and  name */}
            <div className="flex justify-between p-2 ">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={logo}
                alt="waa image"
              />

              <h4 className="pt-2 font-serif text-white font-medium text-[14px]">
                Al-Qasimi School
              </h4>
            </div>
            {/* ......... rounting or linking  */}

            <nav className="-z-30">
              <ul>
                <li className="flex p-4 ">
                  <span>
                    <FontAwesomeIcon icon={faGauge} />
                  </span>
                  <Link className="pl-4" to="/">
                    Dashbaord
                  </Link>
                </li>
                <li className="flex p-4" onClick={btn_toggle}>
                  <span className="pt-0">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                  </span>
                  <Link className="pl-4" to="#">
                    Students
                  </Link>
                  <button className="pl-10">
                    <span>
                      <FontAwesomeIcon icon={faAngleUp} />
                    </span>
                  </button>
                </li>
                {toggle_angel && (
                  <div className="pl-10 text-[13px]">
                    <li className="py-2">
                      <Link to="/AllStudents">All students</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/AddStudents">Add students</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/StudentPromotion">Student Promotion</Link>
                    </li>
                  </div>
                )}

                <li className="flex p-4">
                  <span className="pt-0">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </span>
                  <Link className="pl-4" to="/Parents">
                    Parents
                  </Link>
                </li>
                <li onClick={HandleTeachers} className="flex p-4">
                  <span className="pt-0">
                    <FontAwesomeIcon icon={faUserDoctor} />
                  </span>
                  <Link className="pl-4" to="#">
                    Teachers
                  </Link>
                  <span className="pl-10 pt-0">
                    <FontAwesomeIcon icon={faAngleUp} />
                  </span>
                </li>
                {/* ...... teachers dropdown list  */}
                <div className="pl-10 text-[13px]">
                  {teachers && (
                    <li className="py-2">
                      <li>
                        <Link to="/Allteachers">All teachers</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Addteachers">Add teacher</Link>
                      </li>
                    </li>
                  )}
                </div>
                <li className="flex p-4" onClick={handleAccount}>
                  <span className="pt-0">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                  </span>
                  <Link className="pl-4" to="#">
                    Account
                  </Link>

                  <span className="pl-10 pt-0">
                    <FontAwesomeIcon icon={faAngleUp} />
                  </span>
                </li>

                {/* Account dropdown  list  account*/}

                <div className="pl-10 text-[13px]">
                  {account && (
                    <li>
                      <li className="py-2">
                        <Link to="/Feesgroup">Fees group</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Studentfees">Student fees</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/expenses">Expenses</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Addexpenses">Add expenses</Link>
                      </li>
                    </li>
                  )}
                </div>
                <li className="flex p-4">
                  <span>
                    <FontAwesomeIcon icon={faBookOpen} />
                  </span>
                  <Link className="pl-4" to="/subjects">
                    Subjects
                  </Link>
                </li>
                <li className="flex p-4">
                  <span>
                    <FontAwesomeIcon icon={faGear} />
                  </span>
                  <Link className="pl-4" to="/settings">
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* ................. here pages */}
      {/* pages */}
      {/* markuu furan yahy sidebarka pages-ka left-52 */}
      {openfabar ? (
        <motion.div animate={{ x: 100 }} className=" relative left-28  top-16">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/AllStudents" element={<AllStudents />}></Route>
            <Route path="/AddStudents" element={<AddStudents />}></Route>
            <Route
              path="/StudentPromotion"
              element={<StudentPromotion />}
            ></Route>
            <Route path="/Parents" element={<Parents />}></Route>
            <Route path="/Allteachers" element={<AllTeachers />}></Route>
            <Route path="/Addteachers" element={<AddTeachers />}></Route>
            <Route path="/Feesgroup" element={<FeesGroups />}></Route>
            <Route path="/Studentfees" element={<StudentFees />}></Route>
            <Route path="/expenses" element={<Expenses />}></Route>
            <Route path="/Addexpenses" element={<AddExpenses />}></Route>
            <Route path="/subjects" element={<Subjects />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </motion.div>
      ) : (
        // ........ markuu xiran yahay sidebarka page-ka -left-16
        <motion.div animate={{ x: 100 }} className="relative -left-20 top-16 ">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/AllStudents" element={<AllStudents />}></Route>
            <Route path="/AddStudents" element={<AddStudents />}></Route>
            <Route
              path="/StudentPromotion"
              element={<StudentPromotion />}
            ></Route>
            <Route path="/Parents" element={<Parents />}></Route>
            <Route path="/Allteachers" element={<AllTeachers />}></Route>
            <Route path="/Addteachers" element={<AddTeachers />}></Route>
            <Route path="/Feesgroup" element={<FeesGroups />}></Route>
            <Route path="/Studentfees" element={<StudentFees />}></Route>
            <Route path="/expenses" element={<Expenses />}></Route>
            <Route path="/Addexpenses" element={<AddExpenses />}></Route>
            <Route path="/subjects" element={<Subjects />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </motion.div>
      )}
      {/* <motion.div animate = {{x: 100}} className="relative left-2 top-10" >
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/AllStudents" element={<AllStudents />}></Route>
          <Route path="/AddStudents" element={<AddStudents />}></Route>
          <Route
            path="/StudentPromotion"
            element={<StudentPromotion />}
          ></Route>
          <Route path="/Parents" element={<Parents />}></Route>
          <Route path="/Allteachers" element={<AllTeachers />}></Route>
          <Route path="/Addteachers" element={<AddTeachers />}></Route>
          <Route path="/Feesgroup" element={<FeesGroups />}></Route>
          <Route path="/Studentfees" element={<StudentFees />}></Route>
          <Route path="/expenses" element={<Expenses />}></Route>
          <Route path="/Addexpenses" element={<AddExpenses />}></Route>
          <Route path="/subjects" element={<Subjects />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </motion.div> */}

      {/* ...... end pages......... */}
    </div>
  );
}
export default Sidebar;
