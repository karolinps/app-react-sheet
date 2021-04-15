import MenuDashboard from "./components/Menu/Menu";
import Portfolio from "./pages/Portfolio";
import Funnel from "./pages/Funnel";
import Seasons from "./pages/Seasons";
import Customers from "./pages/Customers";
import Problems from "./pages/Problems";
import Projects from "./pages/Projects";
import Detail from "./components/Initiative/Detail";
const routes = [
  {
    key: "dashboard",
    path: "/dashboard",
    component: MenuDashboard,
    exact: true,
  },
  {
    key: "portfolio",
    path: "/portfolio",
    component: Portfolio,
    exact: true,
  },
  {
    key: "funnel",
    path: "/funnel",
    component: Funnel,
    exact: true,
  },
  {
    key: "seasons",
    path: "/seasons",
    component: Seasons,
    exact: true,
  },
  {
    key: "customers",
    path: "/customers",
    component: Customers,
    exact: true,
  },
  {
    key: "problems",
    path: "/problems",
    component: Problems,
    exact: true,
  },
  {
    key: "initiatives",
    path: "/initiatives",
    component: Projects,
    exact: true,
  },
  {
    key: "detail-initiative",
    path: "/detail-initiative/:id",
    component: Detail,
    exact: true,
  },
];

export default routes;
