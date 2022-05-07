const apiResponse = require("../library/apiResponse");
const shortid = require("shortid");
const connectMysql = require("../mysqldb");
const mysql = require("mysql");

const saveLoanDetailsControl = async (req, res) => {
  console.log("Save loan details controller::", req.query);
  console.log("Start DB Connection...");
  const connection = mysql.createConnection(process.env.MYSQL_DB);

  const { userName, loanPeriod, loanAmount, ip, geoLocation } = req.query;
  // generate userid
  const userId = shortid.generate();
  // generate loanId
  const loanId = shortid.generate();
  // generate transactionId
  const transactionId = shortid.generate();

  // save loan details
  const insertLoanQuery =
    "INSERT INTO loans (loanId,userId,loanAmount,loanPeriod,transactionId) VALUES ('" +
    loanId +
    "','" +
    userId +
    "','" +
    loanAmount +
    "','" +
    loanPeriod +
    "','" +
    transactionId +
    "')";
  const insertUserQuery =
    "INSERT INTO users (userId,username,ip,geolocation,loanId) VALUES ('" +
    userId +
    "','" +
    userName +
    "','" +
    ip +
    "','" +
    geoLocation +
    "','" +
    loanId +
    "')";
  const insertTransactionQuery =
    "INSERT INTO transactions (transactionId,deposit,withdrawal,timestamp) VALUES ('" +
    transactionId +
    "','" +
    0 +
    "','" +
    0 +
    "','" +
    new Date().toLocaleString() +
    "')";
  const serverErrorMessage = "Internal Server Error";
  connection.query(insertUserQuery, function (err, result) {
    if (err) {
      res.status(500).json(apiResponse(true, serverErrorMessage, null));
    } else {
      connection.query(insertLoanQuery, function (err, result) {
        if (err) {
          res.status(500).json(apiResponse(true, serverErrorMessage, null));
        } else {
          connection.query(insertTransactionQuery, function (err, result) {
            if (err) {
              res.status(500).json(apiResponse(true, serverErrorMessage, null));
            } else {
              connection.destroy();
              res
                .status(200)
                .json(apiResponse(false, "Loan Application Success", result));
            }
          });
        }
      });
    }
  });
};
const getAllLoans = async (req, res) => {
  console.log("get all loans controller");
  const getAllLoansQuery =
    "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
};
const test = (request, response) => {
  response.status(200).send("ping success");
};

module.exports = { saveLoanDetailsControl, test };
