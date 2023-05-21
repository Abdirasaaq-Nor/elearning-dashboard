import React, { useState } from "react";
import student_data from '../studnet_data.json'
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
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "Gender", label: "Gender" },
  { id: "class", label: "Class" },
  { id: "parent", label: "Parent" },
  { id: "address", label: "Adress" },
  { id: "dataofbirth", label: "Data of birth" },
  { id: "phone", label: "Phone" },
];



const App = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="main">
      <div className="flex flex-col my-4">
        <h2 className="text-2xl pl-4">Students</h2>
        <span className="ml-4 flex border-b-2 border-red-700 w-[60px]"></span>
      </div>
      <div className="w-[1000px]">
        <Paper>
          <TableContainer>
            <div className=""></div>

            <div className=" ">
              <h3 className="py-4 pl-4 text-lg font-semibold font-serif text-gray-500">
                All student Data
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
                {student_data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
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
            count={student_data.length}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default App;
