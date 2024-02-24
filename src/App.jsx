import React from "react";
//project-1
import Genpwd from "./projects/generatepwd/components/Genpwd";
//prject-2
import Exchange from "./projects/currency/Exchange";
//project-3
import Home from "./projects/spa/pages/Home";
import About from "./projects/spa/pages/About";
import Contact from "./projects/spa/pages/Contact";
import ReactRouterApp from "./projects/spa/ReactRouterApp";
import UserDetails from "./projects/spa/pages/UserDetails";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ReactRouterApp />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}>
        <Route path=":id" element={<UserDetails />} />
      </Route>
    </Route>
  )
);

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

      {/* ===== Project-3 React Routes project-1, Nested Routes, Dynamic Routes, useParams - START =====*/}
      {/* <RouterProvider router={router} /> */}
      {/* ===== Project-3 - END =====*/}

      {/* ===== Project-2 Currency exchange : customHooks, useID, reusable component - START =====*/}
      {/* <Exchange /> */}
      {/* ===== Project-2 : - END =====*/}

      {/* ===== Project-1 Generate Password - useState, useEffect, useCallBack, useRef - START =====*/}
      {/* <Genpwd/> */}
      {/* ===== Project-1 - END =====*/}
    </div>
  );
};

export default App;
