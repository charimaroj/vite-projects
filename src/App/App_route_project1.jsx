import React from "react";

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



const App = () => {
  return (
    <div className="container-fluid p-0">
    

      {/* ===== Project-3 React Routes project-1, Nested Routes, Dynamic Routes, useParams - START =====*/}
      <RouterProvider router={router} />
      {/* ===== Project-3 - END =====*/}

     
    </div>
  );
};

export default App;
