const joi = require("@hapi/joi");
const apiResponse = require("../library/apiResponse");

let options = { abortEarly: false };

const saveLoanDetailsValidation = async (req, res, next) => {
  console.log("Save loan  Request Validation");
  let saveLoanSchema = joi.object({
    userName: joi.string().min(4).required(),
    loanAmount: joi.number().required(),
    loanPeriod: joi.number().min(1).required(),
    geoLocation: joi.string().required(),
    ip: joi.string().required(),
  });
  let { error } = saveLoanSchema.validate(req.query, options);
  if (error) {
    let errorMessage = [];
    error.details.map((err) => errorMessage.push(err.message));
    return res.json(apiResponse(true, "InValid Input", errorMessage));
  }
  next();
};

module.exports = {
  saveLoanDetailsValidation,
};
