import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home";

const MobileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MobileRouter;
