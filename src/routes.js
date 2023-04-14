import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./scenes/layouts/DashboardLayout";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Matter from "./scenes/matter";
import Tasks from "./scenes/tasks";
import Activities from "./scenes/activities";
import Files from "./scenes/Files";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";

export default function Router() {
  return useRoutes([
    {
      path: "app",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Navigate to="dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "team", element: <Team /> },
        { path: "contacts", element: <Contacts /> },
        { path: "matter", element: <Matter /> },
        { path: "tasks", element: <Tasks /> },
        //{ path: "editor", element: <Editor /> },
        { path: "invoices", element: <Invoices /> },
        { path: "calendar", element: <Calendar /> },
        { path: "files", element: <Files /> },
        { path: "activities", element: <Activities /> },
        { path: "bar", element: <Bar /> },
        { path: "form", element: <Form /> },
        { path: "line", element: <Line /> },
        { path: "pie", element: <Pie /> },
        { path: "faq", element: <FAQ /> },
        { path: "geography", element: <Geography /> },
      ],
    },
    { path: "/", element: <Navigate to="/app/dashboard" /> },
  ]);
}
