const router = require("express").Router();
const validations = require("../middlewares/requestValidator");
const {
  saveLoanDetailsControl,
  test,
} = require("../controller/loanController");

// ping
router.get("/ping", test);

// register user route
router.post(
  "/save",
  validations.saveLoanDetailsValidation,
  saveLoanDetailsControl
);

module.exports = router;
