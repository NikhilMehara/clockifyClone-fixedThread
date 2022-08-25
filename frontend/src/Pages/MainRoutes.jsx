import React from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/download" element={<Downloads />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/tracker" element={<Tracker />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
