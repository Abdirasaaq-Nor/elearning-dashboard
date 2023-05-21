function Student_promation() {
  return (
    <div>
      <div className="main_student_promotion">
        <div className="student flex flex-col ml-4">
          <h3 className="text-2xl font-bold font-serif">Students</h3>
          <span className="flex w-[50px] border-b-2 border-red-600"></span>
        </div>
        {/* ................ student promotion form */}
        <form
          className="student_promo_div_main bg-white shadow-xl w-[1000px] h-[300px] px-2 pt-10 mt-8"
          action=""
        > 
        <div className="stue">
                <h3 className="text-2xl">Student Promotion</h3>
        </div>
          <div className="student_promotion grid grid-cols-4 gap-0 pt-6">
            <div className="prom_name_div prom_name_div_margin flex flex-col">
              <label className="font-serif font-semibold" htmlFor="">
                Name *
              </label>
              <input
                className="prom_student_input border-2 w-[240px] border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
                type="text"
              />
            </div>
            {/* ............... current class */}
            <div className="prom_name_div sex">
              <label htmlFor="" className="pl-2">
                Current class
              </label>
              <select
                name=""
                id=""
                className="prom_student_input w-[240px] mt-[1px] cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              >
                <option value="">Please select current class</option>
                <option value="Male">form 1</option>
                <option value="Female">form 2</option>
              </select>
            </div>
            {/* ..............promotion from class */}
            <div className="prom_name_div sex">
              <label htmlFor="" className="pl-2">
                Promotion from class
              </label>
              <select
                name=""
                id=""
                className="prom_student_input w-[240px] mt-[1px] cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              >
                <option value="">Please select class</option>
                <option value="Male">form 1</option>
                <option value="Female">form 2</option>
              </select>
            </div>
            {/* .............. promotion to class */}
            <div className="prom_name_div sex">
              <label htmlFor="" className="pl-2">
                Promotion to class
              </label>
              <select
                name=""
                id=""
                className="prom_student_input w-[240px] mt-[1px] cursor-pointer ml-2 border-2 border-gray-200 outline-none bg-gray-200 h-[45px] rounded-sm"
              >
                <option value="">Please select class</option>
                <option value="Male">form 1</option>
                <option value="Female">form 2</option>
              </select>
            </div>
          </div>
          {/* ........... buttons */}
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
export default Student_promation;
