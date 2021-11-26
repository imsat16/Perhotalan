import React from "react";
import AddRMReservations from "../../component/RM/AddRMReservations";
import NavbarComp from "../../component/NavbarComp";
import RMDropdown from "../../component/RM/RMDropdown";
import SearchRMReservations from "../../component/SearchRMReservations";
import TableRMReservations from "../../component/TableRMReservations";
import StepContext from "../../component/RM/StepContext";

function RM() {
  return (
    <div className="">
      <NavbarComp />
      <div className="container px-2 md:mx-auto">

      <div className="mt-10 flex justify-between">
        <RMDropdown />
        <div className="flex">
          <SearchRMReservations />
      <StepContext>
          <AddRMReservations />
    </StepContext>
        </div>
      </div>
      <TableRMReservations/>
      </div>
    </div>
  );
}

export default RM;
