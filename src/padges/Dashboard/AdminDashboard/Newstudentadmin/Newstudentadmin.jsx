import "simple-datatables/dist/style.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from 'react-router-dom'
// import React, { useState } from 'react';
import React, { useRef } from 'react'
export default function Newstudentadmin() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const nationalIDRef = useRef(null);
  
    const exportToExcel = () => {
      const exportData = [
        {
          Name: nameRef.current.value,
          Email: emailRef.current.value,
          PhoneNumber: phoneRef.current.value,
          NationalID: nationalIDRef.current.value,
        },
      ];
  
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "FormData");
  
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
  
      const dataBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      });
  
      saveAs(dataBlob, "form-data.xlsx");
    };
  return (
    <div>
       <div className='lg:flex items-center  lg:justify-between '>
        <div className='flex  gap-2 m-3 lg:m-3 justify-self-center'>
                    
                 <h1 className='text-[#71717A] '>doctors </h1>
                 <i className="fa-solid fa-chevron-right mt-1" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A] '> view all </h1>
                 <i className="fa-solid fa-chevron-right mt-1" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A] '> add new student </h1>

                
      
                 </div>
                 <div className='flex '>
                    <button onClick={exportToExcel}  className='border border-[#161B39] text-[#161B39] m-2 w-48 max-md:text-[13px]  rounded-[8px] h-11'>import from excel sheet</button>
                    <button className=' max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-48  rounded-[8px] h-11'>
                   
                    <i className="fa-solid fa-check" />
                       <p className='p-2'   >save  </p>
                    </button>

                 </div>
                
    </div>

    <div className='mx-[5%]'>
  <div  className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> Name</label>
<input ref={nameRef} type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div  className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> Email</label>
<input ref={emailRef} type="email" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div   className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> phone number</label>
<input ref={phoneRef} type="tel" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div  className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> National ID</label>
<input ref={nationalIDRef} type="tel" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>



  </div>
    </div>
  )
}


