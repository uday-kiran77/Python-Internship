import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useState, Fragment } from "react";

import { Stage1 } from "./forms/Stage1";
import { Stage2 } from "./forms/Stage2";
import { Submit } from "./pages/Submit";

function App() {
  const defaultForm = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    gender: "",
    dateBirth: "",
    dateMonth: "",
    dateYear: "",
    nameOnCard: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    saveCard: false,
  };
  const [formValues, setFormValues] = useState(defaultForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState([]);
  // portal
  const [showPortal, setShowPortal] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const inputChangeHandler = (event) => {
    if (event.target.name === "saveCard") {
      setFormValues((prevState) => {
        return { ...prevState, [event.target.name]: event.target.checked };
      });

      return;
    }

    setFormValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = () => {
    console.log(formValues);
    setShowPortal(true);
    setIsSubmitted(true);
    var err = [];
    for (const [key, value] of Object.entries(formValues)) {
      switch (key) {
        case "email":
          if (!value.includes("@")) {
            console.log(value.includes("@"));
            err.push(key);
          }
          break;
        case "password":
          if (!value.length >= 4) {
            err.push(key);
          }
          break;

        default:
          if (value === "") {
            err.push(key);
          }
          break;
      }
    }
    setErrors(err);
  };
  const handleformReset = () => {
    setFormValues(defaultForm);
    setIsSubmitted(false);
    setActiveStep(0);
    setErrors([]);
  };

  const formStages = () => {
    switch (activeStep) {
      case 0:
        return (
          <Stage1
            values={formValues}
            updateValues={inputChangeHandler}
            isSubmitted={isSubmitted}
            submitHandler={submitHandler}
          />
        );

      case 1:
        return (
          <Fragment>
            <Stage2
              values={formValues}
              updateValues={inputChangeHandler}
              isSubmitted={isSubmitted}
              submitHandler={submitHandler}
            />
            <Submit
              show={showPortal}
              setShow={setShowPortal}
              resetForm={handleformReset}
              errors={errors}
            />
          </Fragment>
        );
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col p-2 mx-auto mt-4 max-w-screen-md border rounded-lg">
      {formStages()}

      <MobileStepper
        variant="progress"
        steps={2}
        position="static"
        activeStep={activeStep}
        nextButton={
          activeStep >= 1 ? (
            <Button onClick={submitHandler}>Submit</Button>
          ) : (
            <Button onClick={handleNext} disabled={activeStep === 2}>
              Next
              <KeyboardArrowRight />
            </Button>
          )
        }
        backButton={
          <Button onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}

export default App;
