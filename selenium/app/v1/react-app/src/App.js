import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState, Fragment } from "react";
import ContactForm from "./Forms/ContactForm";
import PaymentForm from "./Forms/PaymentForm";
import ResetForm from "./Forms/ResetForm";
import ShippingForm from "./Forms/ShippingForm";

const App = () => {
  const DefaultFormState = {
    name: "",
    email: "",
    dob: "",
    gender: "",
    addressHouseNum: "",
    addressStreet: "",
    addressArea: "",
    addressCity: "",
    addressState: "",
    addressPincode: "",
    addressType: "",
    nameOnCard: "",
    cardNumber: "",
    cardDate: "",
    cardCvv: "",
    saveCard: false,
  };

  const [formValues, setFormValues] = useState(DefaultFormState);
  const [formState, setFormState] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const formSteps = ["User Info", "Address", "Payment"];

  const prevStep = () => {
    if (formState === 0) {
      return;
    } else {
      setFormState((prev) => (prev -= 1));
    }
  };

  const nextStep = () => {
    if (formState === 3) {
      return;
    } else {
      setFormState((prev) => (prev += 1));
    }
  };
  const updateValuesHandler = (event) => {
    if (event.target.name === "saveCard") {
      setFormValues((prevState) => {
        return { ...prevState, [event.target.name]: event.target.checked };
      });
    } else {
      setFormValues((prevState) => {
        return { ...prevState, [event.target.name]: event.target.value };
      });
    }
  };

  const resetForm = () => {
    setFormValues(DefaultFormState);
  };

  const formRender = () => {
    switch (formState) {
      case 0:
        return (
          <ContactForm values={formValues} updateValues={updateValuesHandler} />
        );

      case 1:
        return (
          <ShippingForm
            values={formValues}
            updateValues={updateValuesHandler}
          />
        );
      case 2:
        return (
          <PaymentForm values={formValues} updateValues={updateValuesHandler} />
        );

      default:
        return (
          <ResetForm
            setForm={setFormState}
            formDetails={formValues}
            resetForm={resetForm}
            isFormValid={formValid}
          />
        );
    }
  };

  const formSubmitHandler = () => {
    const err = [];
    for (let [key, value] of Object.entries(formValues)) {
      if (value.length === 0) {
        err.push(key);
      }
    }

    if (err.length > 0) {
      console.log(err);
      setFormValid(false);
    } else {
      console.log(err);
      setFormValid(true);
    }
    nextStep();
  };

  return (
    <Fragment>
      <Box className=" border-2 rounded-md p-4 m-4 max-w-screen-md mx-auto">
        <Box className="w-full mb-4">
          <Stepper activeStep={formState} alternativeLabel>
            {formSteps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {formRender()}
        <Box
          className={`flex  mt-4 ${
            formState > 0 ? "justify-between" : "justify-end"
          }`}
        >
          {0 < formState && formState <= 2 && (
            <Button variant="contained" onClick={prevStep}>
              Previous
            </Button>
          )}

          {formState >= 0 && formState < 2 && (
            <Button variant="contained" onClick={nextStep} name="goNextBtn">
              Next
            </Button>
          )}

          {formState === 2 && (
            <Button
              variant="contained"
              onClick={formSubmitHandler}
              name="submitBtn"
            >
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default App;
