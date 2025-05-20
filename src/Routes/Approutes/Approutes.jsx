import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../padges/Auth/Login/Login'
import AdminDashboard from '../../padges/Dashboard/AdminDashboard/AdminDashboard/AdminDashboard'
import Home from '../../component/Home/Home'
import DoctorDashboard from '../../padges/Dashboard/DoctorDashboard/DoctorDashboard/DoctorDashboard'
import StudentDashboard from '../../padges/Dashboard/StudentDashboard/StudentDashboard/StudentDashboard'
import TeacherDashboard from '../../padges/Dashboard/TeacherDashboard/TeacherDashboard/TeacherDashboard'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import DoctorLayout from '../../layouts/DoctorLayout/DoctorLayout'
import StudentLayout from '../../layouts/StudentLayout/StudentLayout'
import TeacherLayout from '../../layouts/TeacherLayout/TeacherLayout'
import Profileteacher from '../../padges/Dashboard/TeacherDashboard/Profileteacher/Profileteacher'
import Changepasswred from '../../padges/Dashboard/TeacherDashboard/Changepasswred/Changepasswred'
import Coursestecher from '../../padges/Dashboard/TeacherDashboard/Coursestecher/Coursestecher'
import Qrcodeteacher from '../../padges/Dashboard/TeacherDashboard/Qrcodeteacher/Qrcodeteacher'
import Allstudentteacher from '../../padges/Dashboard/TeacherDashboard/Allstudentteacher/Allstudentteacher'
import Addnewstudentteacher from '../../padges/Dashboard/TeacherDashboard/Addnewstudentteacher/Addnewstudentteacher'
import Filterbysection from '../../padges/Dashboard/TeacherDashboard/Filterbysection/Filterbysection'
import Sectionattentencereport from '../../padges/Dashboard/TeacherDashboard/Sectionattentencereport/Sectionattentencereport'
import Sectionfinalreport from '../../padges/Dashboard/TeacherDashboard/Sectionfinalreport/Sectionfinalreport'

import Profilestudent from '../../padges/Dashboard/StudentDashboard/Profilestudent/Profilestudent'
import Changepassworedstudent from '../../padges/Dashboard/StudentDashboard/Changepassworedstudent/Changepassworedstudent'
import Coursesstudent from '../../padges/Dashboard/StudentDashboard/Coursesstudent/Coursesstudent'
import Scanqrcodestudent from '../../padges/Dashboard/StudentDashboard/Scanqrcodestudent/Scanqrcodestudent'
import Sectionattendstudent from '../../padges/Dashboard/StudentDashboard/Sectionattendstudent/Sectionattendstudent'
import Scanerdonee from '../../padges/Dashboard/StudentDashboard/Scanerdonee/Scanerdonee'
import Lectureattendstudent from '../../padges/Dashboard/StudentDashboard/Lectureattendstudent/Lectureattendstudent'
import Indexstudent from '../../padges/Dashboard/StudentDashboard/Indexstudent/Indexstudent'
import ContentStudent from '../../padges/Dashboard/StudentDashboard/ContentStudent/ContentStudent'
import Profiledoctoer from '../../padges/Dashboard/DoctorDashboard/Profiledoctoer/Profiledoctoer'
import Changepassowreddoctoer from '../../padges/Dashboard/DoctorDashboard/Changepassowreddoctoer/Changepassowreddoctoer'
import Coursessdoctoer from '../../padges/Dashboard/DoctorDashboard/Coursessdoctoer/Coursessdoctoer'
import Qrcodeleturedoctoer from '../../padges/Dashboard/DoctorDashboard/Qrcodeleturedoctoer/Qrcodeleturedoctoer'
import Allstudentdoctoer from '../../padges/Dashboard/DoctorDashboard/Allstudentdoctoer/Allstudentdoctoer'
import Addstudentdoctoer from '../../padges/Dashboard/DoctorDashboard/Addstudentdoctoer/Addstudentdoctoer'
import Veiwabsentdoctoer from '../../padges/Dashboard/DoctorDashboard/Veiwabsentdoctoer/Veiwabsentdoctoer'
import Filterletureeorsectiondoctoer from '../../padges/Dashboard/DoctorDashboard/Filterletureeorsectiondoctoer/Filterletureeorsectiondoctoer'
import Sectionfilterdocter from '../../padges/Dashboard/DoctorDashboard/Sectionfilterdocter/Sectionfilterdocter'
import Lecturesfilterdoctoer from '../../padges/Dashboard/DoctorDashboard/Lecturesfilterdoctoer/Lecturesfilterdoctoer'
import Finalsectiondoctoer from '../../padges/Dashboard/DoctorDashboard/Finalsectiondoctoer/Finalsectiondoctoer'
import Finalleturesdoctoer from '../../padges/Dashboard/DoctorDashboard/Finalleturesdoctoer/Finalleturesdoctoer'
import Excessiveabsencestudent from '../../padges/Dashboard/TeacherDashboard/Excessiveabsencestudent/Excessiveabsencestudent'
import Profileadmin from '../../padges/Dashboard/AdminDashboard/Profileadmin/Profileadmin'
import Changepassowredadmin from '../../padges/Dashboard/AdminDashboard/Changepassowredadmin/Changepassowredadmin'
import Inboxadmin from '../../padges/Dashboard/AdminDashboard/Inboxadmin/Inboxadmin'
import Actionmassageadmin from '../../padges/Dashboard/AdminDashboard/Actionmassageadmin/Actionmassageadmin'
import Takeactionadmin from '../../padges/Dashboard/AdminDashboard/Takeactionadmin/Takeactionadmin'
import Adddocteradmin from '../../padges/Dashboard/AdminDashboard/Adddocteradmin/Adddocteradmin'
import Newdocteradmin from '../../padges/Dashboard/AdminDashboard/Newdocteradmin/Newdocteradmin'
import Veiwdocteradmin from '../../padges/Dashboard/AdminDashboard/Veiwdocteradmin/Veiwdocteradmin'
import Changpassworeddocteradmin from '../../padges/Dashboard/AdminDashboard/Changpassworeddocteradmin/Changpassworeddocteradmin'
import Newteacheradmin from '../../padges/Dashboard/AdminDashboard/Newteacheradmin/Newteacheradmin'
import Newstudentadmin from '../../padges/Dashboard/AdminDashboard/Newstudentadmin/Newstudentadmin'
import Allteachersadmin from '../../padges/Dashboard/AdminDashboard/Allteachersadmin/Allteachersadmin'
import Veiwteacheradmin from '../../padges/Dashboard/AdminDashboard/Veiwteacheradmin/Veiwteacheradmin'
import Chagepassteachers from '../../padges/Dashboard/AdminDashboard/Chagepassteachers/Chagepassteachers'
import Allstudentadminn from '../../padges/Dashboard/AdminDashboard/Allstudentadminn/Allstudentadminn'
import Veiwstudentadmin from '../../padges/Dashboard/AdminDashboard/Veiwstudentadmin/Veiwstudentadmin'
import Editestudentadminn from '../../padges/Dashboard/AdminDashboard/Editestudentadminn/Editestudentadminn'
import Newaddcoursesadmin from '../../padges/Dashboard/AdminDashboard/Newaddcoursesadmin/Newaddcoursesadmin'
import Allcourdessadmin from '../../padges/Dashboard/AdminDashboard/Allcourdessadmin/Allcourdessadmin'
import Allcourseshtml from '../../padges/Dashboard/AdminDashboard/Allcourseshtml/Allcourseshtml'
import Htmlstudentadmin from '../../padges/Dashboard/AdminDashboard/Htmlstudentadmin/Htmlstudentadmin'
import Absentstudentadmin from '../../padges/Dashboard/AdminDashboard/Absentstudentadmin/Absentstudentadmin'
import Letureattentdoctoer from '../../padges/Dashboard/DoctorDashboard/Letureattentdoctoer/Letureattentdoctoer'
import Letureattentdoctoeradmin from '../../padges/Dashboard/AdminDashboard/Letureattentdoctoeradmin/Letureattentdoctoeradmin'
import Sectionattenddocter from '../../padges/Dashboard/DoctorDashboard/Sectionattenddocter/Sectionattenddocter'
import Sectionattenddocteradmin from '../../padges/Dashboard/AdminDashboard/Sectionattenddocteradmin/Sectionattenddocteradmin'
import Fillteradmin from '../../padges/Dashboard/AdminDashboard/Fillteradmin/Fillteradmin'
import Filltersectionadmin from '../../padges/Dashboard/AdminDashboard/Filltersectionadmin/Filltersectionadmin'
import Fillterletureadmin from '../../padges/Dashboard/AdminDashboard/Fillterletureadmin/Fillterletureadmin'
import Sectionreportadmin from '../../padges/Dashboard/AdminDashboard/Sectionreportadmin/Sectionreportadmin'
import Leturereportadmin from '../../padges/Dashboard/AdminDashboard/Leturereportadmin/Leturereportadmin'
import Editecoursesadmin from '../../padges/Dashboard/AdminDashboard/Editecoursesadmin/Editecoursesadmin'
export default function Approutes() {
  
  return (
    <div>
      <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route  element={<ProtectedRoute />}>      

        <Route path="/admin-dashboard" element={<AdminLayout/>}>
        <Route index element={<AdminDashboard />}/>
        <Route  path="/admin-dashboard/profiledoctoer" element={<Profileadmin/>}/>
        <Route  path="/admin-dashboard/profiledoctoer/changepassowredadmin" element={<Changepassowredadmin/>}/>
        <Route  path="/admin-dashboard/inboxadmin" element={<Inboxadmin/>}/>
        <Route  path="/admin-dashboard/inboxadmin/actionmassageadmin" element={<Actionmassageadmin/>}/>
        <Route  path="/admin-dashboard/inboxadmin/takeactionadmin" element={<Takeactionadmin/>}/>
        <Route  path="/admin-dashboard/adddocteradmin" element={<Adddocteradmin/>}/>
        <Route  path="/admin-dashboard/newdocteradmin" element={<Newdocteradmin/>}/>
        <Route  path="veiwdocteradmin/:id" element={<Veiwdocteradmin/>}/>
        <Route  path="/admin-dashboard/newdocteradmin/changpassworeddocteradmin" element={<Changpassworeddocteradmin/>}/>
        <Route  path="/admin-dashboard/newteacheradmin" element={<Newteacheradmin/>}/>
        <Route  path="/admin-dashboard/newstudentadmin" element={<Newstudentadmin/>}/>
        <Route  path="/admin-dashboard/allteachersadmin" element={<Allteachersadmin/>}/>
        <Route  path="Veiwteacheradmin/:id" element={<Veiwteacheradmin/>}/>
        <Route  path="/admin-dashboard/newteacheradmin/chagepassteachers" element={<Chagepassteachers/>}/>
        <Route  path="/admin-dashboard/allstudentadminn" element={<Allstudentadminn/>}/>
        <Route  path="veiwstudentadmin/:id" element={<Veiwstudentadmin/>}/>
        <Route  path="editestudentadminn/:id" element={<Editestudentadminn/>}/>
        <Route  path="/admin-dashboard/newaddcoursesadmin" element={<Newaddcoursesadmin/>}/>
        <Route  path="/admin-dashboard/allcourdessadmin" element={<Allcourdessadmin/>}/>
         <Route  path="/admin-dashboard/allcourdessadmin/allcourseshtml" element={<Allcourseshtml/>}/>

        <Route  path="/admin-dashboard/allcourdessadmin/htmlstudentadmin" element={<Htmlstudentadmin/>}/>
        <Route  path="/admin-dashboard/allcourdessadmin/absentstudentadmin" element={<Absentstudentadmin/>}/>
         <Route  path="/admin-dashboard/allcourdessadmin/absentstudentadmin/letureattentdoctoeradmin" element={<Letureattentdoctoeradmin/>}/>
          <Route  path="/admin-dashboard/allcourdessadmin/absentstudentadmin/sectionattenddocteradmin" element={<Sectionattenddocteradmin/>}/>
           <Route  path="/admin-dashboard/allcourdessadmin/fillteradmin" element={<Fillteradmin/>}/>
           <Route  path="/admin-dashboard/allcourdessadmin/fillteradmin/filltersectionadmin" element={<Filltersectionadmin/>}/>
           <Route  path="/admin-dashboard/allcourdessadmin/fillteradmin/fillterletureadmin" element={<Fillterletureadmin/>}/>
           <Route  path="/admin-dashboard/allcourdessadmin/sectionreportadmin" element={<Sectionreportadmin/>}/>
           <Route  path="/admin-dashboard/allcourdessadmin/leturereportadmin" element={<Leturereportadmin/>}/>
            <Route  path="/admin-dashboard/allcourdessadmin/editecoursesadmin" element={<Editecoursesadmin/>}/>

        </Route>
        





        <Route path="/doctor-dashboard" element={<DoctorLayout/>}>
        <Route index element={<DoctorDashboard/>} /> 
        <Route  path="/doctor-dashboard/profiledoctoer" element={<Profiledoctoer/>}/>
        <Route  path="/doctor-dashboard/changepassowreddoctoer" element={<Changepassowreddoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer" element={<Coursessdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/qrcodeleturedoctoer" element={<Qrcodeleturedoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/allstudentdoctoer" element={<Allstudentdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/allstudentdoctoer/addstudentdoctoer" element={<Addstudentdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/veiwabsentdoctoer" element={<Veiwabsentdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/filterletureeorsectiondoctoer" element={<Filterletureeorsectiondoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/sectionfilterdocter" element={<Sectionfilterdocter/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/lecturesfilterdoctoer" element={<Lecturesfilterdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/finalsectiondoctoer" element={<Finalsectiondoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/finalleturesdoctoer" element={<Finalleturesdoctoer/>}/>

        </Route>
        
        


        <Route path="/student-dashboard" element={<StudentLayout/>}>
        <Route index  element={<StudentDashboard/>} />
        <Route  path="/student-dashboard/profilestudent" element={<Profilestudent/>}/>
        <Route  path="/student-dashboard/profilestudent/changepassworedstudent" element={<Changepassworedstudent/>}/>
        <Route  path="/student-dashboard/coursesstudent" element={<Coursesstudent/>}/>
        <Route  path="/student-dashboard/coursesstudent/scanqrcodestudent" element={<Scanqrcodestudent/>}/>
        <Route  path="/student-dashboard/coursesstudent/scanqrcodestudent/scanerdonee" element={<Scanerdonee/>}/>
        <Route  path="/student-dashboard/coursesstudent/sectionattendstudent" element={<Sectionattendstudent/>}/>
        <Route  path="/student-dashboard/coursesstudent/lectureattendstudent" element={<Lectureattendstudent/>}/>
        <Route  path="/student-dashboard/indexstudent" element={<Indexstudent/>}/>
        <Route  path="/student-dashboard/indexstudent/contentStudent" element={<ContentStudent/>}/>

        </Route>
        




        
        <Route path="/teacher-dashboard" element= {<TeacherLayout/>}>
        <Route index element={<TeacherDashboard/>} />
        <Route  path="/teacher-dashboard" element={<TeacherDashboard/>} />
        <Route  path="/teacher-dashboard/profileteacher" element={<Profileteacher/>}/>
        <Route  path="/teacher-dashboard/profileteacher/changepasswred" element={<Changepasswred/>}  />
        <Route  path="/teacher-dashboard/coursestecher" element={<Coursestecher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/qrcodeteacher" element={<Qrcodeteacher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/allstudentteacher" element={<Allstudentteacher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/addnewstudentteacher" element={<Addnewstudentteacher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/filterbysection" element={<Filterbysection/>}  />
        <Route  path="/teacher-dashboard/coursestecher/filterbysection/sectionattentencereport" element={<Sectionattentencereport/>}  />
        <Route  path="/teacher-dashboard/coursestecher/Sectionfinalreport" element={<Sectionfinalreport/>}  />
        <Route  path="/teacher-dashboard/coursestecher/Sectionfinalreport" element={<Sectionfinalreport/>}  />
        <Route  path="/teacher-dashboard/coursestecher/excessiveabsencestudents" element={<Excessiveabsencestudent/>}  />

        </Route>
        
                


        
      
      




      </Route>

      </Routes>
    </div>
  )
}
