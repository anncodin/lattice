import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Development from "./Pages/Development/Development";
import OnSale from "./Pages/OnSale/OnSale";
import Contact from "./Pages/Contact/Contact";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="development" element={<Development />} />
        <Route path="onsale" element={<OnSale />} />
        <Route path="contact" element={<Contact />} />;
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
