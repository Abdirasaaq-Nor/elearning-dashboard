import React, { useState } from "react";
import Subjects_data from "../Subjects_data.json";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";

const columns = [
  { id: "Subject name", label: "Subject Name" },
  { id: "Teacher", label: "Teacher" },
  { id: "classes", label: "Classes" },
  { id: "Days", label: "Days" },
];

const App = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="main">
      <div className="flex flex-col my-4">
        <h2 className="text-2xl pl-4">Subject</h2>
        <span className="ml-4 flex border-b-2 border-red-700 w-[60px]"></span>
      </div>
      <div className="w-[1000px]">
        <Paper>
          <TableContainer>
            <div className=""></div>

            <div className=" ">
              <h3 className="py-4 pl-4 text-lg font-semibold font-serif text-gray-500">
                All Subjects Data
              </h3>
              <div className="flex">
                <form action="">
                  <input
                    className="search_input sm:ml-4 bg-gray-200 w-[200px] h-[40px] pl-2 outline-none border-2 border-gray-200"
                    type="text"
                    placeholder="search by name"
                  />
                  <select
                    name=""
                    id=""
                    className=" ml-4  pl-2 text-gray-400 cursor-pointer bg-gray-200 w-[200px] h-[40px] outline-none border-2 border-gray-200"
                  >
                    <label htmlFor="">Classes</label>
                    <option value="">classes one</option>
                    <option value="">classes two</option>
                    <option value="">classes three</option>
                  </select>
                  <button className="search_btn sm:mt-4  sm:mr-10 ml-4 rounded-md bg-red-600 text-white w-[200px] h-[40px] outline-none border-none">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <Table className="">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Subjects_data.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((row) => (
                  <TableRow key={row.id}>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={Subjects_data.length}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      {/* ................ add subjects */}

      <div className="bg-gray-100 w-[1000px] h-[43vh] shadow-2xl mt-20 mb-6">
        <h1 className="pt-4 pl-2 text-2xl">Add new subject</h1>

        <form action="">
          <div className="grid grid-cols-4 mt-6 mx-6">
            {/* ............subject name */}
            <div className="prom_name_div prom_name_div_margin flex flex-col">
              <label className="font-serif font-normal" htmlFor="">
                Subject Name *
              </label>
              <input
                className="prom_student_input border-2 w-[240px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                type="text"
              />
            </div>
            {/* ........... teacher*/}
            <div className="prom_name_div prom_name_div_margin flex flex-col">
              <label className="font-serif font-normal" htmlFor="">
                Teachers Name *
              </label>
              <input
                className="prom_student_input border-2 w-[220px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                type="text"
              />
            </div>

            {/* ........... classes */}
            <div className="prom_name_div prom_name_div_margin flex flex-col">
              <label className="font-serif font-normal" htmlFor="">
                Class Name *
              </label>
              <input
                className="prom_student_input border-2 w-[220px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                type="text"
              />
            </div>

            {/* ..........days */}
            <div className="prom_name_div prom_name_div_margin flex flex-col">
              <label className="font-serif font-normal" htmlFor="">
                Days *
              </label>
              <input
                className="prom_student_input border-2 w-[220px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                type="text"
              />
            </div>
          </div>
          {/* ........... buttons */}
          <div className="btn flex  mt-10 ml-6">
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
};

export default App;
