import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "../css/index.css";
const Header = () => {
  return (
    <React.Fragment>
      <div className="non__mobile__nav">
        <nav className="navbar-static-top nav__bar navbar-expand ">
          <ul className="collapse navbar-collapse nav__links">
            <li
              className="nav-item nav-link text-white mt-3"
              onClick={() => this.handleNavigation("/home")}
            >
              <AccountBalanceIcon />
            </li>
            <li
              className="nav-item nav-link text-white mt-3"
              onClick={() => this.handleNavigation("/aboutUs")}
            >
              Loan Lender
            </li>
            <li
              className="nav-item nav-link text-white mt-3"
              onClick={() => this.handleNavigation("/bulkOrder")}
            >
              DashBoard
            </li>
            <li
              className="nav-item nav-link text-white mt-3"
              onClick={() => this.handleNavigation("/contact")}
            >
              Transactions
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};
export default Header;
