import React, { useEffect, useState } from "react";
import { Alert, Slide } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlertWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 2000,
  minWidth: "300px",
  maxWidth: "90vw",
}));

const FloatingAlert = ({
  message,
  severity,
  isOpen,
  onClose,
  autoHideDuration = 5000,
}) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    setShow(isOpen);

    if (isOpen && autoHideDuration) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoHideDuration, onClose]);

  if (!show) return null;

  return (
    <Slide direction="down" in={show} mountOnEnter unmountOnExit>
      <StyledAlertWrapper>
        <Alert
          severity={severity}
          onClose={() => {
            setShow(false);
            onClose?.();
          }}
          elevation={6}
        >
          {message}
        </Alert>
      </StyledAlertWrapper>
    </Slide>
  );
};

export default FloatingAlert;
