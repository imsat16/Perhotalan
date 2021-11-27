

import React, { useContext, useState } from "react";
// import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import AddRMForm from "./RMAdd/AddRMForm";
import { Step, StepLabel, Stepper } from "@mui/material";
import {multiStepContext} from "./StepContext";
import AddRMForm2 from "./RMAdd/AddRMForm2";
import AddRMForm3 from "./RMAdd/AddRMForm3";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};


export default function Addrmreservations() {
  function showStep(step) {
    console.log(step);
    switch (step) {
      case 1:
        return <AddRMForm/>
      case 2:
        return <AddRMForm2/>
      case 3:
        return <AddRMForm3/>
    
      default:
        break;
    }
  }
  const{currentStep,finalData} = useContext(multiStepContext);

    const [isOpenAddForm, setisOpenAddForm] = React.useState(false);
  const RMAddOpen = () => setisOpenAddForm(true);
  const RMAddClose = () => setisOpenAddForm(false);
    return (
      <div style={styles}>
        <button
          onClick={RMAddOpen}
          className=" shadow-md bg-blue-300 hover:bg-blue-400 p-2 rounded-lg text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <Modal open={isOpenAddForm} onClose={RMAddClose}>
          <h2>Add Reservation</h2>
          <div className="grid my-2 justify-items-stretch">
            <Stepper  activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          </div>
        {showStep(currentStep)}
        </Modal>
      </div>
    );
  }