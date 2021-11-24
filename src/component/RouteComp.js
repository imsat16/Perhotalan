import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../expor";
import HM from "../pages/HotelManagement/HM";
import RM from "../pages/ReservationsManagement/RM";

export default function RouteComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} ></Route>
        <Route path="/rm" element={<RM />} />
        <Route path="/hm" element={<HM />} />
      </Routes>
    </BrowserRouter>
  );
}
