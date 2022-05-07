import React from "react";
import "../css/App.css";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__flag">
          <p style={{ marginTop: "9px" }}>Copyright@2021-Loan</p>
          <LocalAtmIcon />
        </div>
      </div>
    </>
  );
};
export default Footer;
