import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../expor";
import RMReservation from "../pages/ReservationsManagement/RM_Reservation";

export default function RouteComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reservations" element={<RMReservation />} />
      </Routes>
    </BrowserRouter>
  );
}
