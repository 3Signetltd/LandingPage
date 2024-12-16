import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Alert,
  CircularProgress,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import FloatingAlert from "../components/tools/Alert";
import backendURL from "../config";

// Styled components
const StyledBanner = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "80px",
  left: 0,
  right: 0,
  zIndex: 10,
  animation: "slideDown 0.5s ease-out",
  backgroundColor: "#f4511e",
  color: "white",
  padding: theme.spacing(1, 2),
  "@keyframes slideDown": {
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0)" },
  },
}));

const MasterClassRegister = ({ isVisible, setIsVisible }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classInterest: "",
    sectionInterest: "",
  });

  const [floatingAlert, setFloatingAlert] = useState({
    show: false,
    message: "",
    severity: "success",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^\d]/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.classInterest) {
      newErrors.classInterest = "Please select a class";
    }

    if (!formData.sectionInterest) {
      newErrors.sectionInterest = "Please select a time slot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     setFloatingAlert({
  //       show: true,
  //       message: "Please fix the form errors before submitting.",
  //       severity: "warning",
  //     });
  //     return;
  //   }

  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(`${backendURL}/api/registerJoinCommunity`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await response.json();

  //     if (response.ok) {
  //       setFloatingAlert({
  //         show: true,
  //         message:
  //           "Thank you for registering to our masterclass,we will get intouch with you as soon as possibble! 🎉",
  //         severity: "success",
  //       });
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         classInterest: "",
  //         sectionInterest: "",
  //       });
  //       setTimeout(() => {
  //         setIsModalOpen(false);
  //       }, 3000);
  //     } else {
  //       throw new Error(data.message || "Registration failed");
  //     }
  //   } catch (error) {
  //     setFloatingAlert({
  //       show: true,
  //       message: error.message || "An error occurred. Please try again.",
  //       severity: "error",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFloatingAlert({
        show: true,
        message: "Please fix the form errors before submitting.",
        severity: "warning",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${backendURL}/api/registerJoinCommunity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any authorization headers if needed
        },
        credentials: "include", // Important for CORS with credentials
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registration failed");
      }

      const data = await response.json();

      setFloatingAlert({
        show: true,
        message:
          "Thank you for registering to our masterclass, we will get in touch with you as soon as possible! 🎉",
        severity: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        classInterest: "",
        sectionInterest: "",
      });

      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    } catch (error) {
      setFloatingAlert({
        show: true,
        message: error.message || "An error occurred. Please try again.",
        severity: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <FloatingAlert
        message={floatingAlert.message}
        severity={floatingAlert.severity}
        isOpen={floatingAlert.show}
        onClose={() => setFloatingAlert((prev) => ({ ...prev, show: false }))}
        autoHideDuration={5000}
      />
      <StyledBanner>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" component="span">
              3Signet Master Class Interest Form
            </Typography>
            <Box display="flex" gap={2} alignItems="center">
              <Button
                variant="contained"
                color="inherit"
                size="small"
                onClick={() => setIsModalOpen(true)}
                endIcon={<SendIcon />}
                sx={{ color: "#f4511e" }}
              >
                Register Now
              </Button>
              <IconButton
                size="small"
                onClick={handleClose}
                sx={{ color: "white" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </StyledBanner>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              3Signet Master Class Interest Form
            </Typography>
            <IconButton onClick={() => setIsModalOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            {alertInfo && (
              <Alert severity={alertInfo.severity} sx={{ mb: 2 }}>
                {alertInfo.message}
              </Alert>
            )}

            <Box mb={3}>
              <img
                src="/api/placeholder/150/50"
                alt="3Signet Logo"
                style={{ margin: "0 auto", display: "block" }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 2 }}
              >
                Thank you for your interest in the 3Signet Master Class! Please
                fill out this form to help us better understand your
                preferences.
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />

              <FormControl error={!!errors.classInterest}>
                <FormLabel>Program of Interest</FormLabel>
                <RadioGroup
                  name="classInterest"
                  value={formData.classInterest}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="SQL master class"
                    control={<Radio />}
                    label="SQL Master Class"
                  />
                  <FormControlLabel
                    value="Python master class"
                    control={<Radio />}
                    label="Python Master Class"
                  />
                </RadioGroup>
                {errors.classInterest && (
                  <FormHelperText>{errors.classInterest}</FormHelperText>
                )}
              </FormControl>

              <FormControl error={!!errors.sectionInterest}>
                <FormLabel>Interested Section (time)</FormLabel>
                <RadioGroup
                  name="sectionInterest"
                  value={formData.sectionInterest}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Morning Class"
                    control={<Radio />}
                    label="Morning Class"
                  />
                  <FormControlLabel
                    value="Evening Class"
                    control={<Radio />}
                    label="Evening Class"
                  />
                  <FormControlLabel
                    value="Only Weekend"
                    control={<Radio />}
                    label="Only Weekend"
                  />
                </RadioGroup>
                {errors.sectionInterest && (
                  <FormHelperText>{errors.sectionInterest}</FormHelperText>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading}
                sx={{
                  bgcolor: "#f4511e",
                  "&:hover": { bgcolor: "#e64a19" },
                  mt: 2,
                }}
              >
                {isLoading ? (
                  <>
                    <CircularProgress size={24} sx={{ mr: 1 }} />
                    Processing...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MasterClassRegister;
