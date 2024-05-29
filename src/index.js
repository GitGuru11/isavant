import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Test from "./components/Test";
import Select from "./components/Test/select";
import Question from "./components/Test/question";
import Final from "./components/Test/final";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
