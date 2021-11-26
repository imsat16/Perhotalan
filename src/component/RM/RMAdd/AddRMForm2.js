import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

function AddRMForm2() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div>
      <div className="flex-row">
        <div className="lg:flex">
          <div className="">
            <h4 className="font-bold my-2">Guest Information</h4>
            <div className="px-2 pl-0">
              <h5>Guest Name</h5>{" "}
              <input
                type="text"
                value={userData['guestname']}
                onChange={(e)=>setUserData({...userData, "guestname" : e.target.value})}
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
                type="email"
                value={userData['email']}
                onChange={(e)=>setUserData({...userData, "email" : e.target.value})}
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Phone</h5>{" "}
              <input
                type="tel"
                value={userData['phone']}
                onChange={(e)=>setUserData({...userData, "phone" : e.target.value})}
                class="rounded-lg p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="+1 234 567 890"
              />
            </div>
            <div className="px-2 pl-0">
              <h5>Sepecial Requirement</h5>{" "}
              <textarea
                role="form"
                value={userData['sepecialrequirement']}
                onChange={(e)=>setUserData({...userData, "sepecialrequirement" : e.target.value})}
                class="rounded-lg w-full p-2 bg-gray-200 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
            </div>
          </div>
        </div>
        <div className="pr-2">
          <div className="justify-between mt-2 flex items-center rounded-lg text-gray-600 ">
            <button
              onClick={() => setStep(1)}
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
            <button
              onClick={() => setStep(3)}
              className="uppercase pl-2 flex font-semibold"
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

export default AddRMForm2;
