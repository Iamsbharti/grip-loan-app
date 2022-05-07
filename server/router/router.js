const router = require("express").Router();
const validations = require("../middlewares/requestValidator");
const {
  saveLoanDetailsControl,
  getAllLoans,
  test,
} = require("../controller/loanController");

// ping
router.get("/ping", test);

// save loan details.
router.post(
  "/save",
  validations.saveLoanDetailsValidation,
  saveLoanDetailsControl
);
// get all loans
router.get("/get/all", validations.getAllLoanvalidation, getAllLoans);
module.exports = router;
