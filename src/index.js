import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Test from "./components/Test";
import Select from "./components/Test/select";
import Question from "./components/Test/question";
import Final from "./components/Test/final";
import Report from "./components/Reports/summary";
import Brilliance from "./components/Reports/brilliance";
import Info from "./components/Test/info";
import Homepage from "./components/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./components/Context/GlobalContext";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/select-user",
    element: <Select />,
  },
  {
    path: "/student",
    element: <Question />,
  },
  {
    path: "/parent",
    element: <Question />,
  },
  {
    path: "/coach",
    element: <Question />,
  },
  {
    path: "/final",
    element: <Final />,
  },
  {
    path: "/monster",
    element: <Report />,
  },
  {
    path: "/brilliance",
    element: <Brilliance />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
