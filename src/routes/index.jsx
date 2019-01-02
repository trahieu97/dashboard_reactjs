import Dashboard from "dashboard/layouts/Dashboard/Dashboard.jsx";
import IndexPage from "clients/Index.jsx";

const indexRoutes = [
    { path: "/", component: IndexPage },
    { path: "/Dashboard", component: Dashboard }
];

export default indexRoutes;
