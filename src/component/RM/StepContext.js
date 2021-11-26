import React, { useState } from 'react'
import Addrmreservations from './AddRMReservations';

export const multiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep,setStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData,setFinalData] = useState([]);

    function submitData(params) {
        
    }

    return (
        <div>
            <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
                <Addrmreservations/>
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext;
