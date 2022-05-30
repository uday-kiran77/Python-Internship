import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PortalCom from "../components/PortalCom.jsx";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Submit = (props) => {
  const handleClosePortal = () => {
    props.setShow(!props.show);
  };

  const handleResetForm = () => {
    props.resetForm();
    handleClosePortal();
  };
  return (
    <PortalCom show={props.show} setShow={props.setShow}>
      <Box className="bg-white border rounded-lg w-96 m-2 flex justify-center items-center p-10 flex-col text-center gap-4">
        {props.errors.length === 0 ? (
          <Fragment>
            <BsCheckCircleFill className="text-6xl bg-green-500 rounded-full text-white p-1" />

            <Typography variant="h5" color="initial">
              Form Submitted Successfully
            </Typography>
            <div className="flex gap-4 mt-2">
              <Button
                variant="contained"
                color="error"
                onClick={handleResetForm}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClosePortal}
              >
                Close
              </Button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <AiOutlineCloseCircle className="text-6xl bg-white rounded-full text-red-500 " />

            <Typography variant="h5" color="initial">
              Please check for errors in form
            </Typography>

            <Button
              variant="contained"
              color="error"
              onClick={handleClosePortal}
              className="w-full"
            >
              Close
            </Button>
          </Fragment>
        )}
      </Box>
    </PortalCom>
  );
};
