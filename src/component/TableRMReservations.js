import React from "react";

function TableRMReservations() {
  return (
      <div className="py-6 relative">
    <div className="bg-blue-400 rounded-lg">
      <table class=" table-auto w-full">
        <thead className="text-white font-medium">
          <tr className="flex justify-evenly">
            <th className="block w-full">Name</th>
            <th className="hidden lg:block w-full">Room</th>
            <th className="hidden lg:block w-full">Check In</th>
            <th className="hidden lg:block w-full">Check Out</th>
            <th className="hidden lg:block w-full ">Status</th>
            <th className="w-full">Detail</th>
          </tr>
        </thead>
        <tbody className="text-center bg-blue-300 text-white font-medium">
          <tr className="flex justify-evenly">
            <td className="block w-full">Adam</td>
            <td className="hidden lg:block w-full">858</td>
            <td className="hidden lg:block w-full">1 2 2021</td>
            <td className="hidden lg:block w-full">14 2 2021</td>
            <td className="hidden lg:block w-full">confirmed</td>
            <td className="w-full">
              <a href="/rm" className="text-white">
                Detail
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
  );
}

export default TableRMReservations;
