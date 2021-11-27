import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";

function AddRMForm() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [disabled, setDisabled] = useState(false);

  function handleGameClick() {
    setDisabled(!disabled);
  }
  return (
    <div>
      <div className="flex-row">
        <div className="md:flex">
          <div className="bg-gray-300 m-2 shadow-md px-2 text-gray-700 rounded-lg">
            <h4 className="font-bold pt-1">Common Information</h4>
            <div className="py-3">
              <div className="">
                <h5>Code</h5>
                <input
                  type="number"
                  value={userData["Rcode"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Rcode: e.target.value })
                  }
                  disabled={disabled}
                  onClick={handleGameClick}
                  class="rounded-lg p-2 bg-gray-300 focus:shadow placeholder-gray-500 focus:outline-none"
                  placeholder="123 321"
                />
              </div>
              <div className="">
                <h5>Booking Time</h5>{" "}
                <input
                  type="datetime-local"
                  disabled={disabled}
                  onClick={handleGameClick}
                  value="2021-06-12T19:30"
                  onChange={(e) =>
                    setUserData({ ...userData, datetime: e.target.value })
                  }
                  name="booking-time"
                  min="2018-06-07T00:00"
                  max="2045-06-14T00:00"
                  class="rounded-lg p-2 bg-gray-300 focus:shadow placeholder-gray-500 focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Status</h5>{" "}
                <input
                  type="text"
                  value={userData["status"]}
                  onChange={(e) =>
                    setUserData({ ...userData, status: e.target.value })
                  }
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>User</h5>{" "}
                <input
                  type="text"
                  value={userData["user"]}
                  onChange={(e) =>
                    setUserData({ ...userData, user: e.target.value })
                  }
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Source</h5>{" "}
                <input
                  type="text"
                  value={userData["source"]}
                  onChange={(e) =>
                    setUserData({ ...userData, source: e.target.value })
                  }
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Guarantee</h5>{" "}
                <input
                  type="text"
                  value={userData["guarantee"]}
                  onChange={(e) =>
                    setUserData({ ...userData, guarantee: e.target.value })
                  }
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
            </div>
          </div>
          <div className="px-2 py-1"></div>

          <div className=" bg-gray-300 m-2 shadow-md px-2 text-gray-700 rounded-lg">
            <h4 className="font-bold pt-1">Room Information</h4>
            <div className="py-3">
              <div className="">
                <h5>CheckIn</h5>{" "}
                <input
                  type="datetime-local"
                  value={userData["checkin"]}
                  onChange={(e) =>
                    setUserData({ ...userData, checkin: e.target.value })
                  }
                  name="booking-time"
                  min="2018-06-07T00:00"
                  max="2045-06-14T00:00"
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Check Out</h5>{" "}
                <input
                  type="datetime-local"
                  value={userData["checkout"]}
                  onChange={(e) =>
                    setUserData({ ...userData, checkout: e.target.value })
                  }
                  name="booking-time"
                  min="2018-06-07T00:00"
                  max="2045-06-14T00:00"
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Adult</h5>{" "}
                <input
                  type="number"
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Child</h5>{" "}
                <input
                  type="number"
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Infant</h5>{" "}
                <input
                  type="number"
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="">
                <h5>Room</h5>{" "}
                <input
                  type="text"
                  class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pr-2">
          <div className="float-right flex items-center rounded-lg mt-2 text-gray-600 ">
            <button
              className="uppercase pl-2 flex font-semibold"
              onClick={() => setStep(2)}
            >
              Next{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRMForm;
