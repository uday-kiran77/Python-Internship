import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const Stage2 = ({
  values,
  updateValues,
  isSubmitted,
  submitHandler,
}) => {
  const calendar = {
    months: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    years: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
  };

  return (
    <Box className="p-4 flex flex-col gap-4  ">
      <Typography variant="h5" color="initial" className="underline">
        Payment Details
      </Typography>
      <TextField
        onChange={updateValues}
        value={values.nameOnCard}
        name="nameOnCard"
        label="Name on Card"
        error={!values.nameOnCard.length > 0 && isSubmitted}
      />
      <TextField
        onChange={updateValues}
        value={values.cardNumber}
        name="cardNumber"
        label="Card Number"
        error={!values.cardNumber.length > 0 && isSubmitted}
      />

      <Typography variant="p" color="gray">
        Expiry Date
      </Typography>
      <div className="flex gap-4 ">
        <FormControl
          sx={{ minWidth: "50%" }}
          error={values.dateMonth === "" && isSubmitted}
        >
          <InputLabel id="month-select">Month</InputLabel>
          <Select
            labelId="month-select"
            name="cardMonth"
            value={values.cardMonth}
            onChange={updateValues}
            autoWidth
            label="Date"
          >
            {calendar.months.map((month) => (
              <MenuItem value={month} key={month} className="capitalize">
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{ minWidth: "46%" }}
          error={values.dateYear === "" && isSubmitted}
        >
          <InputLabel id="year-select">Year</InputLabel>
          <Select
            labelId="year-select"
            name="cardYear"
            value={values.cardYear}
            onChange={updateValues}
            autoWidth
            label="Date"
          >
            {calendar.years.map((year) => (
              <MenuItem value={year} key={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TextField
        onChange={updateValues}
        value={values.cardCvv}
        name="cardCvv"
        label="CVV"
        type="password"
        error={values.cardCvv.length !== 3 && isSubmitted}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="saveCard"
            onChange={updateValues}
            checked={values.saveCard}
          />
        }
        label="Save card for future use"
      />
    </Box>
  );
};
