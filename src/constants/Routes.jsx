import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./Links";
import Navbar from "../layouts/TopBar";
import Register from "../logins/Register";
import Login from "../logins/Login";
import ForgotPassword from "../logins/Forgotpassword";
import UserProfile from "../Userprofile/Userprofile";

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
            <Route path={appLinks?.Register} element={<Register />} />
            <Route path={appLinks?.Login} element={<Login />} />
            <Route path={appLinks?.Forgotpassword} element={<ForgotPassword />} />
            <Route path={appLinks?.UserProfile} element={<UserProfile />} />

          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;