import ManagerIndex from "../views/myexamples/manager/ManagerIndex";
import Computing from "../views/myexamples/manager/Computing";
import Maths from "../views/myexamples/manager/Maths";
import English from "../views/myexamples/manager/English";
import ArticleDetail from "../views/myexamples/manager/ArticleDetail";

var managerRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: ManagerIndex,
    layout: "/manager",
    type: 'main'
  },
  {
    path: "/computing",
    name: "Computing",
    icon: "ni ni-tv-2 text-primary",
    component: Computing,
    layout: "/manager",
    type: 'main'
  },
  {
    path: "/maths",
    name: "Maths",
    icon: "ni ni-tv-2 text-primary",
    component: Maths,
    layout: "/manager",
    type: 'main'
  },
  {
    path: "/english",
    name: "English",
    icon: "ni ni-tv-2 text-primary",
    component: English,
    layout: "/manager",
    type: 'main'
  },
  {
    path: "/article-detail",
    name: "Article Detail",
    icon: "ni ni-tv-2 text-primary",
    component: ArticleDetail,
    layout: "/manager",
    type: 'main'
  }
];
export default managerRoutes;
