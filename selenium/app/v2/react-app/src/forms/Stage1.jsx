import {
  Box,
  Button,
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

export const Stage1 = ({
  values,
  updateValues,
  isSubmitted,
  submitHandler,
}) => {
  const calendar = {
    dates: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
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
        User Details
      </Typography>
      <div className="flex gap-2">
        <TextField
          className="w-1/2"
          onChange={updateValues}
          value={values.fName}
          name="fName"
          label="First Name"
          error={!values.fName.length > 0 && isSubmitted}
        />
        <TextField
          className="w-1/2"
          onChange={updateValues}
          value={values.lName}
          name="lName"
          label="Last Name"
          error={!values.lName.length > 0 && isSubmitted}
        />
      </div>

      <TextField
        onChange={updateValues}
        value={values.email}
        name="email"
        label="Email Address"
        error={!values.email.includes("@") && isSubmitted}
      />
      <TextField
        onChange={updateValues}
        value={values.password}
        type="password"
        name="password"
        label="Password"
        error={values.password.length < 4 && isSubmitted}
      />

      <FormControl error={values.gender === "" && isSubmitted}>
        <FormLabel id="gender-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="gender-label"
          name="gender"
          value={values.gender}
          onChange={updateValues}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <Typography variant="p" color="gray">
        Date of Birth
      </Typography>
      <div className="flex gap-4 ">
        <FormControl
          sx={{ minWidth: "28%" }}
          error={values.dateBirth === "" && isSubmitted}
        >
          <InputLabel id="date-select">Date</InputLabel>
          <Select
            labelId="date-select"
            name="dateBirth"
            value={values.dateBirth}
            onChange={updateValues}
            autoWidth
            label="Date"
          >
            {calendar.dates.map((date) => (
              <MenuItem value={date} key={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{ minWidth: "38%" }}
          error={values.dateMonth === "" && isSubmitted}
        >
          <InputLabel id="month-select">Month</InputLabel>
          <Select
            labelId="month-select"
            name="dateMonth"
            value={values.dateMonth}
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
          sx={{ minWidth: "29%" }}
          error={values.dateYear === "" && isSubmitted}
        >
          <InputLabel id="year-select">Year</InputLabel>
          <Select
            labelId="year-select"
            name="dateYear"
            value={values.dateYear}
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
    </Box>
  );
};
