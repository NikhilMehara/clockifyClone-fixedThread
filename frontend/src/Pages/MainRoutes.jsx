import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Downloads from "./Downloads";
import Features from "./Features";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import Tracker from "./Tracker";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/features"
          element={
            <>
              <Navbar />
              <Features />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/download"
          element={
            <>
              <Navbar />
              <Downloads />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/tracker" element={<Tracker />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
