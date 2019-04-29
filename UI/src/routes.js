import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
//import Maps from "views/examples/Maps.jsx";
//import Register from "views/examples/Register.jsx";
//import Login from "views/examples/Login.jsx";
//import Tables from "views/examples/Tables.jsx";
//import Icons from "views/examples/Icons.jsx";

import MyRegister from "./views/examples/MyRegister";
import MyLogin from "./views/examples/MyLogin";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: MyTable,
  //   layout: "/admin"
  // },
  // {
  //   path: "/upload",
  //   name: "Upload",
  //   icon: "ni ni-send text-pink",
  //   component: MyUpload,
  //   layout: "/admin"
  // },
  // {
  //   path: "/topic",
  //   name: "Topic",
  //   icon: "ni ni-bullet-list-67 text-blue",
  //   component: MyUploadList,
  //   layout: "/admin"
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: MyLogin,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: MyRegister,
    layout: "/auth"
  }
];
export default routes;
