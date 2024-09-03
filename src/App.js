/** @format */

import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/signup/Login";
import ProtectedRoute from "./RouteComponent/ProtectedRoute";
import PreventLogin from "./RouteComponent/PreventLogin";
import DashboardRoute from "./RouteComponent/DashboardRoute";
import Teachers from "./pages/Teachers/Teachers";
import Students from "./pages/student/Student";
import GetSchool from "./RouteComponent/GetSchool";
import GetTeacher from "./RouteComponent/GetTeacher";
import GetStudent from "./RouteComponent/GetStudent";
import Billing from "./pages/billing/Billing";
import GetBilling from "./RouteComponent/GetBilling";
import Dashboard from "./pages/dashboard/Dashboard";
import StudentLogin from "./pages/signup/StudentLogin";
import StudentDashboard from "./pages/studentdashboard/StudentDashboard";
import StudentDashboardRoute from "./RouteComponent/StudentDashboardRoute";
import GetCurrentStudent from "./RouteComponent/GetCurentStudent";
import GetStudentSchool from "./RouteComponent/GetStudentSchool";
import StudentBilling from "./pages/StudentBilling.js/StudentBilling";
import StudentNotification from "./pages/StudentNotification/StudentNotification";
import StudentMaterials from "./pages/StudentMaterials/StudentMaterials";
import StudentResult from "./pages/StudentResult/StudentResult";
import TeacherLogin from "./pages/signup/TeacherLogin";
import TeacherDashboardRoute from "./RouteComponent/TeacherDashboardlayout";
import TeacherDashboard from "./pages/TeacherDashboard.js/TeacherDashboard";
import StudentTeachers from "./pages/studentTeacher.js/StudentTeachers";
import GetStudentTeacher from "./RouteComponent/GetStudentTeacher";
import GetBillingAndPaymentHistory from "./RouteComponent/GetBillingAndPaymentHistory";
import TeacherStudent from "./pages/TeacherStudent/TeacherStudent";
import TeacherResult from "./pages/teacherResult/TeacherResult";
import TeacherNotification from "./pages/teacherNotification/TeacherNotification";
import TeacherMaterials from "./pages/teacherMateria/TeacherMaterials";
import GetStudentNotification from "./RouteComponent/GetStudentNotification";
import GetCurrentTeacher from "./RouteComponent/GetCurrentTeacher";
import GetTeacherStudent from "./RouteComponent/GetTeacherStudent";
import GetTeacherSchool from "./RouteComponent/GetTeacherSchool";
import GetTeacherNotification from "./RouteComponent/GetTeacherNotification";
import GetTeacherResult from "./RouteComponent/GetTeacherResult";
import GetStudentResult from "./RouteComponent/GetStudentResult";
import GetTeacherMaterial from "./RouteComponent/GetTeacherMaterials";
import GetStudentMaterial from "./RouteComponent/GetStudentMaterial";

function App() {
  
  return (
    <Routes>
      <Route index element={<Home />} />
      {/*Login and signup route*/}
      <Route element={<PreventLogin />}>
        <Route path="/signup/:section" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="teacher/login" element={<TeacherLogin />} />
      </Route>
      {/*Protected route*/}
      <Route element={<ProtectedRoute />}>
        <Route element={<StudentDashboardRoute />}>
          <Route element={<GetStudentSchool />}>
            <Route element={<GetCurrentStudent />}>
              <Route path="studentdashboard" element={<StudentDashboard />} />
              <Route element={<GetBillingAndPaymentHistory />}>
                <Route
                  path="student/dashboard/billing"
                  element={<StudentBilling />}
                />
              </Route>
              <Route element={<GetStudentTeacher />}>
                <Route
                  path="student/dashboard/teacher"
                  element={<StudentTeachers />}
                />
              </Route>
              <Route element={<GetStudentNotification />}>
                <Route element={<GetStudentTeacher />}>
                  <Route
                    path="student/dashboard/notification"
                    element={<StudentNotification />}
                  />
                </Route>
              </Route>
              <Route element={<GetStudentMaterial/>}>
              <Route
                path="student/dashboard/materials"
                element={<StudentMaterials />}
              />
              </Route>
              <Route element={<GetStudentTeacher />}>
                <Route element={<GetStudentResult />}>
                  <Route
                    path="student/dashboard/result"
                    element={<StudentResult />}
                  />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route element={<TeacherDashboardRoute />}>
          <Route element={<GetTeacherSchool />}>
            <Route element={<GetCurrentTeacher />}>
              <Route path="teacherdashboard" element={<TeacherDashboard />} />
            </Route>
            <Route element={<GetTeacherStudent />}>
              <Route
                path="/teacher/dashboard/student"
                element={<TeacherStudent />}
              />
            </Route>
            <Route element={<GetTeacherStudent />}>
              <Route element={<GetTeacherResult />}>
                <Route
                  path="/teacher/dashboard/result"
                  element={<TeacherResult />}
                />
              </Route>
            </Route>
            <Route element={<GetTeacherNotification />}>
              <Route
                path="/teacher/dashboard/notification"
                element={<TeacherNotification />}
              />
            </Route>
            <Route element={<GetTeacherMaterial/>}>
            <Route
              path="/teacher/dashboard/material"
              element={<TeacherMaterials />}
            />
            </Route>
          </Route>
        </Route>
        <Route element={<GetSchool />}>
          <Route element={<DashboardRoute />}>
            <Route element={<GetBilling />}>
              <Route path="/billing" element={<Billing />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            {/*route for getting current school teachers and setting it to state*/}
            <Route element={<GetTeacher />}>
              <Route path="/teachers" element={<Teachers />} />
            </Route>
            {/*route for getting current school students and setting it to state*/}
            <Route element={<GetStudent />}>
              <Route path="/students" element={<Students />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
