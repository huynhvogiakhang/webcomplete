import StudentProfile from "../views/myexamples/student/StudentProfile";


var sharedSubRoutes = [
  {
    path: "/student-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: StudentProfile,
    layout: "/student"
  }
];
export default sharedSubRoutes;
