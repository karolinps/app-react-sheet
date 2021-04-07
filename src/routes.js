import MenuDashboard from "./components/Menu/Menu";
import Portfolio from "./pages/Portfolio";
import Funnel from "./pages/Funnel";
import Seasons from "./pages/Seasons";
import Customers from "./pages/Customers";
import Problems from "./pages/Problems";
import Projects from "./pages/Projects";

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
    key: "projects",
    path: "/projects",
    component: Projects,
    exact: true,
  },
];

export default routes;
