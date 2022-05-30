import { Box, MenuItem, TextField } from "@mui/material";

const ContactForm = ({ values, updateValues }) => {
  const genders = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Others",
    },
  ];
  return (
    <Box className="flex flex-col gap-4">
      <TextField
        label="Name"
        className="w-full"
        name="name"
        value={values.name}
        onChange={updateValues}
      />
      <TextField
        label="Email"
        className="w-full"
        name="email"
        value={values.email}
        onChange={updateValues}
      />

      <TextField
        id="select-gender"
        select
        label="Gender"
        name="gender"
        value={values.gender}
        onChange={updateValues}
      >
        {genders.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        className="w-full"
        name="dob"
        type="date"
        helperText="Date of Birth"
        required
        value={values.dob}
        onChange={updateValues}
      />
    </Box>
  );
};

export default ContactForm;
