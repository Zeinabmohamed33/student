import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Editestudentadminn() {
      const navigate = useNavigate();
  
  return (
        <div>
    <div className="p-6">
   <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#161B39] mb-4">
     {/* <img src={back} alt="Back" /> */}
    
     <i className="fa-solid fa-arrow-left-long" />
     <h1>BACK</h1>
     <h1 className='text-[#71717A] '>all students  </h1>

     <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
<h1 className='text-[#71717A] '>add student to course  </h1>
     
   </button>
     
     <div>
     <h1 className="  text-[#161B39] mb-4">student name:  <span className='ml-20'> mohamed ahmed ali </span> </h1>
   <h1 className="  text-[#161B39] mb-4"> student academic ID: <span className='ml-20'> 800016578   </span> </h1>
   <div  className="leading-7 text-gray-700">



     <div className='flex flex-wrap gap-4 mt-8'>
  <button className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px] flex items-center justify-center gap-2">
    <input type="checkbox" className="accent-[#161B39] w-3 h-3" />
    IT
  </button>



   <button className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px] flex items-center justify-center gap-2">
    <input type="checkbox" className="accent-[#161B39] w-3 h-3" />
    IT
  </button>




   <button className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px] flex items-center justify-center gap-2">
    <input type="checkbox" className="accent-[#161B39] w-3 h-3" />
    IT
  </button>




   <button className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px] flex items-center justify-center gap-2">
    <input type="checkbox" className="accent-[#161B39] w-3 h-3" />
    IT
  </button>



   <button className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px] flex items-center justify-center gap-2">
    <input type="checkbox" className="accent-[#161B39] w-3 h-3" />
    IT
  </button>



   <button className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px] flex items-center justify-center gap-2">
    <input type="checkbox" className="accent-[#161B39] w-3 h-3" />
    IT
  </button>
</div>


 <div className="flex justify-center mt-14 w-[90%]">
    <button className='bg-[#161B39] text-white  w-[191px] h-[49px] rounded-[12px]'>save </button>
  </div>



   </div>
      
     </div>
   
 </div>
 </div>
  )
}
