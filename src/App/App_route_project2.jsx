import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//project-4
import HomePage from "./projects/routes/pages/HomePage.jsx";
import Layout from "./projects/routes/layout/Layout.jsx";
import AboutPage from "./projects/routes/pages/AboutPage.jsx";
import ContactPage from "./projects/routes/pages/ContactPage.jsx";
import Details from "./projects/routes/pages/Details.jsx";
import GitHub, { gitHubLoaderInfo } from "./projects/routes/pages/GitHub.jsx";

const approute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "user",
        element: <Details />,
      },
      {
        path: "user/:username",
        element: <Details />,
      },
      {
        loader: gitHubLoaderInfo,
        path: "git",
        element: <GitHub />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="container-fluid p-0">
        {/* ===== Project-4 React Routes project-2, Nested Routes, Dynamic Routes, useParams, useLoaderData  - START =====*/}
      <RouterProvider router={approute} />
      {/* ===== Project-4 - END =====*/}   
    </div>
  );
};

export default App;
