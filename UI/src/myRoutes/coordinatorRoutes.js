import CoordinatorIndex from "../views/myexamples/coordinator/CoordinatorIndex";
import CoordinatorTopicList from "../views/myexamples/coordinator/CoordinatorTopicList";
import CoordinatorTopicUpload from "../views/myexamples/coordinator/CoordinatorTopicUpload";
import CoordinatorUploadList from "../views/myexamples/coordinator/CoordinatorUploadList";
import CoordinatorUploadDetail from "../views/myexamples/coordinator/CoordinatorUploadDetail";


var studentRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: CoordinatorIndex,
    layout: "/coordinator",
    type: 'main'
  },
  {
    path: "/topic",
    name: "Topic",
    icon: "ni ni-bullet-list-67 text-primary",
    component: CoordinatorTopicList,
    layout: "/coordinator",
    type: 'main'
  },
  {
    path: "/topic-upload",
    name: "Topic Upload",
    icon: "ni ni-fat-add text-primary",
    component: CoordinatorTopicUpload,
    layout: "/coordinator",
    type: 'main'
  },
  {
    path: "/upload-list",
    name: "Upload List",
    icon: "ni ni-bullet-list-67 text-primary",
    component: CoordinatorUploadList,
    layout: "/coordinator",
    type: 'main'
  },
  {
    path: "/upload-detai",
    name: "Upload Detail",
    icon: "ni ni-bold-right text-primary",
    component: CoordinatorUploadDetail,
    layout: "/coordinator",
    type: 'main'
  }
];
export default studentRoutes;
