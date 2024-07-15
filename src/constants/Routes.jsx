import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./Links";
import Navbar from "../layouts/TopBar";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Write = React.lazy(() => import("../pages/Write"));
const Contact = React.lazy(() => import("../pages/Contact"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Please wait...</div>}>
          <Navbar />
          <Routes>
            <Route exact path={appLinks?.Home} element={<Home />} />
            <Route path={appLinks?.About} element={<About />} />
            <Route path={appLinks?.Write} element={<Write />} />
            <Route path={appLinks?.Contact} element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;