import MyLogin from '../views/examples/MyLogin';
import MyUpload from '../views/myexamples/student/MyUpLoad';
import StudentTopic from "../views/myexamples/student/StudentTopic";
import StudentProfile from "../views/myexamples/student/StudentProfile";
import StudentIndex from "../views/myexamples/student/StudentIndex";
import Icons from '../views/examples/Icons'
import TopicDetail from '../views/myexamples/student/TopicDetail';

var studentRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: StudentIndex,
    layout: "/student",
    type: 'main'
  },
  {
    path: "/topic",
    name: "Topic",
    icon: "ni ni-bullet-list-67 text-blue",
    component: StudentTopic,
    layout: "/student",
    type: 'main'
  },
  {
    path: "/topic-detail",
    name: "Topic Detail",
    icon: "ni ni-bullet-list-67 text-green",
    component: TopicDetail,
    layout: "/student",
    type: 'main'
  },
  {
    path: "/upload",
    name: "Upload",
    icon: "ni ni-send text-pink",
    component: MyUpload,
    layout: "/student"
  },
  {
    path: "/student-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: StudentProfile,
    layout: "/student"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: MyLogin,
    layout: "/auth"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-key-25 text-info",
    component: Icons,
    layout: "/student",
    type: 'main'
  }
];
export default studentRoutes;
