import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";

const PaymentForm = ({ values, updateValues }) => {
  return (
    <Box className="flex flex-col gap-4">
      <TextField
        label="Name on Card"
        className="w-full"
        name="nameOnCard"
        value={values.nameOnCard}
        onChange={updateValues}
      />
      <TextField
        label="Card Number"
        className="w-full"
        name="cardNumber"
        value={values.cardNumber}
        onChange={updateValues}
      />
      <TextField
        label="MM/YY"
        className="w-full"
        name="cardDate"
        value={values.cardDate}
        onChange={updateValues}
      />
      <TextField
        label="CVV"
        className="w-full"
        name="cardCvv"
        type="password"
        maxLength="3"
        value={values.cardCvv}
        onChange={updateValues}
      />
      <FormControlLabel
        control={<Checkbox checked={values.saveCard} onChange={updateValues} />}
        label="Save Card for future use"
        name="saveCard"
      />
    </Box>
  );
};

export default PaymentForm;
