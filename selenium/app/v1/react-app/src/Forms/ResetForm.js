import { Alert, Box, Button, Typography } from "@mui/material";

const ResetForm = ({ setForm, formDetails, resetForm, isFormValid }) => {
  return (
    <Box className="flex flex-col">
      {isFormValid ? (
        <Alert severity="success" name="message">
          Form Submitted Successfully
        </Alert>
      ) : (
        <Alert severity="error" name="message">
          Please Fillout all Fields
        </Alert>
      )}
      <Box className="flex flex-col gap-2" name="formDetails">
        <Typography variant="h6" color="initial">
          User Info
        </Typography>
        <Typography variant="p" color="initial">
          Name : {formDetails.name}
          <br />
          Email : {formDetails.email}
          <br />
          Date of Birth : {formDetails.dob}
          <br />
          Gender : {formDetails.gender}
          <br />
        </Typography>

        <Typography variant="h6" color="initial">
          Address
        </Typography>
        <Typography variant="p" color="initial">
          House Number : {formDetails.addressHouseNum}
          <br />
          Street : {formDetails.addressStreet}
          <br />
          Address : {formDetails.addressArea}
          <br />
          City : {formDetails.addressCity}
          <br />
          State : {formDetails.addressState}
          <br />
          Pincode : {formDetails.addressPincode}
          <br />
          Address type : {formDetails.addressType}
          <br />
        </Typography>
        <Typography variant="h6" color="initial">
          User Info
        </Typography>
        <Typography variant="p" color="initial">
          Name on Card : {formDetails.nameOnCard}
          <br />
          Card Number : {formDetails.cardNumber}
          <br />
          Expiry Date on Card : {formDetails.cardDate}
          <br />
          CVV : {formDetails.cardCvv}
          <br />
          Save Card : {formDetails.saveCard ? "Yes" : "No"}
          <br />
          <br />
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          setForm(0);
          resetForm();
        }}
      >
        Reset Form
      </Button>
    </Box>
  );
};

export default ResetForm;
