import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { adminRoutes } from "./Admin.routes";

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
    children: adminRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);