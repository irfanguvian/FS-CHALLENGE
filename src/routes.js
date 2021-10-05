import React from "react";
const Client = React.lazy(() => import("./views/inquiries/AddClient"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/inquiries", name: "Inquiries", component: Client, exact: true },
  { path: "/inquiries", name: "Inquiries Create", component: Client },
];

export default routes;
