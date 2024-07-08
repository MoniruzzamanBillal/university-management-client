import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { adminPath } from "./Admin.routes";
import { RouteGenerator } from "../utils/Routes.generator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: RouteGenerator(adminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: RouteGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: RouteGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
