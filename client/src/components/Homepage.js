import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../css/homepage.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  const [username, setUserName] = useState("");
  const [loanAmount, setLoanAmout] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "loanAmount":
        setLoanAmout(value);
        break;
      case "loanPeriod":
        setLoanPeriod(value);
        break;
      default:
    }
  };
  const handleLoanRequest = () => {
    console.log("handle loan request", username, loanAmount, loanPeriod);
    toast.success("Loan Request Applied Success");
    handleClearForm();
  };

  const handleClearForm = () => {
    console.log("clear");
    setUserName("");
    setLoanAmout("");
    setLoanPeriod("");
  };
  return (
    <>
      <div className="homepage">
        <Box
          className="loanform"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <span className="welcome-text">A step to your finance</span>
          <TextField
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            name="userName"
            onChange={handleChange}
            value={username}
          />
          <TextField
            id="outlined-basic"
            label="Your Loan Amount"
            variant="outlined"
            name="loanAmount"
            onChange={handleChange}
            value={loanAmount}
          />
          <TextField
            id="outlined-basic"
            label="Loan Period"
            variant="outlined"
            name="loanPeriod"
            onChange={handleChange}
            value={loanPeriod}
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Rate Of Interest"
            defaultValue="10%"
          />
          <div className="submit-div">
            <Button
              variant="contained"
              onClick={handleLoanRequest}
              disabled={username && loanAmount && loanPeriod ? false : true}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              onClick={handleClearForm}
              disabled={username || loanAmount || loanPeriod ? false : true}
            >
              Clear
            </Button>
          </div>
          <span className="disclaimer">
            We collect your geolocation and IP Address.
          </span>
        </Box>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </>
  );
};

export default Homepage;
