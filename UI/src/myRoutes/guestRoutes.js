import GuestIndex from "../views/myexamples/guest/GuestIndex";
import ArticleList from "../views/myexamples/guest/ArticleList";

var guestRoutes = [
  {
    path: "/index",
    name: "Index",
    icon: "ni ni-tv-2 text-primary",
    component: GuestIndex,
    layout: "/guest",
    type: 'main'
  },
  {
    path: "/article-list",
    name: "Article List",
    icon: "ni ni-tv-2 text-primary",
    component: ArticleList,
    layout: "/guest",
    type: 'main'
  }
];
export default guestRoutes;
