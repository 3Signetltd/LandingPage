// import React, { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Button,
//   IconButton,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   Alert,
//   CircularProgress,
//   Typography,
//   Box,
//   Container,
//   Paper,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import CloseIcon from "@mui/icons-material/Close";
// import SendIcon from "@mui/icons-material/Send";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import ErrorIcon from "@mui/icons-material/Error";
// import WarningIcon from "@mui/icons-material/Warning";
// import FloatingAlert from "../components/tools/Alert";
// import backendURL from "../config";
// import SignetsImage from "../assets/images/3signet.jpg";

// // Styled components
// const StyledBanner = styled("div")(({ theme }) => ({
//   position: "fixed",
//   top: "80px",
//   left: 0,
//   right: 0,
//   zIndex: 10,
//   animation: "slideDown 0.5s ease-out",
//   backgroundColor: "#f4511e",
//   color: "white",
//   padding: theme.spacing(1, 2),
//   "@keyframes slideDown": {
//     from: { transform: "translateY(-100%)" },
//     to: { transform: "translateY(0)" },
//   },
// }));

// const MasterClassRegister = ({ isVisible, setIsVisible }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [alertInfo, setAlertInfo] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     classInterest: "",
//     sectionInterest: "",
//   });

//   const [floatingAlert, setFloatingAlert] = useState({
//     show: false,
//     message: "",
//     severity: "success",
//   });

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^\d]/g, ""))) {
//       newErrors.phone = "Invalid phone number";
//     }

//     if (!formData.classInterest) {
//       newErrors.classInterest = "Please select a class";
//     }

//     if (!formData.sectionInterest) {
//       newErrors.sectionInterest = "Please select a time slot";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the form before submission
//     if (!validateForm()) {
//       setFloatingAlert({
//         show: true,
//         message: "Please fix the form errors before submitting.",
//         severity: "warning",
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch(`${backendURL}/api/registerJoinCommunity`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//         // Removed credentials: "include" since the backend does not allow credentials
//       });

//       // Check if the response is OK
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Registration failed");
//       }

// // If successful, reset the form and show success message
// setFloatingAlert({
//   show: true,
//   message:
//     "Thank you for registering for our masterclass! We will get in touch with you as soon as possible! 🎉",
//   severity: "success",
// });

//       // Reset form data
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         classInterest: "",
//         sectionInterest: "",
//       });

//       // Close the modal after a delay
//       setTimeout(() => {
//         setIsModalOpen(false);
//       }, 3000);
//     } catch (error) {
//       // Handle errors and show error message
//       setFloatingAlert({
//         show: true,
//         message: error.message || "An error occurred. Please try again.",
//         severity: "error",
//       });
//     } finally {
//       // Stop loading state
//       setIsLoading(false);
//     }
//   };

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setIsVisible(true);
//   }, 5000);

//   return () => clearTimeout(timer);
// }, []);

// if (!isVisible) return null;

//   return (
//     <>
//       <FloatingAlert
//         message={floatingAlert.message}
//         severity={floatingAlert.severity}
//         isOpen={floatingAlert.show}
//         onClose={() => setFloatingAlert((prev) => ({ ...prev, show: false }))}
//         autoHideDuration={5000}
//       />
//       <StyledBanner>
//         <Container>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Typography variant="subtitle1" component="span">
//               3Signet Master Class Interest Form
//             </Typography>
//             <Box display="flex" gap={2} alignItems="center">
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 size="small"
//                 onClick={() => setIsModalOpen(true)}
//                 endIcon={<SendIcon />}
//                 sx={{ color: "#f4511e" }}
//               >
//                 Register Now
//               </Button>
//               <IconButton
//                 size="small"
//                 onClick={handleClose}
//                 sx={{ color: "white" }}
//               >
//                 <CloseIcon />
//               </IconButton>
//             </Box>
//           </Box>
//         </Container>
//       </StyledBanner>

//       <Dialog
//         open={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Typography variant="h6">
//               <span className="text-buttonClr font-semibold">3Signet</span>{" "}
//               Master <span className="text-[#004d73] font-semibold">Class</span>{" "}
//               Interest Form
//             </Typography>
//             <IconButton onClick={() => setIsModalOpen(false)} size="small">
//               <CloseIcon />
//             </IconButton>
//           </Box>
//         </DialogTitle>

//         <DialogContent>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//             {alertInfo && (
//               <Alert severity={alertInfo.severity} sx={{ mb: 2 }}>
//                 {alertInfo.message}
//               </Alert>
//             )}

//             <Box mb={3}>
//               <img
//                 src={SignetsImage}
//                 className="w-[13rem] h-auto"
//                 alt="3Signet Logo"
//                 style={{ margin: "0 auto", display: "block" }}
//               />
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 align="center"
//                 sx={{ mt: 2, fontSize: 16 }}
//               >
//                 Thank you for your interest in the 3Signet Master Class! Please
//                 fill out this form to help us better understand your
//                 preferences.
//               </Typography>
//             </Box>

//             <Box display="flex" flexDirection="column" gap={3}>
//               <TextField
//                 fullWidth
//                 name="name"
//                 label="Your Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 error={!!errors.name}
//                 helperText={errors.name}
//               />

//               <TextField
//                 fullWidth
//                 name="email"
//                 label="Email Address"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 error={!!errors.email}
//                 helperText={errors.email}
//               />

//               <TextField
//                 fullWidth
//                 name="phone"
//                 label="Phone Number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 error={!!errors.phone}
//                 helperText={errors.phone}
//               />

//               <FormControl error={!!errors.classInterest}>
//                 <FormLabel>Program of Interest</FormLabel>
//                 <RadioGroup
//                   name="classInterest"
//                   value={formData.classInterest}
//                   onChange={handleInputChange}
//                 >
//                   <FormControlLabel
//                     value="SQL master class"
//                     control={<Radio />}
//                     label="SQL Master Class"
//                   />
//                   <FormControlLabel
//                     value="Python master class"
//                     control={<Radio />}
//                     label="Python Master Class"
//                   />
//                 </RadioGroup>
//                 {errors.classInterest && (
//                   <FormHelperText>{errors.classInterest}</FormHelperText>
//                 )}
//               </FormControl>

//               <FormControl error={!!errors.sectionInterest}>
//                 <FormLabel>Interested Section (time)</FormLabel>
//                 <RadioGroup
//                   name="sectionInterest"
//                   value={formData.sectionInterest}
//                   onChange={handleInputChange}
//                 >
//                   <FormControlLabel
//                     value="Morning Class"
//                     control={<Radio />}
//                     label="Morning Class"
//                   />
//                   <FormControlLabel
//                     value="Evening Class"
//                     control={<Radio />}
//                     label="Evening Class"
//                   />
//                   <FormControlLabel
//                     value="Only Weekend"
//                     control={<Radio />}
//                     label="Only Weekend"
//                   />
//                 </RadioGroup>
//                 {errors.sectionInterest && (
//                   <FormHelperText>{errors.sectionInterest}</FormHelperText>
//                 )}
//               </FormControl>

//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 disabled={isLoading}
//                 sx={{
//                   bgcolor: "#f4511e",
//                   "&:hover": { bgcolor: "#e64a19" },
//                   mt: 2,
//                 }}
//               >
//                 {isLoading ? (
//                   <>
//                     <CircularProgress size={24} sx={{ mr: 1 }} />
//                     Processing...
//                   </>
//                 ) : (
//                   "Submit"
//                 )}
//               </Button>
//             </Box>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default MasterClassRegister;

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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import FloatingAlert from "../components/tools/Alert";
import backendURL from "../config";
import SignetsImage from "../assets/images/3signet.jpg";

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const MasterClassRegister = ({ isVisible, setIsVisible }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
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

  const courseDetails = {
    "SQL master class": { duration: "10 weeks", fee: "₦150,000" },
    "Python master class": { duration: "7 months", fee: "₦530,000" },
  };

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

    if (!selectedFile) {
      newErrors.file = "Please upload proof of payment";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // In MasterClassRegister component, modify handleSubmit:
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Form validation failed:", errors);
      setFloatingAlert({
        show: true,
        message: "Please fix the form errors before submitting.",
        severity: "warning",
      });
      return;
    }

    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append("image", selectedFile);

      // Debug logs
      console.log("Selected File:", selectedFile);
      console.log("Form Data:", Object.fromEntries(formDataToSend));

      const response = await fetch(`${backendURL}/api/registerJoinCommunity`, {
        method: "POST",
        body: formDataToSend,
      });

      const responseData = await response.json();
      console.log("Server Response:", responseData);

      if (!response.ok) {
        throw new Error(responseData.message || "Registration failed");
      }

      // If successful, reset the form and show success message
      setFloatingAlert({
        show: true,
        message:
          "Thank you for registering for our masterclass! We will get in touch with you as soon as possible! 🎉",
        severity: "success",
      });

      // Rest of the code remains the same...
    } catch (error) {
      console.error("Registration Error:", error);
      setFloatingAlert({
        show: true,
        message: error.message || "An error occurred. Please try again.",
        severity: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add logging to handleFileChange:
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("File selected:", file);
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        console.log("File too large:", file.size);
        setErrors((prev) => ({
          ...prev,
          file: "File size should not exceed 10MB",
        }));
        return;
      }
      setSelectedFile(file);
      setErrors((prev) => ({ ...prev, file: "" }));
    }
  };

  const handleClose = () => setIsVisible(false);

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

      {isVisible && (
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
      )}

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
              <span style={{ color: "#f4511e", fontWeight: 600 }}>3Signet</span>{" "}
              Master{" "}
              <span style={{ color: "#004d73", fontWeight: 600 }}>Class</span>{" "}
              Interest Form
            </Typography>
            <IconButton onClick={() => setIsModalOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Box mb={3}>
              <img
                src={SignetsImage}
                alt="3Signet Logo"
                style={{
                  width: "13rem",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 2 }}
              >
                Thank you for your interest in 3Signet Master Classes!
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                To provide you with the best learning experience, please fill
                out this form.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Course Offerings:
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body2" gutterBottom>
                  • <span className="font-bold">SQL Master Class</span>: 10
                  weeks | ₦150,000
                </Typography>
                <Typography variant="body2">
                  •
                  <span className="font-bold">
                    {" "}
                    Python for Data Science Master Class
                  </span>
                  : 7 months | ₦530,000
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h7" color="primary" gutterBottom>
                Payment Details:
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body2" gutterBottom>
                  <span className="font-bold">Account Name</span>: 3SIGNET LTD
                </Typography>
                <Typography variant="body2">
                  <span className=" font-semibold">Account Number</span>:
                  2045905353
                </Typography>
                <Typography variant="body2">
                  <span className=" font-semibold">Bank</span>: First Bank
                </Typography>
              </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                fullWidth
                required
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                fullWidth
                required
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
                required
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />

              <FormControl required error={!!errors.classInterest}>
                <FormLabel>Program of Interest</FormLabel>
                <RadioGroup
                  name="classInterest"
                  value={formData.classInterest}
                  onChange={handleInputChange}
                >
                  {Object.entries(courseDetails).map(([course, details]) => (
                    <FormControlLabel
                      key={course}
                      value={course}
                      control={<Radio />}
                      label={`${course} (${details.duration} | ${details.fee})`}
                    />
                  ))}
                </RadioGroup>
                {errors.classInterest && (
                  <FormHelperText>{errors.classInterest}</FormHelperText>
                )}
              </FormControl>

              <FormControl required error={!!errors.sectionInterest}>
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

              <Box>
                <FormLabel required>
                  Please upload your proof of payment
                </FormLabel>
                <Box sx={{ mt: 1 }}>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    sx={{ mr: 2 }}
                  >
                    Upload File
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                    />
                  </Button>
                  {selectedFile && (
                    <Typography variant="body2" component="span">
                      {selectedFile.name}
                      <IconButton
                        size="small"
                        onClick={() => setSelectedFile(null)}
                        sx={{ ml: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Typography>
                  )}
                </Box>
                {errors.file && (
                  <FormHelperText error>{errors.file}</FormHelperText>
                )}
              </Box>

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
