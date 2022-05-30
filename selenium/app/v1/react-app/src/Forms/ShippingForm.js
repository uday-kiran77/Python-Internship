import {
  Box,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const ShippingForm = ({ values, updateValues }) => {
  const states = [
    "Andhra Pradesh",
    "Telangana",
    "Karnataka",
    "Uttarpradesh",
    "Mumbai",
  ];
  return (
    <Box className="flex flex-col gap-4">
      <TextField
        label="House Number"
        className="w-full"
        name="addressHouseNum"
        value={values.addressHouseNum}
        onChange={updateValues}
      />
      <TextField
        label="Street"
        className="w-full"
        name="addressStreet"
        value={values.addressStreet}
        onChange={updateValues}
      />

      <TextField
        label="Area"
        className="w-full"
        name="addressArea"
        value={values.addressArea}
        onChange={updateValues}
      />
      <TextField
        label="City"
        className="w-full"
        name="addressCity"
        value={values.addressCity}
        onChange={updateValues}
      />

      <TextField
        id="select-state"
        select
        label="State"
        name="addressState"
        value={values.addressState}
        onChange={updateValues}
      >
        {states.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Pincode"
        className="w-full"
        name="addressPincode"
        type="number"
        value={values.addressPincode}
        onChange={updateValues}
      />
      <Box className="relative">
        <ToggleButtonGroup
          color="primary"
          exclusive
          value={values.addressType}
          onChange={updateValues}
        >
          <ToggleButton name="addressType" value="home">
            Home
          </ToggleButton>
          <ToggleButton name="addressType" value="work">
            Work
          </ToggleButton>
          <ToggleButton name="addressType" value="other">
            Other
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography
          variant="subtitle2"
          color="gray"
          className="pl-1 pt-2 text-xs"
        >
          Address Type
        </Typography>
      </Box>
    </Box>
  );
};

export default ShippingForm;
