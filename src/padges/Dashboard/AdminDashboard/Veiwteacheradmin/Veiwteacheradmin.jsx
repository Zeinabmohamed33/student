
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function Veiwteacheradmin() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phonenumber: "",
        nationalId: "",
        birthDate: "",
        education: "",
        address: "",
        password: ""
      });
      useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("students")) || [];
        const selectedStudent = localData.find((s) => s.id === parseInt(id));
        setStudent(selectedStudent);
      
        if (selectedStudent) {
          setFormData({
            name: selectedStudent.name || "",
            email: selectedStudent.email || "",
            phonenumber: selectedStudent.phonenumber || "",
            nationalId: selectedStudent.nationalId || "",
            birthDate: selectedStudent.birthDate || "",
            education: selectedStudent.education || "",
            address: selectedStudent.address || "",
            password: selectedStudent.password || ""
          });
        }
      }, [id]);
            

    useEffect(() => {
      const localData = JSON.parse(localStorage.getItem("students")) || [];
      const selectedStudent = localData.find((s) => s.id === parseInt(id));
      setStudent(selectedStudent);
    }, [id]);
  console.log(JSON.parse(localStorage.getItem("students")))
    if (!student) return <div className="p-4 text-gray-600">Loading...</div>;
  return (
    <div>
         <div className='lg:flex items-center  lg:justify-between '>
        <div className='flex  gap-2 m-3 lg:m-3 justify-self-center'>
                    
                 <h1 className='text-[#71717A] '>doctors </h1>
                 <i className="fa-solid fa-chevron-right mt-1" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A] '> view all </h1>
                 <i className="fa-solid fa-chevron-right mt-1" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A] '> doctor information </h1>

                
      
                 </div>
                 <div className='flex '>
                    <button   className='bg-[#EF1A1D] text-[white] m-2 w-32 max-md:text-[13px]  rounded-[8px] h-11'>delete teacher </button>
                    <button onClick={() => {
    if (isEditing) {
      // Save mode
      const localData = JSON.parse(localStorage.getItem("students")) || [];
      const updatedData = localData.map((s) =>
        s.id === parseInt(id) ? { ...s, ...formData } : s
      );
      localStorage.setItem("students", JSON.stringify(updatedData));
      setStudent({ ...student, ...formData });
    }
    setIsEditing(!isEditing);
  }} className=' max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-32  rounded-[8px] h-11'>
                   
                    <i className="fa-solid fa-pencil" />
                       <p className='p-2'>{isEditing ? 'Save' : 'Edit'}</p>  
                    </button>

                 </div>
                
    </div>

    <div className='mx-[5%]'>
  <div className="mb-5 w-[95%] ">
  <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
        <input
          type="text"
          value={student?.name || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-12"
          readOnly={!isEditing}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        </div>
<div className="mb-5 w-[95%] ">
<label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          value={student?.email || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-12"
          readOnly={!isEditing}
        />  </div>
<div className="mb-5 w-[95%] ">
<label className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
        <input
          type="tel"
          value={student?.phonenumber || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-12"
          readOnly={!isEditing}
        /></div>
<div className="mb-5 w-[95%] ">
<label className="block mb-2 text-sm font-medium text-gray-900">National ID</label>
        <input
          type="tel"
          value={student?.nationalId || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-12"
          readOnly={!isEditing}
        />
</div>
<div className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> date of birth</label>
<input readOnly={!isEditing} type="date" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> education  </label>
<input readOnly={!isEditing} type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>

<div className="mb-5 w-[95%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> home address  </label>
<input readOnly={!isEditing} type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div className="mb-5 lg:w-[95%] lg:flex items-center">
<div className='lg:w-[77%] max-lg:w-[95%]'>
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">  password  </label>
<input readOnly={!isEditing} type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
</div>
<div className='mx-[3%] w-[5%] mt-5'>
    <button onClick={() => navigate("/admin-dashboard/newteacheradmin/chagepassteachers")}
 className='mt-[15%] border-2 border-[#161B39] w-44 h-14 text-[15px] text-[#161B39] rounded-[15px]' > change passowed</button>
</div>

</div>


  </div>
    </div>
  )
}

