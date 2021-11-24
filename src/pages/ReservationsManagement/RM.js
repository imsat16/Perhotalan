import React from "react";
import AddRMReservations from "../../component/AddRMReservations";
import NavbarComp from "../../component/NavbarComp";
import RMDropdown from "../../component/RMDropdown";
import SearchRMReservations from "../../component/SearchRMReservations";
import TableRMReservations from "../../component/TableRMReservations";

function RM() {
  return (
    <div className="">
      <NavbarComp />
      <div className="container px-2 md:mx-auto">

      <div className="mt-10 flex justify-between">
        <RMDropdown />
        <div className="flex">
          <SearchRMReservations />
          <AddRMReservations />
        </div>
      </div>
      <TableRMReservations/>
      </div>
    </div>
  );
}

export default RM;
