import { useRef } from "react";
import Box from "@mui/material/Box";
import Portal from "@mui/material/Portal";

const PortalCom = (props) => {
  const container = useRef(null);

  const handleClick = () => {
    props.setShow(!props.show);
  };

  return (
    <div>
      <Box>
        {props.show ? (
          <Portal container={container.current}>
            <div className=" h-screen w-screen absolute top-0 left-0 z-50  flex justify-center items-center">
              <div className=" h-screen w-screen absolute top-0 left-0  bg-black -z-10 opacity-50"></div>

              {/* content */}
              {props.children}
            </div>
          </Portal>
        ) : null}
      </Box>
      <Box ref={container} />
    </div>
  );
};

export default PortalCom;
