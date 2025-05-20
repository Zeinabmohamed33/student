import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function Allcourdessadmin() {

    
     const navigate = useNavigate();


     const exportToExcel = () => {
  // بنجيب كل الأزرار اللي جوا الـ div
  const buttons = document.querySelectorAll('.export-area button');

  const exportData = Array.from(buttons).map((btn) => ({
    Course: btn.textContent.trim(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Courses");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const dataBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(dataBlob, "courses.xlsx");
};

  return (
    <div>
      <div className='items-center lg:flex lg:justify-between '>
           <div className='flex gap-2 m-3 lg:m-3 '>
                       <button onClick={() => navigate(-1) } className='flex gap-2 items-center  text-[#161B39]'>
                       <i className="fa-solid fa-arrow-left-long" />
                       <h1>BACK</h1>
                                  </button>
                 <h1 className='text-[#71717A] '> COURCES</h1>
                 <i className="mt-1 fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A] '> view all </h1>
                
                
      
                 </div>
                 <div className='flex '>
                    <button    onClick={exportToExcel} className='border border-[#161B39] text-[#161B39] m-2 w-48 max-md:text-[13px]  rounded-[8px] h-11'>import from excel sheet</button>
                    <button onClick={() => navigate("/admin-dashboard/newaddcoursesadmin")}  className=' max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-48  rounded-[8px] h-11'>
                   
                    <i className="fa-solid fa-plus" />
                       <p className='p-2' >Add new Course   </p>
                    </button>

                 </div>
                
    </div>

      <div className='flex flex-wrap gap-4 mt-8 export-area'>
  <button onClick={() => navigate("/admin-dashboard/allcourdessadmin/allcourseshtml")} className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px] flex items-center justify-center gap-2">
    IT
  </button>



 
</div>
    </div>
  )
}
