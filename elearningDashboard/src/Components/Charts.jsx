import Chart from "react-apexcharts";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function Charts() {
  const [state, setSate] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  // ................... donut charts
  const [state2, setState2] = useState({
    options: {},
    series: [44, 55],
    labels: ["A", "B"],
  });
  //   .......... date calender peeker

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mt-6">
      <div className="main_div grid lg:grid-cols-3   gap-2 ">
        {/* ...... div one: Earnings */}
        <div className="bg-white shadow-xl w-[340px]  h-[340px] p-2 ">
          <h1 className="font-semibold text-lg font-serif">Earnings</h1>
          <div className="flex mt-4">
            <div className="total_collection flex flex-col">
              <h5 className="text-sm text-gray-500">Total collections</h5>
              <h2 className="text-lg">$ 22,233</h2>
            </div>
            <div className="Fees_collection flex pl-6 flex-col">
              <h5 className="text-sm text-gray-500">Fees </h5>
              <h2 className="text-lg pl-[5px]">$ 75,233</h2>
            </div>
            {/* ... */}
            <div className="flex absolute left-56 cursor-pointer  ">
              <DatePicker
                className="outline-none w-[110px] p-[1px] bg-none border-none text-gray-500 cursor-pointer"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <span className="relative right-5">
                <FontAwesomeIcon
                  className="text-gray-500 pl-[2px] text-[14px]"
                  icon={faAngleUp}
                />
              </span>
            </div>
            {/* .... */}
          </div>
          {/* ................ line charts here ...... */}
          <div className="line mt-[25px]">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="300"
            />
          </div>
        </div>
        {/* ... div two: expenses  */}
        <div className="bg-white shadow-xl  h-[340px]">
          <div className="flex justify-between px-4 pt-2">
            <h3 className="font-semibold text-lg font-serif">Expenses</h3>
            <span className="text-gray-500">
              <FontAwesomeIcon icon={faEllipsisV} />
            </span>
          </div>

          <div className="flex px-4 ">
            <div className="april">
              <h3 className="text-gray-500 text-[14px]">April 2021</h3>
              <p className="font-semibold">$ 125,00</p>
              <span className="border-b-4 border-green-400 flex w-[80px] mt-2"></span>
            </div>
            <div className="may ml-4">
              <h3 className="text-gray-500 text-[14px]">May 2021</h3>
              <p className="font-semibold">$ 100,00</p>
              <span className="border-b-4 border-blue-400 flex w-[80px] mt-2"></span>
            </div>
            <div className="June ml-4">
              <h3 className="text-gray-500 text-[14px]">June 2021</h3>
              <p className="font-semibold">$ 75,00</p>
              <span className="border-b-4 border-red-500 flex w-[80px] mt-2"></span>
            </div>
          </div>
          {/* ............... bar chart here....... */}
          <div className="barchart mt-8">
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="300"
            />
          </div>
        </div>
        {/* ..... div three students */}
        <div className="bg-white shadow-xl  h-[340px]">
          <div className="flex justify-between px-4 pt-2">
            <h3 className="font-semibold text-lg font-serif">Students</h3>
            <span className="text-gray-500">
              <FontAwesomeIcon icon={faEllipsisV} />
            </span>
          </div>
          {/* ..............  charts here... */}
          <div className="chart_pie mt-[25px]">
            <Chart
              options={state2.options}
              series={state2.series}
              type="donut"
              width="300"
            />
          </div>
          <div className="flex mx-10 mt-10 ">
            <div className="flex flex-col">
              <span className="border-b-4 border-blue-400 flex w-[80px] mt-2"></span>
              <h4>Female</h4>
              <p>30,000</p>
            </div>

            <div class="inline-block h-[50px] min-h-[1em] w-[3px] self-stretch bg-neutral-500 opacity-100 dark:opacity-50 ml-6"></div>

            <div className="flex flex-col ml-8">
              <span className="border-b-4 border-red-500 flex w-[80px] mt-2"></span>
              <h4>Female</h4>
              <p>30,000</p>
            </div>
          </div>
        </div>
        {/* .....end divs */}
      </div>
    </div>
  );
}
export default Charts;

//  <div>
//         <Chart
//           options={state.options}
//           series={state.series}
//           type="line"
//           width="500"
//         />
