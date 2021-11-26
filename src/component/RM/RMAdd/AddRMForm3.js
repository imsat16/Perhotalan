import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

function AddRMForm3() {
  const{setStep, userData, setUserData, submitData} = useContext(multiStepContext);

  return (
    <div>
      <div className="flex-row">
        <div className="lg:flex">
          <div>
            <h4 className="font-bold my-2">Common Information</h4>
            <div className="px-2 pl-0">
              <h5>Code</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Booking Time</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Status</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>User</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Source</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Guarantee</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
          </div>

          <div className="lg:px-3">
            <h4 className="font-bold my-2">Room Information</h4>
            <div className="px-2 pl-0">
              <h5>CheckIn</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Check Out</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Adult</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Child</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Infant</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h6>Room</h6>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
          </div>

          <div className="">
            <h4 className="font-bold my-2">Guest Information</h4>
            <div className="px-2 pl-0">
              <h5>Guest Name</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Company</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Email</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Phone</h5>{" "}
              <input
                type="text"
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Sepecial Requirement</h5>{" "}
              <textarea
              role="form"
                class="rounded-lg w-full p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
          </div>
        </div>
        <div className="pr-2">
        <div className="justify-between flex items-center rounded-lg mt-2 text-gray-600 ">
           <button
              onClick={() => setStep(2)}
              className="uppercase pl-2 flex font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </button>
          <button onClick={submitData} className="uppercase pl-2 flex font-semibold">
            Submit{" "}
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

export default AddRMForm3;
